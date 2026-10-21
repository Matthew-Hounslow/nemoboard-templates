---
nemoboard: 1
---

# System overview

Who uses the system, what it's made of and what it relies on. Double-click a card with a stacked edge to see its parts.

## Cards

### Our system {#ours}
@ shape=frame at=320,-40 size=680x470

### Customers {#customers}
@ shape=process at=0,0 size=200x84 color=slate

### Support staff {#support}
@ shape=process at=0,200 size=200x84 color=slate

### Web app {#web}
@ shape=process at=360,0 size=200x84 color=blue sub=./web-app.nemo.md

What customers sign in to.

### Admin console {#admin}
@ shape=process at=360,200 size=200x84 color=blue

### API {#api}
@ shape=process at=700,100 size=200x84 color=violet sub=./api.nemo.md

### Database {#db}
@ shape=database at=720,280 size=160x110 color=violet

### Payment provider {#payments}
@ shape=process at=1080,40 size=200x84 color=slate

### Email service {#email}
@ shape=process at=1080,200 size=200x84 color=slate

### Using this template {#how}
@ shape=note at=0,480 size=320x180

#### Make it yours

- Inside the frame: the parts you build and run. Outside it: people, and the services you rely on.
- Dashed lines go to outside services.
- Web app and API open into their parts; give any other card parts with ⌘↵ (Ctrl+Enter on Windows).

## Connections

- customers -> web
- support -> admin
- web -> api
- admin -> api
- api <-> db : reads and writes
- api --> payments : charges
- api --> email : sends receipts
