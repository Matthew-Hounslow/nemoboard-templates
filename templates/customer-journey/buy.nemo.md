---
nemoboard: 1
---

# Buy

The steps of buying, from the basket to the confirmation.

## Cards

### Consider {#in-consider}
@ shape=port at=-220,22 size=140x40 ref=consider

### Basket {#basket}
@ shape=process at=0,0 size=200x84

### Delivery details {#delivery}
@ shape=process at=280,0 size=200x84

### Payment {#payment}
@ shape=process at=560,0 size=200x84

### Paid? {#paid}
@ shape=decision at=840,-33 size=150x150 color=amber

### Confirmation {#confirmation}
@ shape=process at=1070,0 size=200x84 color=green

### Try another card {#retry}
@ shape=process at=815,200 size=200x84 color=red

### Use {#out-use}
@ shape=port at=1350,22 size=140x40 ref=use

## Connections

- in-consider -> basket
- basket -> delivery
- delivery -> payment
- payment -> paid
- paid -> confirmation : yes
- paid -> retry : no
- retry --> payment {route=curved}
- confirmation -> out-use
