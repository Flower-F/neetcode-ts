import {
  containsDuplicate,
  isAnagram,
  twoSum,
  groupAnagrams,
  topKFrequent,
  calculateMapping,
  productExceptSelf,
  isValidSudoku,
} from '../src/1_arrays_and_hashing';
import { describe, expect, it } from 'vitest';

describe('Arrays & Hashing', () => {
  it('Contains Duplicate', () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
    expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
    expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
  });

  it('Valid Anagram', () => {
    expect(isAnagram('anagram', 'nagaram')).toBe(true);
    expect(isAnagram('rat', 'car')).toBe(false);
    expect(isAnagram('ab', 'a')).toBe(false);
  });

  it('Two Sum', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toMatchInlineSnapshot(`
      [
        1,
        0,
      ]
    `);
    expect(twoSum([3, 2, 4], 6)).toMatchInlineSnapshot(`
      [
        2,
        1,
      ]
    `);
    expect(twoSum([3, 3], 6)).toMatchInlineSnapshot(`
      [
        1,
        0,
      ]
    `);
  });

  it('Group Anagrams', () => {
    expect(calculateMapping()).toMatchInlineSnapshot(
      '"{\\"a\\":0,\\"b\\":0,\\"c\\":0,\\"d\\":0,\\"e\\":0,\\"f\\":0,\\"g\\":0,\\"h\\":0,\\"i\\":0,\\"j\\":0,\\"k\\":0,\\"l\\":0,\\"m\\":0,\\"n\\":0,\\"o\\":0,\\"p\\":0,\\"q\\":0,\\"r\\":0,\\"s\\":0,\\"t\\":0,\\"u\\":0,\\"v\\":0,\\"w\\":0,\\"x\\":0,\\"y\\":0,\\"z\\":0}"',
    );
    expect(calculateMapping('abcd')).toMatchInlineSnapshot(
      '"{\\"a\\":1,\\"b\\":1,\\"c\\":1,\\"d\\":1,\\"e\\":0,\\"f\\":0,\\"g\\":0,\\"h\\":0,\\"i\\":0,\\"j\\":0,\\"k\\":0,\\"l\\":0,\\"m\\":0,\\"n\\":0,\\"o\\":0,\\"p\\":0,\\"q\\":0,\\"r\\":0,\\"s\\":0,\\"t\\":0,\\"u\\":0,\\"v\\":0,\\"w\\":0,\\"x\\":0,\\"y\\":0,\\"z\\":0}"',
    );
    expect(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])).toMatchInlineSnapshot(`
      [
        [
          "eat",
          "tea",
          "ate",
        ],
        [
          "tan",
          "nat",
        ],
        [
          "bat",
        ],
      ]
    `);
    expect(groupAnagrams(['a'])).toMatchInlineSnapshot(`
      [
        [
          "a",
        ],
      ]
    `);
    expect(groupAnagrams([''])).toMatchInlineSnapshot(`
      [
        [
          "",
        ],
      ]
    `);
  });

  it('Top K Frequent Elements', () => {
    expect(topKFrequent([1, 1, 1, 2, 2, 3], 2)).toMatchInlineSnapshot(`
      [
        1,
        2,
      ]
    `);
    expect(topKFrequent([1], 1)).toMatchInlineSnapshot(`
      [
        1,
      ]
    `);
  });

  it('Product of Array Except Self', () => {
    expect(productExceptSelf([1, 2, 3, 4])).toMatchInlineSnapshot(`
      [
        24,
        12,
        8,
        6,
      ]
    `);
    expect(productExceptSelf([-1, 1, 0, -3, 3])).toMatchInlineSnapshot(`
      [
        -0,
        0,
        9,
        -0,
        0,
      ]
    `);
  });

  it('Valid Sudoku', () => {
    expect(
      isValidSudoku([
        ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
        ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
        ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
        ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
        ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
        ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
        ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
        ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
        ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
      ]),
    ).toBe(true);
    expect(
      isValidSudoku([
        ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
        ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
        ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
        ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
        ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
        ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
        ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
        ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
        ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
      ]),
    ).toBe(false);
  });
});
