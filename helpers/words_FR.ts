
export {
  PHRASE_FR,
  hourMap_FR,
  minuteMap_FR,
};

import { NumberMatrix } from "types/types";

// --------------------------
// Phrase
// --------------------------
const PHRASE_FR: NumberMatrix = [[0, 0], [0, 1], [0, 3], [0, 4], [0, 5]];

// ---------------------------------------------
// Hours
// ---------------------------------------------
const HEURE: NumberMatrix = [[5, 5], [5, 6], [5, 7], [5, 8], [5, 9]];
const HEURES: NumberMatrix = [...HEURE, [5, 10]];

const hourMap_FR = {
  1: [[2, 4], [2, 5], [2, 6], ...HEURE],
  2: [[0, 7], [0, 8], [0, 9], [0, 10], ...HEURES],
  3: [[1, 6], [1, 7], [1, 8], [1, 9], [1, 10], ...HEURES],
  4: [[1, 0], [1, 1], [1, 2], [1, 3], [1, 4], [1, 5], ...HEURES],
  5: [[3, 7], [3, 8], [3, 9], [3, 10], ...HEURES],
  6: [[3, 4], [3, 5], [3, 6], ...HEURES],
  7: [[2, 7], [2, 8], [2, 9], [2, 10], ...HEURES],
  8: [[3, 0], [3, 1], [3, 2], [3, 3], ...HEURES],
  9: [[2, 0], [2, 1], [2, 2], [2, 3]], ...HEURES,
  10: [[4, 2], [4, 3], [4, 4], ...HEURES],
  11: [[5, 0], [5, 1], [5, 2], [5, 3], ...HEURES],
  12: [[4, 0], [4, 1], [4, 2], [4, 3]],

  // MIDI: [[4, 0], [4, 1], [4, 2], [4, 3]],
  // MINUIT: [[4, 5], [4, 6], [4, 7], [4, 8], [4, 9], [4, 10]],
}

// ---------------------------------------------
// Minutes
// ---------------------------------------------
const ET: NumberMatrix = [[7, 0], [7, 1]];
const MOINS: NumberMatrix = [[6, 0], [6, 1], [6, 2], [6, 3], [6, 4]];

const CINQ: NumberMatrix = [[8, 6], [8, 7], [8, 8], [8, 9]];
const DIX: NumberMatrix = [[6, 8], [6, 9], [6, 10]];
const QUART: NumberMatrix = [[7, 3], [7, 4], [7, 5], [7, 6], [7, 7]];
const VINGT: NumberMatrix = [[8, 0], [8, 1], [8, 2], [8, 3], [8, 4]];
const VINGT_CINQ: NumberMatrix = [...VINGT, [8, 5], ...CINQ];
const DEMIE: NumberMatrix = [[9, 0], [9, 1], [9, 3], [9, 4], [9, 5], [9, 6], [9, 7]];

const minuteMap_FR = {
  0: [],
  5: [...CINQ],
  10: [...DIX],
  15: [...ET, ...QUART],
  20: [...VINGT],
  25: [...VINGT_CINQ],
  30: [...ET, ...DEMIE],
  35: [...MOINS, ...VINGT_CINQ],
  40: [...MOINS, ...VINGT],
  45: [...MOINS, ...QUART],
  50: [...MOINS, ...DIX],
  55: [...MOINS, ...CINQ],
  60: [],
}