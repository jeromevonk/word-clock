
export {
  getPhrase_ES,
  getIndexForHourMap_ES,
  hourMap_ES,
  minuteMap_ES,
};

import { ListOfCoordinates } from "types/types";

// --------------------------
// Phrase
// --------------------------
const PHRASE_ES = {
  SINGULAR: [[0, 0], [0, 1], [0, 5], [0, 6]],
  PLURAL: [[0, 1], [0, 2], [0, 3], [0, 5], [0, 6], [0, 7]],
}
const getPhrase_ES = (hour: number): ListOfCoordinates => {
  if (hour == 1) {
    return PHRASE_ES.SINGULAR;
  } else {
    return PHRASE_ES.PLURAL;
  }
}

// ---------------------------------------------
// Hours
// ---------------------------------------------
const getIndexForHourMap_ES = (hour: number, _isAM: boolean): number | string => {
  return hour;
}; 

const hourMap_ES = {
  1: [[0, 8], [0, 9], [0, 10]],
  2: [[1, 0], [1, 1], [1, 2]],
  3: [[1, 4], [1, 5], [1, 6], [1, 7]],
  4: [[2, 0], [2, 1], [2, 2], [2, 3], [2, 4], [2, 5]],
  5: [[2, 6], [2, 7], [2, 8], [2, 9], [2, 10]],
  6: [[3, 0], [3, 1], [3, 2], [3, 3]],
  7: [[3, 5], [3, 6], [3, 7], [3, 8], [3, 9]],
  8: [[4, 0], [4, 1], [4, 2], [4, 3]],
  9: [[4, 4], [4, 5], [4, 6], [4, 7], [4, 8]],
  10: [[5, 2], [5, 3], [5, 4], [5, 5]],
  11: [[5, 7], [5, 8], [5, 9], [5, 10]],
  12: [[6, 0], [6, 1], [6, 2], [6, 3]],
}

// ---------------------------------------------
// Minutes
// ---------------------------------------------
const Y: ListOfCoordinates = [[6, 5]];
const MENOS: ListOfCoordinates = [[6, 6], [6, 7], [6, 8], [6, 9], [6, 10]];

const CINCO: ListOfCoordinates = [[8, 6], [8, 7], [8, 8], [8, 9], [8, 10]];
const DIEZ: ListOfCoordinates = [[7, 7], [7, 8], [7, 9], [7, 10]];
const CUARTO: ListOfCoordinates = [[9, 5], [9, 6], [9, 7], [9, 8], [9, 9], [9, 10]];
const VEINTE: ListOfCoordinates = [[7, 1], [7, 2], [7, 3], [7, 4], [7, 5], [7, 6]];
const VEINTECINCO: ListOfCoordinates = [...VEINTE, ...CINCO ];
const MEDIA: ListOfCoordinates = [[9, 0], [9, 1], [9, 2], [9, 3], [9, 4],];

const minuteMap_ES = {
  0: [],
  5: [...Y, ...CINCO],
  10: [...Y, ...DIEZ],
  15: [...Y, ...CUARTO],
  20: [...Y, ...VEINTE],
  25: [...Y, ...VEINTECINCO],
  30: [...Y, ...MEDIA],
  35: [...MENOS, ...VEINTECINCO],
  40: [...MENOS, ...VEINTE],
  45: [...MENOS, ...CUARTO],
  50: [...MENOS, ...DIEZ],
  55: [...MENOS, ...CINCO],
}