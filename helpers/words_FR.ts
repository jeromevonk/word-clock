
export {
  getPhrase_FR,
  getIndexForHourMap_FR,
  hourMap_FR,
  minuteMap_FR,
};

import { ListOfCoordinates } from "types/types";

// --------------------------
// Phrase
// --------------------------
const getPhrase_FR = (_hour: number): ListOfCoordinates => {
  return PHRASE_FR;
}
const PHRASE_FR: ListOfCoordinates = [[0, 0], [0, 1], [0, 3], [0, 4], [0, 5]];

// ---------------------------------------------
// Hours
// ---------------------------------------------
const getIndexForHourMap_FR = (hour: number, isAM: boolean): number | string => {
  let index: number | string = hour;
  if (hour == 12) {
    index = isAM ? 'MINUIT' : 'MIDI';
  }

  return index;
}
const HEURE: ListOfCoordinates = [[5, 5], [5, 6], [5, 7], [5, 8], [5, 9]];
const HEURES: ListOfCoordinates = [...HEURE, [5, 10]];

const hourMap_FR = {
  1: [[2, 4], [2, 5], [2, 6], ...HEURE],
  2: [[0, 7], [0, 8], [0, 9], [0, 10], ...HEURES],
  3: [[1, 6], [1, 7], [1, 8], [1, 9], [1, 10], ...HEURES],
  4: [[1, 0], [1, 1], [1, 2], [1, 3], [1, 4], [1, 5], ...HEURES],
  5: [[3, 7], [3, 8], [3, 9], [3, 10], ...HEURES],
  6: [[3, 4], [3, 5], [3, 6], ...HEURES],
  7: [[2, 7], [2, 8], [2, 9], [2, 10], ...HEURES],
  8: [[3, 0], [3, 1], [3, 2], [3, 3], ...HEURES],
  9: [[2, 0], [2, 1], [2, 2], [2, 3], ...HEURES],
  10: [[4, 2], [4, 3], [4, 4], ...HEURES],
  11: [[5, 0], [5, 1], [5, 2], [5, 3], ...HEURES],
  MIDI: [[4, 0], [4, 1], [4, 2], [4, 3]],
  MINUIT: [[4, 5], [4, 6], [4, 7], [4, 8], [4, 9], [4, 10]],
}

// ---------------------------------------------
// Minutes
// ---------------------------------------------
const ET: ListOfCoordinates = [[7, 0], [7, 1]]; // used for QUART
const MOINS: ListOfCoordinates = [[6, 0], [6, 1], [6, 2], [6, 3], [6, 4]];
const LE: ListOfCoordinates = [[6, 6], [6, 7]];

const CINQ: ListOfCoordinates = [[8, 6], [8, 7], [8, 8], [8, 9]];
const DIX: ListOfCoordinates = [[6, 8], [6, 9], [6, 10]];
const QUART: ListOfCoordinates = [[7, 3], [7, 4], [7, 5], [7, 6], [7, 7]];
const VINGT: ListOfCoordinates = [[8, 0], [8, 1], [8, 2], [8, 3], [8, 4]];
const VINGT_CINQ: ListOfCoordinates = [...VINGT, [8, 5], ...CINQ];
const DEMI: ListOfCoordinates = [[9, 0], [9, 1], [9, 3], [9, 4], [9, 5], [9, 6]]; // alread has 'ET'
const DEMIE: ListOfCoordinates = [...DEMI, [9, 7]];

const minuteMap_FR = {
  0: [],
  5: [...CINQ],
  10: [...DIX],
  15: [...ET, ...QUART],
  20: [...VINGT],
  25: [...VINGT_CINQ],
  DEMI: [...DEMI],
  DEMIE: [...DEMIE],
  35: [...MOINS, ...VINGT_CINQ],
  40: [...MOINS, ...VINGT],
  45: [...MOINS, ...LE, ...QUART],
  50: [...MOINS, ...DIX],
  55: [...MOINS, ...CINQ],
}