import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: a deadpan one-star review of gravity, an everyday essential.
// Single line, 110 characters, no trailing newline in the text itself.
const ENTRY =
  "Gravity never takes a day off, which is admirable, except when it drops my toast butter side down. Every time.";

const MAX_CHARS = 160;

function validate(text: string): void {
  if (typeof text !== "string" || text.length === 0) {
    throw new Error("entry must not be empty");
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text.length > MAX_CHARS) {
    throw new Error(`entry is ${text.length} characters, over the 160 limit`);
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  // Deadpan hygiene, per the judge brief: no exclamation mark doing the
  // work. The plain-ASCII check below also rejects em-dashes and emoji.
  if (text.includes("!")) {
    throw new Error("entry must stay deadpan: no exclamation mark");
  }
  if (/[^\x20-\x7E]/.test(text)) {
    throw new Error("entry must be plain ASCII text");
  }
  // The gate counts characters; make sure the text round-trips as UTF-8.
  const roundTrip = Buffer.from(text, "utf8").toString("utf8");
  if (roundTrip !== text) {
    throw new Error("entry is not clean UTF-8 text");
  }
}

function main(): void {
  validate(ENTRY);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, ENTRY, "utf8");
}

main();
