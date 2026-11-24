// Make the AI Judge Laugh: Cat Reviews Its Human
// Bounty: u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990
import { mkdirSync, writeFileSync } from "node:fs";

// Output contract: one deterministic line, 1-200 characters,
// no trailing newline — the judge reads exactly one review line.
const LINE = "One star: the human left my food bowl empty for four whole minutes this morning while standing there holding the bag, waiting for room service.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
