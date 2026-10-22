---
nemoboard: 1
---

# Incident review

What happened, from the first alert to back to normal, what it affected, why it happened and what we'll change. Written to learn, not to blame.

## Cards

### Alert fires {#alert}
@ shape=terminator at=0,10 size=180x64 color=amber

10:42, from the error-rate alert.

### Triage {#triage}
@ shape=process at=260,0 size=200x84

Who was paged, and how soon they started.

### Mitigate {#mitigate}
@ shape=process at=540,0 size=200x84

What stopped the harm.

### Resolve {#resolve}
@ shape=process at=820,0 size=200x84

The fix, and how we knew it worked.

### Back to normal {#normal}
@ shape=terminator at=1100,10 size=180x64 color=green

11:58, 1 h 16 min after the alert.

### Impact {#impact}
@ shape=process at=0,200 size=200x84 color=slate

Who was affected, how, and for how long.

### Why it happened {#why}
@ shape=process at=400,200 size=200x84 color=red sub=./why-it-happened.nemo.md

Five whys, from what happened to its cause.

### Follow-up actions {#actions}
@ shape=frame at=760,170 size=560x284

### Fix the alert threshold {#fix-alert}
@ shape=process at=800,210 size=200x84 color=blue

Owner, and a date.

### Write the runbook {#runbook}
@ shape=process at=1080,210 size=200x84 color=blue

Owner, and a date.

### Test the failover {#failover}
@ shape=process at=800,330 size=200x84 color=blue

Owner, and a date.

### Share what we learned {#share}
@ shape=process at=1080,330 size=200x84 color=blue

Owner, and a date.

### Using this template {#how}
@ shape=note at=0,500 size=320x210

#### Make it yours

- Put the real time of each step in its text, and keep the timeline to what happened.
- Ask why five times inside *Why it happened*.
- Give each follow-up action one owner and a date.

## Connections

- alert -> triage
- triage -> mitigate
- mitigate -> resolve
- resolve -> normal
- why -> actions : so we'll
