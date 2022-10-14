import { convertTimeToWords, isEquivalent } from '@/helpers/util'

const expected_4_14 = [
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
]

describe('Util', () => {
  it('converts time to words', () => {
    const state = convertTimeToWords("4:14 pm")
    expect(isEquivalent(state, expected_4_14)).toBe(true);
  })
})
