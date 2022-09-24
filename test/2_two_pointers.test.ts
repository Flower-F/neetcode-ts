import { describe, expect, it } from 'vitest';
import { isPalindrome, getPureAlphaString, twoSum, threeSum, maxArea } from '../src/2_two_pointers';

describe('Two Pointers', () => {
  it('Valid Palindrome', () => {
    expect(getPureAlphaString('A man, a plan, a canal: Panama')).toMatchInlineSnapshot('"amanaplanacanalpanama"');
    expect(getPureAlphaString('race a car')).toMatchInlineSnapshot('"raceacar"');
    expect(getPureAlphaString(' ')).toMatchInlineSnapshot('""');
    expect(getPureAlphaString('0P')).toMatchInlineSnapshot('"0p"');
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
    expect(isPalindrome('race a car')).toBe(false);
    expect(isPalindrome(' ')).toBe(true);
    expect(isPalindrome('0P')).toBe(false);
  });

  it('Two Sum II', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toMatchInlineSnapshot(`
      [
        1,
        2,
      ]
    `);
    expect(twoSum([2, 3, 4], 6)).toMatchInlineSnapshot(`
      [
        1,
        3,
      ]
    `);
    expect(twoSum([-1, 0], -1)).toMatchInlineSnapshot(`
      [
        1,
        2,
      ]
    `);
  });

  it('3Sum', () => {
    expect(threeSum([-1, 0, 1, 2, -1, -4])).toMatchInlineSnapshot(`
      [
        [
          -1,
          -1,
          2,
        ],
        [
          -1,
          0,
          1,
        ],
      ]
    `);
    expect(threeSum([0, 1, 1])).toMatchInlineSnapshot('[]');
    expect(threeSum([0, 0, 0])).toMatchInlineSnapshot(`
      [
        [
          0,
          0,
          0,
        ],
      ]
    `);
  });

  it('Container with Most Water', () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
    expect(maxArea([1, 1])).toBe(1);
  });
});
