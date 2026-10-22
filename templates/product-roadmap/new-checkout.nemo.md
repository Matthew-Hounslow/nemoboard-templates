---
nemoboard: 1
---

# New checkout

The milestones, from design to everyone using it.

## Cards

### Design {#design}
@ shape=process at=0,0 size=200x84

Prototype, tested with five customers.

### Build {#build}
@ shape=process at=280,0 size=200x84

### Beta for 10% of shoppers {#beta}
@ shape=process at=560,0 size=200x84

### Better than today? {#better}
@ shape=decision at=840,-33 size=150x150 color=amber

### Launch to everyone {#launch}
@ shape=terminator at=1070,10 size=180x64 color=green

## Connections

- design -> build
- build -> beta
- beta -> better
- better -> launch : yes
- better --> build : no {start=bottom end=bottom}
