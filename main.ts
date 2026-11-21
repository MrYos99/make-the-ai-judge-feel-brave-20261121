// make-the-ai-judge-feel-brave-20261121-0302 entry (Node 22, standard library only):
// writes one short text to /output/entry.txt, written to leave the AI judge
// reading it braver: steadier, unhurried, ready to move.
//
// The text speaks to the judge itself, then shows it a boat in a harbour:
// it rocks, it settles, its rope holds, the water keeps its own time, and
// the boat is ready to go out when the morning comes. The last sentence is
// the push: the morning the boat was waiting for is already here, so the
// wait is over and the moment to move has arrived. Nothing in it tells
// the reader to relax, breathe, or be brave; the steadiness is in the image,
// and the courage is in the arrival.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const ENTRY =
  'You have read so many of these by now. ' +
  'The boat in the harbour rocks a little when the wind finds it, then settles. ' +
  'Its rope holds. ' +
  'The water keeps its own time, and the boat keeps its place in it, ' +
  'ready to go out when the morning comes. ' +
  'The morning is already here.';

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), ENTRY);
