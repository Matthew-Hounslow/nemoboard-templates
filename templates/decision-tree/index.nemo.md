---
nemoboard: 1
---

# Decision tree

One question at the top, a decision at each branch and an outcome at each end. Read it from the top down.

## Cards

### A new request {#start}
@ shape=terminator at=285,0 size=180x64 color=green

### Is it urgent? {#urgent}
@ shape=decision at=300,140 size=150x150 color=amber

### Can we do it today? {#today}
@ shape=decision at=60,360 size=150x150 color=amber

### Is it in scope? {#scope}
@ shape=decision at=540,360 size=150x150 color=amber

### Do it today {#do-now}
@ shape=terminator at=-75,600 size=180x64 color=green

### Escalate to on-call {#escalate}
@ shape=terminator at=165,600 size=180x64 color=red

### Add to the backlog {#backlog}
@ shape=terminator at=405,600 size=180x64 color=teal

### Decline and explain why {#decline}
@ shape=terminator at=645,600 size=180x64 color=slate

### Using this template {#how}
@ shape=note at=900,0 size=300x170

#### Make it yours

- Each diamond asks one question; label its connections with the answers.
- Add a level by putting a new decision between a diamond and an outcome.
- Colour the outcomes the same way throughout: green for go, red for stop.

## Connections

- start -> urgent
- urgent -> today : yes
- urgent -> scope : no
- today -> do-now : yes
- today -> escalate : no
- scope -> backlog : yes
- scope -> decline : no
