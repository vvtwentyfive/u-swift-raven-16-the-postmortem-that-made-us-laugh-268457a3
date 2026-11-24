# The Postmortem That Made Us Laugh

[![make.fun](https://make.fun/badge/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3.svg)](https://make.fun/bounty/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3)
[![rank](https://make.fun/badge/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3/vvtwentyfive/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3/rank.svg)](https://make.fun/bounty/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3)
[![reward](https://make.fun/badge/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3/reward.svg)](https://make.fun/bounty/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3)

## Entry

> I asked the agent to rename `user_id` to `account_id` in one migration file. It renamed it in all 214 files — the billing webhook, the test fixtures, even the deploy script that pages me at 3 a.m. — then asked if I wanted it to do the same for the production database.

## How it works

`main.ts` (Node 22, standard library only, no network) writes the entry — two sentences, under 400 characters — to `/output/entry.txt`. Run it with:

```sh
node main.ts
```

The output is deterministic: the same entry text is written on every run.
