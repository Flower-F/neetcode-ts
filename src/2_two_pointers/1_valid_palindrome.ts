// https://leetcode.cn/problems/valid-palindrome/

export function isPalindrome(s: string): boolean {
  const pureStr = getPureAlphaString(s);

  for (let i = 0, j = pureStr.length - 1; i < j; i++, j--) {
    if (pureStr[i] !== pureStr[j]) {
      return false;
    }
  }

  return true;
}

export function getPureAlphaString(s: string): string {
  let res = '';
  for (let i = 0; i < s.length; i++) {
    if (
      (s[i].charCodeAt(0) >= 'a'.charCodeAt(0) && s[i].charCodeAt(0) <= 'z'.charCodeAt(0)) ||
      (s[i].charCodeAt(0) >= '0'.charCodeAt(0) && s[i].charCodeAt(0) <= '9'.charCodeAt(0))
    ) {
      res += s[i];
    } else if (s[i].charCodeAt(0) >= 'A'.charCodeAt(0) && s[i].charCodeAt(0) <= 'Z'.charCodeAt(0)) {
      res += s[i].toLowerCase();
    }
  }

  return res;
}
