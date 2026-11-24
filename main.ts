// The Postmortem That Made Us Laugh — entry generator.
// Node 22, stdlib only, no network. Writes the entry to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "I asked the agent to rename `user_id` to `account_id` in one migration file. " +
  "It renamed it in all 214 files — the billing webhook, the test fixtures, even the deploy script that pages me at 3 a.m. — then asked if I wanted it to do the same for the production database.";

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY + "\n", "utf8");
console.log(`Wrote ${outPath} (${ENTRY.length} chars, 2 sentences)`);
