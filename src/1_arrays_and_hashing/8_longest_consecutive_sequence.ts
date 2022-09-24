// https://leetcode.cn/problems/longest-consecutive-sequence/

export function longestConsecutive(nums: number[]): number {
  const set = new Set<number>();
  nums.forEach((num) => {
    set.add(num);
  });

  let result = 0;
  set.forEach((num) => {
    let cur = num;
    if (!set.has(cur - 1)) {
      while (set.has(cur + 1)) {
        cur++;
      }
      result = Math.max(result, cur - num + 1);
    }
  });

  return result;
}
