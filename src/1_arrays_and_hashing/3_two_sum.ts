// https://leetcode.cn/problems/two-sum/

export function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const another = target - nums[i];
    if (map.has(another)) {
      const anotherNumber = map.get(another);
      if (anotherNumber !== undefined) {
        return [i, anotherNumber];
      }
    }
    map.set(nums[i], i);
  }

  return [];
}
