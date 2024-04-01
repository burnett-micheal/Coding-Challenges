// Link: https://www.hackerrank.com/challenges/palindrome-index/problem

function palindromeIndex(s) {
  const isPalindrome = (str) => {
    const mid = Math.ceil(str.length / 2);
    let a = null;
    let b = null;
    if (str.length % 2 === 0) {
      a = str.substring(0, mid);
      b = str.substring(mid, str.length).split('').reverse().join('');

    } else {
      a = str.substring(0, mid - 1);
      b = str.substring(mid, str.length).split('').reverse().join('');
    }
    return a === b;
  }

  if (isPalindrome(s)) return -1;

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      if (isPalindrome(s.substring(0, i) + s.substring(i + 1, s.length)))
        return i;
      if (isPalindrome(s.substring(0, s.length - 1 - i) + s.substring(s.length - i, s.length)))
        return s.length - 1 - i;
    }
  }
}