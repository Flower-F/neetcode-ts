export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const map = new Map();
  for (const ch of s) {
    map.set(ch, (map.get(ch) || 0) + 1);
  }
  for (const ch of t) {
    if (!map.has(ch) || map.get(ch) <= 0) {
      return false;
    }
    map.set(ch, map.get(ch) - 1);
  }

  return true;
}
