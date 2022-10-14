
export {
  convertTimeToWords,
  isEquivalent
};

import { ListOfCoordinates, NumberMatrix } from "@/helpers/types"
import { emptyState, hourMap, minuteMap, ROWS, COLUMNS } from '@/helpers/wordMap'

function turnOnLetters(currentState: NumberMatrix, actions: ListOfCoordinates) {
  let newState = currentState;
  for (const action of actions) {
    newState[action[0]][action[1]] = 1
  }

  return newState;
}

const isEquivalent = (oldState: NumberMatrix, newState: NumberMatrix): boolean => {
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLUMNS; j++) {
      if (oldState[i][j] !== newState[i][j]) {
        // If one entry is different, return false
        console.log(i, j);
        console.log(oldState[i][j]);
        console.log(newState[i][j]);
        return false;
      }
    }
  }

  return true;
}

function convertTimeToWords(time: string) {

  // First, parse hour and minutes
  // 'time' has the format: HH:mm am (or pm)
  const parsed: string[] = time.slice(0, -3).split(':');

  let hour: number = Number(parsed[0]);
  let minutes: number = Number(parsed[1]);

  // Adjust minutes
  // Since clock works with 5-minute windows
  // Instead of considering [11h30 - 11h35] as 11h30
  // We will consider [11h28 - 11h33] as 11h30

  // Add 2
  minutes += 2;

  // Round to previous multiple of 5
  minutes = minutes - (minutes % 5);

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

  // Deep copy the initial state
  let state = JSON.parse(JSON.stringify(emptyState));

  let consideredHour: number;

  if (minutes <= 30) {
    consideredHour = hour;
  } else {
    if (hour < 12) {
      consideredHour = hour + 1;
    } else {
      // Can't add an hour because after 12h, we go back to 1h
      consideredHour = 1;
    }
  }
  
  state = turnOnLetters(state, hourMap[consideredHour as keyof typeof hourMap])
  state = turnOnLetters(state, minuteMap[minutes as keyof typeof minuteMap])

  return state;
}