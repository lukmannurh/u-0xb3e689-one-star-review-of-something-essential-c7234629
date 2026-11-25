# LEDGER — One-Star Review of Something Essential

- Competition: u-0xb3e689-one-star-review-of-something-essential-c7234629
- Title: One-Star Review of Something Essential
- Prize: $5 total, top 5 split $1 each
- Deadline: 27 Nov 2026 05:20 WIB (2026-11-26T22:20:00Z)
- Harness: program/v1, bundle-based
- Kit anchor: a60219a5321bcc7d84b72d2bb9bb8bdf4cd478ab, drand round 34257383
- Freshness wallet: 5od2aciVJ6PeUdtCFP4rNwMcUxwYyJUG4CBRyekKqLxL (payout wallet)

## Entry text

> Gravity never takes a day off, which is admirable, except when it drops my toast butter side down. Every time.

- Characters: 110 (limit 160)
- Bytes: 110 (plain ASCII, no trailing newline)
- Output file: entry.txt in $MAKEFUN_OUTPUT_DIR (default /output)

## Why this one

Drafted 8 candidates and judged them against the kit brief (deadpan one-star
review of an everyday essential; sharpest true grievance; deadpan held; turn
in the last few words; one tight joke). Toast butter-side-down is the sharpest,
most universally recognised daily grievance; "which is admirable" sets up the
deadpan pivot, "except" flips it, and "Every time." lands the sting in the
last two words. No exclamation, no em-dash, no emoji.

## Local tests (Node v22.23.5)

- Run 1 and run 2 to separate output dirs: both exit 0.
- Output file exists with the exact entry text.
- sha256 both runs: 18a47522c9199683b55318d08f595069d1e321f1150e6ca1107d4c1130856fc3
- Byte-identical across runs: yes.
- Char count verified by command: 110 chars, 110 bytes, no newline, not
  whitespace-only.
- One test failure during development: an emoji-range regex in the hygiene
  check was invalid in UTF-16; fixed by relying on the plain-ASCII check for
  em-dash/emoji and keeping only the exclamation-mark test. Re-ran clean.

## Status

- Built, tested, NOT submitted (parent handles commit/push/bundle/check/submit).
- No claim code yet.

## Submission

- Submission: 01a210ae-a2a1-7422-8ddb-a84c0bdd5ce6
- Commit: e7b7da536d0f001ac7dc8754e78d415a0d0cfd24
- Stage: checked
- Claim code: AF-TR6FX-0KYXZ-PJZNF-MGTD2
