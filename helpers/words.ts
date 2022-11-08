
export {
  getHours,
  getMinutes,
};

import { LANGUAGES, ListOfCoordinates } from "@/types/types";
import { getPhrase_EN, getIndexForHourMap_EN, hourMap_EN, minuteMap_EN } from "@/helpers/words_EN";
import { getPhrase_FR, getIndexForHourMap_FR, hourMap_FR, minuteMap_FR } from "@/helpers/words_FR";
import { getPhrase_ES, getIndexForHourMap_ES, hourMap_ES, minuteMap_ES } from "@/helpers/words_ES";
import { getPhrase_PT, getIndexForHourMap_PT, hourMap_PT, minuteMap_PT } from "@/helpers/words_PT";

function getHours(language: string, hour: number, isAM: boolean): ListOfCoordinates {
  let index: number|string;
  let phrase;
  let hourLeters;

  switch (language) {
    case LANGUAGES.ENGLISH:
      phrase = getPhrase_EN(hour);
      index = getIndexForHourMap_EN(hour, isAM);
      hourLeters = hourMap_EN[index as keyof typeof hourMap_EN]
      break;

    case LANGUAGES.FRENCH:
      phrase = getPhrase_FR(hour);
      index = getIndexForHourMap_FR(hour, isAM);
      hourLeters = hourMap_FR[index as keyof typeof hourMap_FR];
      break;

    case LANGUAGES.SPANISH:
      phrase = getPhrase_ES(hour);
      index = getIndexForHourMap_ES(hour, isAM);
      hourLeters = hourMap_ES[index as keyof typeof hourMap_ES]
      break;

    case LANGUAGES.PORTUGUESE:
      phrase = getPhrase_PT(hour);
      index = getIndexForHourMap_PT(hour, isAM);
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
  let ret: ListOfCoordinates = [[]];
  
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