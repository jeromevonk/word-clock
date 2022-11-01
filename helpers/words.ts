
export {
  getPhrase,
  getHours,
  getMinutes,
};

import { LANGUAGES, NumberMatrix } from "types/types";
import { PHRASE_EN, hourMap_EN, minuteMap_EN } from "@/helpers/words_EN";
import { PHRASE_FR, hourMap_FR, minuteMap_FR } from "@/helpers/words_FR";
import { PHRASE_ES, hourMap_ES, minuteMap_ES } from "@/helpers/words_ES";
import { PHRASE_PT, hourMap_PT, minuteMap_PT } from "@/helpers/words_PT";

function getPhrase(language: string): NumberMatrix {
  switch (language) {
    case LANGUAGES.ENGLISH:
      return PHRASE_EN;

    case LANGUAGES.FRENCH:
      return PHRASE_FR;

    case LANGUAGES.SPANISH:
      return PHRASE_ES;

    case LANGUAGES.PORTUGUESE:
      return PHRASE_PT;

    default:
      return PHRASE_EN;
  }
}

function getHours(language: string, hour: number): NumberMatrix {
  switch (language) {
    case LANGUAGES.ENGLISH:
      return hourMap_EN[hour as keyof typeof hourMap_EN];

    case LANGUAGES.FRENCH:
      return hourMap_FR[hour as keyof typeof hourMap_FR];

    case LANGUAGES.SPANISH:
      return hourMap_ES[hour as keyof typeof hourMap_ES];

    case LANGUAGES.PORTUGUESE:
      return hourMap_PT[hour as keyof typeof hourMap_PT];

    default:
      return hourMap_EN[hour as keyof typeof hourMap_EN];
  }
}

function getMinutes(language: string, minutes: number): NumberMatrix {
  switch (language) {
    case LANGUAGES.ENGLISH:
      return minuteMap_EN[minutes as keyof typeof minuteMap_EN];

    case LANGUAGES.FRENCH:
      return minuteMap_FR[minutes as keyof typeof minuteMap_FR];

    case LANGUAGES.SPANISH:
      return minuteMap_ES[minutes as keyof typeof minuteMap_ES];

    case LANGUAGES.PORTUGUESE:
      return minuteMap_PT[minutes as keyof typeof minuteMap_PT];

    default:
      return minuteMap_EN[minutes as keyof typeof minuteMap_EN];
  }
}