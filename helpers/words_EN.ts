
export {
  PHRASE_EN,
  hourMap_EN,
  minuteMap_EN,
};

import { NumberMatrix } from "types/types";

// --------------------------
// Phrase
// --------------------------
const PHRASE_EN: NumberMatrix = [[0, 0], [0, 1], [0, 3], [0, 4]];

// ---------------------------------------------
// Hours
// ---------------------------------------------
const hourMap_EN = {
  1: [[5, 0], [5, 1], [5, 2]],
  2: [[6, 8], [6, 9], [6, 10]],
  3: [[5, 6], [5, 7], [5, 8], [5, 9], [5, 10]],
  4: [[6, 0], [6, 1], [6, 2], [6, 3]],
  5: [[6, 4], [6, 5], [6, 6], [6, 7]],
  6: [[5, 3], [5, 4], [5, 5]],
  7: [[8, 0], [8, 1], [8, 2], [8, 3], [8, 4]],
  8: [[7, 0], [7, 1], [7, 2], [7, 3], [7, 4]],
  9: [[4, 7], [4, 8], [4, 9], [4, 10]],
  10: [[9, 0], [9, 1], [9, 2]],
  11: [[7, 5], [7, 6], [7, 7], [7, 8], [7, 9], [7, 10]],
  12: [[8, 5], [8, 6], [8, 7], [8, 8], [8, 9], [8, 10]],
}

// ---------------------------------------------
// Minutes
// ---------------------------------------------
const PAST: NumberMatrix = [[4, 0], [4, 1], [4, 2], [4, 3]];
const TO: NumberMatrix = [[3, 9], [3, 10]];
const OCLOCK: NumberMatrix = [[9, 5], [9, 6], [9, 7], [9, 8], [9, 9], [9, 10]]
const FIVE: NumberMatrix = [[2, 6], [2, 7], [2, 8], [2, 9]];
const TEN: NumberMatrix = [[3, 5], [3, 6], [3, 7]];
const QUARTER: NumberMatrix = [[1, 0], [1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [1, 7], [1, 8]];
const TWENTY: NumberMatrix = [[2, 0], [2, 1], [2, 2], [2, 3], [2, 4], [2, 5]];
const TWENTYFIVE: NumberMatrix = [...TWENTY, ...FIVE];
const HALF: NumberMatrix = [[3, 0], [3, 1], [3, 2], [3, 3]];

const minuteMap_EN = {
  0: [...OCLOCK],
  5: [...FIVE, ...PAST],
  10: [...TEN, ...PAST],
  15: [...QUARTER, ...PAST],
  20: [...TWENTY, ...PAST],
  25: [...TWENTYFIVE, ...PAST],
  30: [...HALF, ...PAST],
  35: [...TWENTYFIVE, ...TO],
  40: [...TWENTY, ...TO],
  45: [...QUARTER, ...TO],
  50: [...TEN, ...TO],
  55: [...FIVE, ...TO],
  60: [...OCLOCK], // TODO?
}