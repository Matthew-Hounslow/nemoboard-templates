---
nemoboard: 1
---

# API

## Cards

### Web app {#in-web}
@ shape=port at=-220,62 size=140x40 ref=web

### Admin console {#in-admin}
@ shape=port at=-220,182 size=140x40 ref=admin

### Sign-in and accounts {#auth}
@ shape=process at=0,100 size=200x84

### Orders {#orders}
@ shape=process at=280,0 size=200x84

### Notifications {#notifications}
@ shape=process at=280,200 size=200x84

### Payment provider {#out-payments}
@ shape=port at=560,-58 size=140x40 ref=payments

### Database {#out-db}
@ shape=port at=560,62 size=140x40 ref=db

### Email service {#out-email}
@ shape=port at=560,222 size=140x40 ref=email

## Connections

- in-web -> auth
- in-admin -> auth
- auth -> orders
- orders -> notifications
- orders -> out-payments
- orders -> out-db
- notifications -> out-email
