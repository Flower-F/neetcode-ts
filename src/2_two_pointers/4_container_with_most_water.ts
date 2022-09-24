// https://leetcode.cn/problems/container-with-most-water/

export function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let res = 0;

  while (left < right) {
    const leftHeight = height[left];
    const rightHeight = height[right];

    res = Math.max(res, (right - left) * Math.min(leftHeight, rightHeight));

    if (leftHeight > rightHeight) {
      right--;
    } else {
      left++;
    }
  }

  return res;
}
