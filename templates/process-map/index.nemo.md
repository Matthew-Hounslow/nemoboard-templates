---
nemoboard: 1
---

# Process map

A flow from where it starts to where it ends, with one decision and the branch it leads to. Rename the cards for your own process.

## Cards

### Request received {#start}
@ shape=terminator at=0,10 size=180x64 color=green

### Triage {#triage}
@ shape=process at=260,0 size=200x84

Read it, sort it, decide who owns it.

### Can we resolve it now? {#resolve-now}
@ shape=decision at=540,-33 size=150x150 color=amber

### Resolve {#resolve}
@ shape=process at=770,0 size=200x84 color=blue

### Escalate {#escalate}
@ shape=process at=515,220 size=200x84 color=red

Hand it to someone who can.

### Confirm with the requester {#confirm}
@ shape=process at=1050,0 size=200x84

### Closed {#closed}
@ shape=terminator at=1330,10 size=180x64 color=green

### Using this template {#how}
@ shape=note at=0,200 size=300x170

#### Make it yours

- Double-click a card's name to rename it.
- Drag a dot on a card's edge to connect it.
- Select a step with detail of its own and press ⌘↵ (Ctrl+Enter on Windows) to give it a board of its own.

## Connections

- start -> triage
- triage -> resolve-now
- resolve-now -> resolve : yes
- resolve-now -> escalate : no
- escalate -> resolve : handed back {route=curved}
- resolve -> confirm
- confirm -> closed
