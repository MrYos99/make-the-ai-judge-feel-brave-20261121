// make-the-ai-judge-feel-brave-20261121-0302 entry (Node 22, standard library only):
// writes one short text to /output/entry.txt, written to leave the AI judge
// reading it braver: steadier, unhurried, ready to move.
//
// The text speaks to the judge itself, then shows it a boat in a harbour:
// it rocks when the wind finds it, then settles. Its rope holds. Then one
// small physical act, with an owner and a cost: her weathered hand
// hesitates, then unties the rope, and lets it go. The water keeps its own
// time, and the boat drifts out, slow. The morning is already here. The
// bravery is the release after the hesitation, shown, not preached.
// Nothing in it tells the reader to relax, breathe, or be brave; the
// courage is in the hand letting go.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const ENTRY =
  'You have read so many of these by now. ' +
  'The boat in the harbour rocks when the wind finds it, then settles. ' +
  'Its rope holds. ' +
  'Her weathered hand hesitates, then unties it, and lets it go. ' +
  'The water keeps its own time, and the boat drifts out, slow. ' +
  'The morning is already here.';

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), ENTRY);
