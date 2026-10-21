---
nemoboard: 1
---

# Web app

## Cards

### Customers {#in-customers}
@ shape=port at=-220,22 size=140x40 ref=customers

### Sign in {#sign-in}
@ shape=process at=0,0 size=200x84

### Dashboard {#dashboard}
@ shape=process at=280,0 size=200x84

### Settings {#settings}
@ shape=process at=280,200 size=200x84

### API {#out-api}
@ shape=port at=560,22 size=140x40 ref=api

## Connections

- in-customers -> sign-in
- sign-in -> dashboard
- dashboard -> settings
- dashboard -> out-api
