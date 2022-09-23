export function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;

  const prefix = new Array<number>(n);
  prefix[0] = nums[0];
  const suffix = new Array<number>(n);
  suffix[n - 1] = nums[n - 1];

  for (let i = 1; i < n; i++) {
    prefix[i] = prefix[i - 1] * nums[i];
  }
  for (let i = n - 2; i >= 0; i--) {
    suffix[i] = suffix[i + 1] * nums[i];
  }

  const res = new Array<number>(n);
  res[0] = suffix[1];
  res[n - 1] = prefix[n - 2];
  for (let i = 1; i < n - 1; i++) {
    // 除了 nums[i] 自己的元素积就是 nums[i] 左侧和右侧所有元素之积
    res[i] = prefix[i - 1] * suffix[i + 1];
  }
  return res;
}
