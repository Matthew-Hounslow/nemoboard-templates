---
nemoboard: 1
---

# SIPOC

A process on one page: who supplies it, what goes in, its main steps, what comes out and who it's for. A good place to start before mapping a process in detail.

## Cards

### Suppliers {#suppliers}
@ shape=frame at=0,0 size=280x624

### Inputs {#inputs}
@ shape=frame at=300,0 size=280x624

### Process {#process}
@ shape=frame at=600,0 size=280x624

### Outputs {#outputs}
@ shape=frame at=900,0 size=280x624

### Customers {#customers}
@ shape=frame at=1200,0 size=280x624

### Customer {#s-customer}
@ shape=process at=40,60 size=200x84 color=slate

### Warehouse {#s-warehouse}
@ shape=process at=40,170 size=200x84 color=slate

### Payment provider {#s-payments}
@ shape=process at=40,280 size=200x84 color=slate

### Order {#i-order}
@ shape=document at=340,54 size=200x96

### Stock levels {#i-stock}
@ shape=data at=340,170 size=200x84

### Payment {#i-payment}
@ shape=data at=340,280 size=200x84

### Take the order {#p-take}
@ shape=process at=640,60 size=200x84 color=blue

### Check stock {#p-check}
@ shape=process at=640,170 size=200x84 color=blue

### Pack {#p-pack}
@ shape=process at=640,280 size=200x84 color=blue

### Ship {#p-ship}
@ shape=process at=640,390 size=200x84 color=blue

### Invoice {#p-invoice}
@ shape=process at=640,500 size=200x84 color=blue

### Parcel {#o-parcel}
@ shape=process at=940,60 size=200x84

### Tracking email {#o-email}
@ shape=document at=940,164 size=200x96

### Invoice {#o-invoice}
@ shape=document at=940,274 size=200x96

### Customer {#c-customer}
@ shape=process at=1240,60 size=200x84 color=green

### Finance team {#c-finance}
@ shape=process at=1240,170 size=200x84 color=green

### Using this template {#how}
@ shape=note at=0,664 size=340x210

#### Make it yours

- Fill in Process first: four to seven steps, from start to finish.
- Then what comes out and who gets it, then what goes in and who provides it.
- Map a step in detail by giving it a sub-board (⌘↵, or Ctrl+Enter on Windows).

## Connections

- p-take -> p-check
- p-check -> p-pack
- p-pack -> p-ship
- p-ship -> p-invoice
