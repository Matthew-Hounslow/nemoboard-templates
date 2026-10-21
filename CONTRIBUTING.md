# Adding a template

A good template is a board people would otherwise draw from scratch, laid out cleanly, with names they can rename rather than delete.

## Make it in nemoboard

1. On [nemoboard.com](https://nemoboard.com), choose **New in-browser project…** in the project menu and build the board. Give any card with detail of its own a sub-board (⌘↵, or Ctrl+Enter on Windows).
2. Keep it to about 5–15 cards a board, with cards that don't overlap, and use colour the same way throughout.
3. Add a note card titled **Using this template**, with two or three tips on making it yours.
4. Choose **Export ▸ Project as .zip** and unzip it. Those files are the template.
5. Choose **Export ▸ This board as PNG** on the top board. That picture is the preview.

The [file format](https://nemoboard.com/docs/file-format.html) is plain markdown, so you can also write or tidy the files by hand.

## Add it to this repository

- `templates/<name>/`: the boards, with the top board as `index.nemo.md`. The folder name is lowercase words joined by dashes (`incident-review`). The top board's `# Title` is the name the project gets when it's imported.
- `previews/<name>.png`: the picture of the top board.
- A row for it in the table in `README.md`, with its two links: **Open in nemoboard** (`https://nemoboard.com/?template=<name>`) and **Download .zip** (`https://github.com/Matthew-Hounslow/nemoboard-templates/releases/download/templates/<name>.zip`).
- Pictures used by image cards go in `templates/<name>/images/`. Nothing else in the folder is imported, so leave other files out.

Then open a pull request. A check runs on it (`node scripts/check.mjs`, which you can also run yourself, with nothing to install) and says what to fix if a board wouldn't open cleanly. Once the pull request is merged, the template's `.zip` appears on the [templates release](https://github.com/Matthew-Hounslow/nemoboard-templates/releases/tag/templates) within a minute or two.

## Licence

By sending a template, you agree that it's shared under this repository's licence, [CC BY 4.0](LICENSE), and that it's yours to share.
