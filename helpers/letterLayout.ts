
export {
  getLayout,
  ROWS,
  COLUMNS,
};

import { StringMatrix } from "types/types";

const getLayout = (language: string): StringMatrix => {
  return layouts[language as keyof typeof layouts];
}

const layouts = {
  'EN': [
    ['I', 'T', 'L', 'I', 'S', 'A', 'S', 'T', 'I', 'M', 'E'],
    ['A', 'C', 'Q', 'U', 'A', 'R', 'T', 'E', 'R', 'D', 'C'],
    ['T', 'W', 'E', 'N', 'T', 'Y', 'F', 'I', 'V', 'E', 'X'],
    ['H', 'A', 'L', 'F', 'B', 'T', 'E', 'N', 'F', 'T', 'O'],
    ['P', 'A', 'S', 'T', 'E', 'R', 'U', 'N', 'I', 'N', 'E'],
    ['O', 'N', 'E', 'S', 'I', 'X', 'T', 'H', 'R', 'E', 'E'],
    ['F', 'O', 'U', 'R', 'F', 'I', 'V', 'E', 'T', 'W', 'O'],
    ['E', 'I', 'G', 'H', 'T', 'E', 'L', 'E', 'V', 'E', 'N'],
    ['S', 'E', 'V', 'E', 'N', 'T', 'W', 'E', 'L', 'V', 'E'],
    ['T', 'E', 'N', 'S', 'E', 'O', 'C', 'L', 'O', 'C', 'K'],
  ],

  'FR':
  [
    ['I', 'L', 'N', 'E', 'S', 'T', 'O', 'D', 'E', 'U', 'X'],
    ['Q', 'U', 'A', 'T', 'R', 'E', 'T', 'R', 'O', 'I', 'S'],
    ['N', 'E', 'U', 'F', 'U', 'N', 'E', 'S', 'E', 'P', 'T'],
    ['H', 'U', 'I', 'T', 'S', 'I', 'X', 'C', 'I', 'N', 'Q'],
    ['M', 'I', 'D', 'I', 'X', 'M', 'I', 'N', 'U', 'I', 'T'],
    ['O', 'N', 'Z', 'E', 'R', 'H', 'E', 'U', 'R', 'E', 'S'],
    ['M', 'O', 'I', 'N', 'S', 'O', 'L', 'E', 'D', 'I', 'X'],
    ['E', 'T', 'R', 'Q', 'U', 'A', 'R', 'T', 'P', 'M', 'D'],
    ['V', 'I', 'N', 'G', 'T', '-', 'C', 'I', 'N', 'Q', 'U'],
    ['E', 'T', 'S', 'D', 'E', 'M', 'I', 'E', 'P', 'A', 'M'],
  ]
}

// Constants
const ROWS = layouts.EN.length;
const COLUMNS = layouts.EN.length;