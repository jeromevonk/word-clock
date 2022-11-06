
export {
  getHours,
  getMinutes,
};

import { LANGUAGES, ListOfCoordinates } from "@/types/types";
import { PHRASE_EN, hourMap_EN, minuteMap_EN } from "@/helpers/words_EN";
import { PHRASE_FR, hourMap_FR, minuteMap_FR } from "@/helpers/words_FR";
import { PHRASE_ES, hourMap_ES, minuteMap_ES } from "@/helpers/words_ES";
import { PHRASE_PT, hourMap_PT, minuteMap_PT } from "@/helpers/words_PT";

function getHours(language: string, hour: number, isAM: boolean): ListOfCoordinates {
  let index: number|string = hour;
  let phrase;
  let hourLeters;

  switch (language) {
    case LANGUAGES.ENGLISH:
      phrase = PHRASE_EN;
      hourLeters = hourMap_EN[index as keyof typeof hourMap_EN]
      break;

    case LANGUAGES.FRENCH:
      if (hour == 12) {
        index = isAM ? 'MINUIT' : 'MIDI'; 
      }

      phrase = PHRASE_FR;
      hourLeters = hourMap_FR[index as keyof typeof hourMap_FR];
      break;

    case LANGUAGES.SPANISH:
      phrase = PHRASE_ES;
      hourLeters = hourMap_ES[index as keyof typeof hourMap_ES]
      break;

    case LANGUAGES.PORTUGUESE:
      phrase = PHRASE_PT;
      hourLeters = hourMap_PT[index as keyof typeof hourMap_PT]
      break;
  }

  if (phrase === undefined) {
    console.log(`Error getting phrase for language ${language}`)
    phrase = [[]];
  }

  if (hourLeters === undefined) {
    console.log(`Error getting hours for language ${language}, hour: ${hour}, isAM ${isAM}`)
    hourLeters = [[]];
  }

  return [...phrase, ...hourLeters];
}

function getMinutes(language: string, hour: number, minutes: number): ListOfCoordinates {
  let index: number | string = minutes;
  let ret;
  
  switch (language) {
    case LANGUAGES.ENGLISH:
      ret =  minuteMap_EN[index as keyof typeof minuteMap_EN];
      break;

    case LANGUAGES.FRENCH:
      if (minutes == 30) {
        index = hour == 12? 'DEMI' : 'DEMIE';
      }
      ret = minuteMap_FR[index as keyof typeof minuteMap_FR];
      break;

    case LANGUAGES.SPANISH:
      ret =  minuteMap_ES[index as keyof typeof minuteMap_ES];
      break;

    case LANGUAGES.PORTUGUESE:
      ret = minuteMap_PT[index as keyof typeof minuteMap_PT];
      break;
  }

  if (ret === undefined) {
    console.log(`Error getting minutes for language ${language}, hour: ${hour}, minutes ${minutes}`)
    // Return an empty ListOfCoordinates
    ret = [[]];
  }

  return ret;
}