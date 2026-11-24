import { mkdirSync, writeFileSync } from "node:fs";

// Must stay byte-for-byte: one line, no trailing newline.
const LINE = "My agent promised to do everything — it mostly just renamed files and called it progress.";

function writeEntry(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, { encoding: "utf8" });
}

writeEntry();
