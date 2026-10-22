---
nemoboard: 1
---

# Pick and pack

## Cards

### Order complete? {#in-complete}
@ shape=port at=-220,22 size=140x40 ref=complete

### Print pick list {#pick-list}
@ shape=process at=0,0 size=200x84

### Pick items {#pick-items}
@ shape=process at=280,0 size=200x84

### Pack and label {#pack}
@ shape=process at=560,0 size=200x84

### Ship {#out-ship}
@ shape=port at=840,22 size=140x40 ref=ship

## Connections

- in-complete -> pick-list
- pick-list -> pick-items
- pick-items -> pack
- pack -> out-ship
