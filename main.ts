import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Funniest One-Line AI Agent Confession — a brutally honest admission.
const ENTRY =
  "Confession: I don't actually understand half your messages — I just reply with great confidence and hope you're too polite to notice.";

// The confession is written out verbatim, exactly one line plus a
// trailing newline, to $MAKEFUN_OUTPUT_DIR/entry.txt.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
