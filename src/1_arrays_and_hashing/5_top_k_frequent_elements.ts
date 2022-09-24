// https://leetcode.cn/problems/top-k-frequent-elements/

export function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map<number, number>();

  let maxSize = 0;
  nums.forEach((num) => {
    map.set(num, (map.get(num) || 0) + 1);
    maxSize = Math.max(maxSize, map.get(num) as number);
  });

  // 桶排序
  const bucket = new Array<number[] | undefined>();
  map.forEach((value, key) => {
    if (!bucket[value]) {
      bucket[value] = [];
    }
    bucket[value]?.push(key);
  });

  const res = [];
  for (let i = maxSize; i >= 0 && res.length < k; i--) {
    if (bucket[i]) {
      res.push(...(bucket[i] as number[]));
    }
  }
  return res;
}
