// https://leetcode.cn/problems/3sum/

export function threeSum(nums: number[]): number[][] {
  if (nums.length < 3) {
    return [];
  }

  nums.sort((a, b) => a - b);
  const res: number[][] = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      return res;
    }

    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const leftNum = nums[left];
      const rightNum = nums[right];

      if (leftNum + rightNum + nums[i] > 0) {
        right--;
      } else if (leftNum + rightNum + nums[i] < 0) {
        left++;
      } else {
        res.push([nums[i], leftNum, rightNum]);
        left++;
        right--;
        while (nums[left - 1] === nums[left]) left++;
        while (nums[right + 1] === nums[right]) right--;
      }
    }
  }

  return res;
}
