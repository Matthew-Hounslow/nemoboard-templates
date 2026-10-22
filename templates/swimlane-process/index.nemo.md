---
nemoboard: 1
---

# Swimlane process

One process across the teams that share it, each team in its own lane. A connection that crosses a lane is a handover. Double-click Pick and pack to see its steps.

## Cards

### Customer {#lane-customer}
@ shape=frame at=0,0 size=1720x200

### Sales {#lane-sales}
@ shape=frame at=0,220 size=1720x200

### Operations {#lane-ops}
@ shape=frame at=0,440 size=1720x200

### Finance {#lane-finance}
@ shape=frame at=0,660 size=1720x200

### Place order {#place}
@ shape=process at=60,58 size=200x84

### Send missing details {#missing}
@ shape=process at=620,58 size=200x84

### Receive goods {#receive}
@ shape=terminator at=1480,68 size=180x64 color=green

### Check order {#check}
@ shape=process at=340,278 size=200x84 color=blue

### Order complete? {#complete}
@ shape=decision at=645,245 size=150x150 color=amber

### Pick and pack {#pick}
@ shape=process at=900,498 size=200x84 color=teal sub=./pick-and-pack.nemo.md

### Ship {#ship}
@ shape=process at=1180,498 size=200x84 color=teal

### Send invoice {#invoice}
@ shape=process at=1180,718 size=200x84 color=violet

### Payment received {#paid}
@ shape=terminator at=1480,728 size=180x64 color=green

### Using this template {#how}
@ shape=note at=0,900 size=320x210

#### Make it yours

- One frame per team or role: rename them, and add or remove lanes.
- Put each step in the lane of whoever does it.
- Keep handovers (lines between lanes) few: each one is a wait.

## Connections

- place -> check {end=left}
- check -> complete
- complete -> pick : yes
- complete -> missing : no
- missing -> check
- pick -> ship
- ship -> receive
- ship -> invoice
- invoice -> paid
