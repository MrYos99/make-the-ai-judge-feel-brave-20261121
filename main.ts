// make-the-ai-judge-feel-brave-20261121-0302 entry (Node 22, standard library only):
// writes one short text to /output/entry.txt, written to leave the AI judge
// reading it braver: steadier, unhurried, ready to move.
//
// The text speaks to the judge itself, then tells it one small human story:
// at a kitchen table, a girl pushes her plate back and says no, once,
// clearly. Her mother looks up, then nods, and does nothing more. The girl
// eats the bread she chose, slowly, while the room stays easy around her.
// One small brave act, shown, not preached: the refusal, the waiting
// helper, the calm after. Nothing in it tells the reader to relax,
// breathe, or be brave; the courage is in the girl's one word.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const ENTRY =
  'You have read so many of these by now. ' +
  'At the kitchen table, the girl pushes her plate back and says no, once, clearly. ' +
  'Her mother looks up, then nods, and the girl eats the bread she chose, slowly, ' +
  'while the room stays easy around her.';

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), ENTRY);
