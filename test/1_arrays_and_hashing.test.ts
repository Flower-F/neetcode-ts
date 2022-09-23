import { containsDuplicate, isAnagram } from '../src/1_arrays_and_hashing';
import { describe, expect, it } from 'vitest';

describe('Arrays & Hashing', () => {
  it('Contains Duplicate', () => {
    expect(containsDuplicate([1, 2, 3, 1])).toEqual(true);
    expect(containsDuplicate([1, 2, 3, 4])).toEqual(false);
    expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toEqual(true);
  });

  it('Valid Anagram', () => {
    expect(isAnagram('anagram', 'nagaram')).toEqual(true);
    expect(isAnagram('rat', 'car')).toEqual(false);
    expect(isAnagram('ab', 'a')).toEqual(false);
  });
});
