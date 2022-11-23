import { 
  convertTimeToWords, 
  convertTimeToDigits, 
  isEquivalent 
} from '@/helpers/util'

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

describe('Util', () => {
  it('converts time to words (EN) - 4:14', () => {
    const state = convertTimeToWords("4:14 pm", 'EN');
    expect(isEquivalent(state, expected_4_14_words)).toBe(true);
  });

  it('converts time to words (EN) - 11:59', () => {
    const state = convertTimeToWords("11:59 pm", 'EN');
    expect(isEquivalent(state, expected_11_59_words)).toBe(true);
  });

  it('converts time to words (EN) - 12:45', () => {
    const state = convertTimeToWords("12:45 pm", 'EN');
    expect(isEquivalent(state, expected_12_45_words)).toBe(true);
  });

  it('converts time to digits - 12:45', () => {
    const state = convertTimeToDigits("4:14 pm");
    expect(isEquivalent(state, expected_4_14_digits)).toBe(true);
  });

  it('converts time to digits - 12:45', () => {
    const state = convertTimeToDigits("11:59 pm");
    expect(isEquivalent(state, expected_11_59_digits)).toBe(true);
  });

  it('converts time to digits - 12:45', () => {
    const state = convertTimeToDigits("12:45 pm");
    expect(isEquivalent(state, expected_12_45_digits)).toBe(true);
  });

  it('isEquivalent false', () => {
    expect(isEquivalent(expected_11_59_digits, expected_12_45_digits)).toBe(false);
  });
})
