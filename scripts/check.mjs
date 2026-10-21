// Checks every template against nemoboard's file format (https://nemoboard.com/docs/file-format.html), so a template
// that wouldn't open cleanly can't be merged. Plain Node, nothing to install: node scripts/check.mjs
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join, normalize, relative } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const TEMPLATES = join(ROOT, 'templates');
const SHAPES = ['process', 'decision', 'terminator', 'data', 'document', 'database', 'burst', 'note', 'frame', 'text', 'port', 'image'];
const COLORS = ['slate', 'blue', 'teal', 'green', 'amber', 'red', 'violet', 'pink'];
const ARROWS = ['<-->', '<->', '-->', '-.-', '---', '->'];
const ROUTES = ['orthogonal', 'curved', 'straight'];
const SIZES = { process: [200, 84], decision: [150, 150], terminator: [180, 64], data: [200, 84], document: [200, 96], database: [160, 110], burst: [170, 110], note: [260, 200], frame: [480, 320], text: [220, 40], port: [140, 40], image: [240, 180] };

const problems = [];
const walk = (dir) => readdirSync(dir).flatMap((f) => (statSync(join(dir, f)).isDirectory() ? walk(join(dir, f)) : [join(dir, f)]));

/** `key=value key="a value" flag` → { key: 'value', flag: '' } */
function attrs(line) {
  const out = {};
  for (const m of line.matchAll(/([a-z]+)(?:=(?:"([^"]*)"|(\S+)))?/g)) out[m[1]] = m[2] ?? m[3] ?? '';
  return out;
}

function checkBoard(file, template) {
  const say = (msg, line) => problems.push(`${relative(ROOT, file)}${line ? `:${line}` : ''}: ${msg}`);
  const lines = readFileSync(file, 'utf8').split('\n');
  if (lines[0] !== '---' || lines[1] !== 'nemoboard: 1' || lines[2] !== '---') say('should start with the frontmatter `nemoboard: 1` between two `---` lines', 1);
  const at = (re) => lines.findIndex((l) => re.test(l));
  const title = at(/^# \S/);
  const cardsAt = at(/^## Cards$/);
  const connsAt = at(/^## Connections$/);
  if (title < 0) say('has no `# Title`');
  if (cardsAt < 0) return say('has no `## Cards` section');
  if (connsAt >= 0 && connsAt < cardsAt) say('should have `## Cards` before `## Connections`', connsAt + 1);

  const cards = new Map();
  const end = connsAt >= 0 ? connsAt : lines.length;
  let fence = false;
  for (let i = cardsAt + 1; i < end; i++) {
    const l = lines[i];
    if (/^\s*(```|~~~)/.test(l)) fence = !fence;
    if (fence) continue;
    if (/^##? /.test(l)) say('a line in a card’s text can’t start with `#` or `##` (write headings in card text as `####` or deeper)', i + 1);
    if (!l.startsWith('### ')) continue;
    const head = l.match(/^### (.+?) \{#([A-Za-z0-9_.-]+)\}$/);
    if (!head) {
      say('a card heading should be `### Title {#id}`, with an id of letters, digits, `-`, `_` or `.`', i + 1);
      continue;
    }
    const [, name, id] = head;
    if (cards.has(id)) say(`the id \`${id}\` is used twice on this board`, i + 1);
    const line = lines[i + 1] ?? '';
    if (!line.startsWith('@ ')) {
      say(`“${name}” needs its \`@\` line straight after the heading`, i + 2);
      continue;
    }
    const a = attrs(line.slice(2));
    const shape = a.shape ?? 'process';
    if (!SHAPES.includes(shape)) say(`“${name}” has an unknown shape \`${shape}\``, i + 2);
    if (a.color !== undefined && !COLORS.includes(a.color)) say(`“${name}” has an unknown colour \`${a.color}\` (one of ${COLORS.join(', ')})`, i + 2);
    if (!/^-?\d+(\.\d+)?,-?\d+(\.\d+)?$/.test(a.at ?? '')) say(`“${name}” needs a position, \`at=x,y\``, i + 2);
    if (a.size !== undefined && !/^\d+x\d+$/.test(a.size)) say(`“${name}” has a size that isn’t \`WxH\``, i + 2);
    if (shape === 'image' && !(a.src && existsSync(join(dirname(file), a.src)))) say(`“${name}” is an image card whose picture (\`src=\`) isn’t in the template`, i + 2);
    if (shape === 'port' && !a.ref) say(`“${name}” is a port, so it needs \`ref=\` (the id of the card outside it stands for)`, i + 2);
    if (a.sub !== undefined) {
      const target = normalize(join(dirname(file), a.sub));
      if (!a.sub.startsWith('./') || !a.sub.endsWith('.nemo.md')) say(`“${name}” has a sub-board path that isn’t \`./name.nemo.md\``, i + 2);
      else if (!target.startsWith(template + '/')) say(`“${name}” has a sub-board outside its template`, i + 2);
      else if (!existsSync(target)) say(`“${name}” opens into \`${a.sub}\`, which isn’t in the template`, i + 2);
    }
    const [x, y] = (a.at ?? '0,0').split(',').map(Number);
    const [w, h] = a.size ? a.size.split('x').map(Number) : (SIZES[shape] ?? [200, 84]);
    cards.set(id, { name, shape, x, y, w, h, line: i + 1 });
  }
  if (!cards.size) say('has no cards');

  // Cards mustn't sit on top of one another (a frame is drawn behind the cards it groups, so it may hold them).
  const solid = [...cards.values()].filter((c) => c.shape !== 'frame');
  for (let i = 0; i < solid.length; i++)
    for (let j = i + 1; j < solid.length; j++) {
      const [p, q] = [solid[i], solid[j]];
      if (p.x < q.x + q.w && q.x < p.x + p.w && p.y < q.y + q.h && q.y < p.y + p.h) say(`“${p.name}” and “${q.name}” overlap`, q.line);
    }

  if (connsAt < 0) return;
  for (let i = connsAt + 1; i < lines.length; i++) {
    const l = lines[i].trim();
    if (!l) continue;
    const m = l.match(/^- (\S+) (\S+) (\S+)(?: : (.*?))?(?: \{([^}]*)\})?$/);
    if (!m) {
      say('a connection should be `- from -> to : label`', i + 1);
      continue;
    }
    const [, from, arrow, to, , opts] = m;
    if (!ARROWS.includes(arrow)) say(`\`${arrow}\` isn’t a connection (one of ${ARROWS.join(' ')})`, i + 1);
    for (const end of [from, to]) if (!cards.has(end)) say(`the connection names \`${end}\`, which isn’t a card on this board`, i + 1);
    const route = opts && attrs(opts).route;
    if (opts && !ROUTES.includes(route)) say(`\`{${opts}}\` should be \`{route=${ROUTES.join('|')}}\``, i + 1);
  }
}

const templates = readdirSync(TEMPLATES).filter((d) => statSync(join(TEMPLATES, d)).isDirectory());
for (const slug of templates) {
  const dir = join(TEMPLATES, slug);
  const say = (msg) => problems.push(`templates/${slug}: ${msg}`);
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) say('the folder name should be lowercase words joined by dashes');
  if (!existsSync(join(dir, 'index.nemo.md'))) say('needs a top board, `index.nemo.md`');
  if (!existsSync(join(ROOT, 'previews', `${slug}.png`))) say(`needs a picture of its top board at \`previews/${slug}.png\``);
  if (!readFileSync(join(ROOT, 'README.md'), 'utf8').includes(`templates/${slug}`)) say('isn’t listed in README.md');
  for (const file of walk(dir)) {
    const rel = relative(dir, file);
    if (file.endsWith('.nemo.md')) checkBoard(file, dir);
    else if (!/^images\/[^/]+\.(png|jpe?g|gif|webp|svg)$/i.test(rel)) say(`\`${rel}\` isn’t a board or a picture in \`images/\`, so nemoboard would leave it out`);
  }
}

if (problems.length) {
  console.error(problems.join('\n'));
  console.error(`\n${problems.length} problem${problems.length === 1 ? '' : 's'} in the templates.`);
  process.exit(1);
}
console.log(`${templates.length} templates checked: all fine.`);
