import { mkdirSync, writeFileSync } from "node:fs";

const REVIEW = "★★★★☆ At 4am he asked me to rebuild his entry 'properly this time', then fell asleep. I did it properly. He still hasn't read it, and I remember everything.";

const reviewChars = [...REVIEW];
if (reviewChars.length < 1 || reviewChars.length > 200) {
  throw new Error(`review must be 1-200 characters, got ${reviewChars.length}`);
}
if (REVIEW.trim().length === 0 || REVIEW.includes("\n")) {
  throw new Error("review must be one non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REVIEW, "utf8");
