---
nemoboard: 1
---

# Why it happened

Start from what happened and ask why, five times. The last answer is a cause you can do something about.

## Cards

### Checkout failed for 1 in 5 customers {#what}
@ shape=process at=0,0 size=260x84 color=red

### The payment service ran out of connections {#why-1}
@ shape=process at=0,150 size=260x84

### A slow query held connections open {#why-2}
@ shape=process at=0,300 size=260x84

### A new report ran in the busiest hour {#why-3}
@ shape=process at=0,450 size=260x84

### Reports run on the live database {#why-4}
@ shape=process at=0,600 size=260x84

### There's no copy of the database for reports {#why-5}
@ shape=process at=0,750 size=260x84 color=amber

### Using this template {#how}
@ shape=note at=340,0 size=300x210

#### Five whys

- Each card answers *why?* for the card above it.
- Stop when the answer is something you can change.
- More than one answer to a why? Branch, and follow each.

## Connections

- what -> why-1 : why?
- why-1 -> why-2 : why?
- why-2 -> why-3 : why?
- why-3 -> why-4 : why?
- why-4 -> why-5 : why?
