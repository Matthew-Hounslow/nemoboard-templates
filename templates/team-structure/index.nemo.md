---
nemoboard: 1
---

# Team structure

Who leads what. Double-click Engineering to see its teams; give any other group its own board the same way.

## Cards

### Chief executive {#ceo}
@ shape=process at=420,0 size=200x84 color=violet

Name

### Product {#product}
@ shape=process at=0,200 size=200x84 color=blue

Head: name

### Engineering {#engineering}
@ shape=process at=280,200 size=200x84 color=blue sub=./engineering.nemo.md

Head: name

### Design {#design}
@ shape=process at=560,200 size=200x84 color=blue

Head: name

### Operations {#operations}
@ shape=process at=840,200 size=200x84 color=blue

Head: name

### Using this template {#how}
@ shape=note at=0,360 size=340x210

#### Make it yours

- Put a name in each card's text, under its role or team.
- Give a group its teams with ⌘↵ (Ctrl+Enter on Windows), as Engineering has.
- A dashed line can show someone who reports to two people.

## Connections

- ceo -> product {start=bottom end=top}
- ceo -> engineering {start=bottom end=top}
- ceo -> design {start=bottom end=top}
- ceo -> operations {start=bottom end=top}
