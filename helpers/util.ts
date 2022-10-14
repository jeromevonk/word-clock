
export {
  convertTimeToWords,
};

import { emptyState, hourMap, minuteMap } from '@/helpers/wordMap'

function turnOnLetters(currentState: number[][], actions: number[][]) {
  let newState = currentState;
  for (const action of actions) {
    newState[action[0]][action[1]] = 1
  }

  return newState;
}

function convertTimeToWords(time: string) {

  // First, parse hour and minutes
  const parsed: string[] = time.split(':');

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
  let strMinutes: string = '';
  let strHour: string = `${hour}`;

  let state = JSON.parse(JSON.stringify(emptyState));

  if (minutes <= 30) {
    state = turnOnLetters(state, hourMap[hour])
  } else {
    strHour = `${hour + 1}`;
    state = turnOnLetters(state, hourMap[hour + 1])
  }

  state = turnOnLetters(state, minuteMap[minutes])

  switch (minutes) {
    case 0:
      strHour = `${hour} o'clock`;
      break;

    case 5:
      strMinutes = 'five past';
      break;

    case 10:
      strMinutes = 'ten past';
      break;

    case 15:
      strMinutes = 'a quarter past';
      break;

    case 20:
      strMinutes = 'twenty past';
      break;

    case 25:
      strMinutes = 'twenty five past';
      break;

    case 30:
      strMinutes = 'half past';
      break;

    case 35:
      strMinutes = 'twenty five to';
      strHour = `${hour+1}`;
      break;

    case 40:
      strMinutes = 'twenty to';
      break;

    case 45:
      strMinutes = 'a quarter to';
      break;

    case 50:
      strMinutes = 'ten to';
      break;

    case 55:
      strMinutes = 'five to';
      break;

    case 60:
      strHour += ` o'clock`;
      break;
  }

  console.log(strMinutes, strHour);


  return state;
}