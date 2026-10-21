---
nemoboard: 1
---

# Value stream map

How work flows from the customer's order to delivery. Each step shows how long it takes (above), where it happens and who does it (below). Red clouds mark problems to fix.

## Cards

### Customer order {#order}
@ shape=terminator at=-260,44 size=180x64 color=green

### Receive order {#receive}
@ shape=process at=0,0 size=190x186 step time="10 min" where="Order inbox" who=Sales

### Plan production {#plan}
@ shape=process at=270,0 size=190x186 step time="1 d" where=ERP who=Planner

### Make {#make}
@ shape=process at=540,0 size=190x186 color=blue step time="4 h" where="Line 2" who=Operators

### Inspect {#inspect}
@ shape=process at=810,0 size=190x186 step time="30 min" where="QC bench" who="Quality team"

### Ship {#ship}
@ shape=process at=1080,0 size=190x186 step time="1 d" where=Warehouse who=Logistics

### Delivered {#delivered}
@ shape=terminator at=1350,44 size=180x64 color=green

### Orders wait in a queue {#queue}
@ shape=burst at=280,-150 size=170x110 color=red

### Rework loop {#rework}
@ shape=burst at=820,-150 size=170x110 color=red

### Supplier {#supplier}
@ shape=process at=535,320 size=200x84 color=slate

### Using this template {#how}
@ shape=note at=-260,320 size=320x170

#### Make it yours

- Write each step's real time, place and people in its Time, Where and Who parts.
- Add up the Time parts for the lead time, and compare it with the time spent working.
- Put a red cloud beside each step where work waits or goes wrong.

## Connections

- order -> receive
- receive -> plan
- plan -> make
- make -> inspect
- inspect -> ship
- ship -> delivered
- supplier --> make : materials
- queue --> plan
- rework --> inspect
