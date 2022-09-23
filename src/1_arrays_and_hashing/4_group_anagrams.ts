// https://leetcode.cn/problems/group-anagrams/
export function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>();
  for (let i = 0; i < strs.length; i++) {
    const key = calculateMapping(strs[i]);
    if (!map.has(key)) {
      map.set(key, [strs[i]]);
    } else {
      map.get(key)?.push(strs[i]);
    }
  }

  return [...map.values()];
}

export function calculateMapping(str = '') {
  const mapping: Record<string, number> = {};
  for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
    mapping[String.fromCharCode(i)] = 0;
  }

  for (const ch of str) {
    mapping[ch]++;
  }

  return JSON.stringify(mapping);
}
