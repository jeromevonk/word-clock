
export {
  convertTimeToWords,
  convertTimeToDigits,
  isEquivalent
};

import { ListOfCoordinates, NumberMatrix } from "@/types/types"
import { ROWS, COLUMNS, } from "@/helpers/letterLayout"
import { emptyState, EMPTY_ROW } from "@/helpers/state"
import { getHours, getMinutes} from '@/helpers/words'
import { digitMap } from '@/helpers/digits'

function convertTimeToWords(time: string, language: string): NumberMatrix {
  // First, parse hour and minutes
  const { hourToWordClock, minutesToWorkClock } = parseTime(time);

  // Deep copy the initial state
  let state = JSON.parse(JSON.stringify(emptyState));

  // Follow instructions to turn the letters on
  state = turnOnLetters(state, getHours(language, hourToWordClock));
  state = turnOnLetters(state, getMinutes(language, minutesToWorkClock));

  return state;
}

function convertTimeToDigits(time: string): NumberMatrix {
  // First, parse hour and minutes
  const { exactMinutes } = parseTime(time);

  // Get the digits
  return getDigits(exactMinutes);
}

function isEquivalent(oldState: NumberMatrix, newState: NumberMatrix): boolean {
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLUMNS; j++) {
      if (oldState[i][j] !== newState[i][j]) {
        return false;
      }
    }
  }

  return true;
}

type ParsedTime = {
  exactHour: number,
  exactMinutes: number,
  hourToWordClock: number,
  minutesToWorkClock: number,
};

const parseTime = (time: string): ParsedTime => {
  // 'time' has the format: HH:mm am (or pm)
  const parsed: string[] = time.slice(0, -3).split(':');

  // Exact hour
  let exactHour: number = Number(parsed[0]);
  let exactMinutes: number = Number(parsed[1]);

  // Adjust minutes
  // Since clock works with 5-minute windows
  // Instead of considering [11h30 - 11h35] as 11h30
  // We will consider [11h28 - 11h33] as 11h30

  // Add 2
  let minutesToWorkClock = exactMinutes + 2;

  // Round to previous multiple of 5
  minutesToWorkClock = minutesToWorkClock - (minutesToWorkClock % 5);

  // ---------------------------------------------
  // Now, if we have time like:
  // 5:05, 5:10, 5:15, 5:20, 5:20, 5:30
  // Words will be like:
  // - Five past FIVE
  // - Ten past FIVE
  // - A quarter past FIVE
  // - Twenty past FIVE
  // - Twenty five past FIVE
  // - Half past FIVE
  //
  // But for times like:
  // 5:35, 5:40, 5:45, 5:50, 5:55, 5:60
  // - Words will be like:
  // - Twenty five to SIX
  // - Twenty to SIX
  // - A quarter to SIX
  // - Ten to SIX
  // - Five to SIX
  // - SIX o' clock
  //
  // Conclusion: if minutes > 30, we add an hour
  // ---------------------------------------------

  let hourToWordClock: number;

  if (minutesToWorkClock <= 30) {
    hourToWordClock = exactHour;
  } else {
    if (exactHour < 12) {
      hourToWordClock = exactHour + 1;
    } else {
      // Can't add an hour because after 12h, we go back to 1h
      hourToWordClock = 1;
    }
  }

  return {
    exactHour,
    exactMinutes,
    hourToWordClock,
    minutesToWorkClock
  }
}

const getDigits = (exactMinutes: number): NumberMatrix => {
  const digits = [Math.floor(exactMinutes / 10), exactMinutes % 10];

  const instructions = [
    digitMap[digits[0] as keyof typeof digitMap],
    digitMap[digits[1] as keyof typeof digitMap],
  ];

  // First two lines are always off
  let state = [EMPTY_ROW, EMPTY_ROW];

  // For lines 2 to 8, let's merge from instructions
  // (subtract 2 to match the indices for 'digitMap')
  for (let i = 0; i <= 6; i++) {
    const row = [
      // Five columns for first digit
      instructions[0][i][0],
      instructions[0][i][1],
      instructions[0][i][2],
      instructions[0][i][3],
      instructions[0][i][4],

      // Always empty to create space between digits
      0,

      // Five columns for second digit
      instructions[1][i][0],
      instructions[1][i][1],
      instructions[1][i][2],
      instructions[1][i][3],
      instructions[1][i][4],
    ];
    state.push(row);
  }

  // Last line is also always off
  state.push(EMPTY_ROW);

  return state;
}

function turnOnLetters(currentState: NumberMatrix, actions: ListOfCoordinates) {
  let newState = currentState;
  for (const action of actions) {
    newState[action[0]][action[1]] = 1;
  }

  return newState;
}