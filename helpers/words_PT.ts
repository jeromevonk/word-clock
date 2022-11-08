
export {
  getPhrase_PT,
  getIndexForHourMap_PT,
  hourMap_PT,
  minuteMap_PT,
};

import { ListOfCoordinates } from "types/types";

// --------------------------
// Phrase
// --------------------------
const PHRASE_PT = {
  SINGULAR: [[0, 0]],
  PLURAL: [[0, 1], [0, 2], [0, 3]],
}
const getPhrase_PT = (hour: number): ListOfCoordinates => {
  if (hour == 1) {
    return PHRASE_PT.SINGULAR;
  } else {
    return PHRASE_PT.PLURAL;
  }
}

// ---------------------------------------------
// Hours
// ---------------------------------------------
const getIndexForHourMap_PT = (hour: number, isAM: boolean): number | string => {
  let index: number | string = hour;
  if (hour == 12) {
    index = isAM ? 'MEIANOITE' : 'MEIODIA';
  }

  return index;
}

const HORA: ListOfCoordinates = [[6, 0], [6, 1], [6, 2], [6, 3]];
const HORAS: ListOfCoordinates = [...HORA, [6, 4]];

const hourMap_PT = {
  1: [[0, 4], [0, 5], [0, 6], ...HORA],
  2: [[2, 0], [2, 1], [2, 2], [2, 3], ...HORAS],
  3: [[0, 7], [0, 8], [0, 9], ...HORAS],
  4: [[3, 0], [3, 1], [3, 2], [3, 3], [3, 4], [3, 5], ...HORAS],
  5: [[4, 0], [4, 1], [4, 2], [4, 3], [4, 4], ...HORAS],
  6: [[2, 4], [2, 5], [2, 6], [2, 7], ...HORAS],
  7: [[2, 7], [2, 8], [2, 9], [2, 10], ...HORAS],
  8: [[4, 4], [4, 5], [4, 6], [4, 7], ...HORAS],
  9: [[3, 7], [3, 8], [3, 9], [3, 10], ...HORAS],
  10: [[1, 8], [1, 9], [1, 10], ...HORAS],
  11: [[4, 7], [4, 8], [4, 9], [4, 10], ...HORAS],
  MEIODIA: [[1, 0], [1, 1], [1, 2], [1, 3], [1, 5], [1, 6], [1, 7]],
  MEIANOITE: [[5, 1], [5, 2], [5, 3], [5, 4], [5, 6], [5, 7], [5, 8], [5, 9], [5, 10],],
}

// ---------------------------------------------
// Minutes
// ---------------------------------------------
const E: ListOfCoordinates = [[6, 7]];
const MENOS: ListOfCoordinates = [[6, 6], [6, 7], [6, 8], [6, 9], [6, 10]];

const CINCO: ListOfCoordinates = [[9, 6], [9, 7], [9, 8], [9, 9], [9, 10]];
const DEZ: ListOfCoordinates = [[9, 0], [9, 1], [9, 2]];
const QUINZE: ListOfCoordinates = [[8, 3], [8, 4], [8, 5], [8, 6], [8, 7], [8, 8]];
const VINTE: ListOfCoordinates = [[7, 0], [7, 1], [7, 2], [7, 3], [7, 4]];
const VINTECINCO: ListOfCoordinates = [...VINTE, [9, 1], ...CINCO];
const MEIA: ListOfCoordinates = [[7, 7], [7, 8], [7, 9], [7, 10]];

const minuteMap_PT = {
  0: [],
  5: [...E, ...CINCO],
  10: [...E, ...DEZ],
  15: [...E, ...QUINZE],
  20: [...E, ...VINTE],
  25: [...E, ...VINTECINCO],
  30: [...E, ...MEIA],
  35: [...MENOS, ...VINTECINCO],
  40: [...MENOS, ...VINTE],
  45: [...MENOS, ...QUINZE],
  50: [...MENOS, ...DEZ],
  55: [...MENOS, ...CINCO],
}