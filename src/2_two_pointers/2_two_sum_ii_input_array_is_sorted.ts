// https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/

export function twoSum(numbers: number[], target: number): number[] {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const leftNum = numbers[left];
    const rightNum = numbers[right];

    if (leftNum + rightNum > target) {
      right--;
      while (numbers[right] === numbers[right + 1]) right--;
    } else if (leftNum + rightNum < target) {
      left++;
      while (numbers[left] === numbers[left - 1]) left++;
    } else {
      return [left + 1, right + 1];
    }
  }

  return [];
}
