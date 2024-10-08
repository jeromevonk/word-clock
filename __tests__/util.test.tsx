import { act } from 'react-dom/test-utils';
import {
  convertTimeToWords,
  convertTimeToDigits,
  isEquivalent
} from '@/helpers/util'
import { NumberMatrix } from "@/types/types"

const expected_4_14_words = [
  [1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0],
  [1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const expected_11_59_words = [
  [1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
];

const expected_12_45_words = [
  [1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0],
  [1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const expected_6_20_words_PT = [
  [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0],
  [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const expected_6_30_words_FR = [
  [1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0],
];

const expected_6_25_words_ES = [
  [0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const expected_4_14_digits = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0],
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0],
  [0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
  [0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1],
  [0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

const expected_11_59_digits = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0],
  [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
  [1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1],
  [0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0],
  [0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

const expected_12_45_digits = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1],
  [0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0],
  [0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0],
  [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1],
  [0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

const empty = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

describe('Util', () => {
  it('converts time to words (EN) - 4:14', () => {
    let state: NumberMatrix = [];
    act(() => {
      state = convertTimeToWords("4:14 pm", 'EN');
    });
    expect(isEquivalent(state, expected_4_14_words)).toBe(true);
  });

  it('converts time to words (EN) - 11:59', () => {
    let state: NumberMatrix = [];
    act(() => {
      state = convertTimeToWords("11:59 pm", 'EN');
    });
    expect(isEquivalent(state, expected_11_59_words)).toBe(true);
  });

  it('converts time to words (EN) - 12:45', () => {
    let state: NumberMatrix = [];
    act(() => {
      state = convertTimeToWords("12:45 pm", 'EN');
    });
    expect(isEquivalent(state, expected_12_45_words)).toBe(true);
  });

  it('converts time to words (PT) - 6:20', () => {
    let state: NumberMatrix = [];
    act(() => {
      state = convertTimeToWords("6:20 pm", 'PT');
    });
    expect(isEquivalent(state, expected_6_20_words_PT)).toBe(true);
  });

  it('converts time to words (FR) - 6:30', () => {
    let state: NumberMatrix = [];
    act(() => {
      state = convertTimeToWords("6:30 pm", 'FR');
    });
    expect(isEquivalent(state, expected_6_30_words_FR)).toBe(true);
  });

  it('converts time to words (ES) - 6:25', () => {
    let state: NumberMatrix = [];
    act(() => {
      state = convertTimeToWords("6:25 pm", 'ES');
    });
    expect(isEquivalent(state, expected_6_25_words_ES)).toBe(true);
  });

  it('converts time to digits - 4:14', () => {
    let state: NumberMatrix = [];
    act(() => {
      state = convertTimeToDigits("4:14 pm");
    });
    expect(isEquivalent(state, expected_4_14_digits)).toBe(true);
  });

  it('converts time to digits - 11:59', () => {
    let state: NumberMatrix = [];
    act(() => {
      state = convertTimeToDigits("11:59 pm");
    });
    expect(isEquivalent(state, expected_11_59_digits)).toBe(true);
  });

  it('converts time to digits - 12:45', () => {
    let state: NumberMatrix = [];
    act(() => {
      state = convertTimeToDigits("12:45 pm");
    });
    expect(isEquivalent(state, expected_12_45_digits)).toBe(true);
  });

  it('isEquivalent false', () => {
    expect(isEquivalent(expected_11_59_digits, expected_12_45_digits)).toBe(false);
  });

  it('wrong language', () => {
    let state: NumberMatrix = [];
    act(() => {
      state = convertTimeToWords("4:14 pm", 'JP');
    });
    expect(isEquivalent(state, empty)).toBe(true);
  });

});
