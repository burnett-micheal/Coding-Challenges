// Link: https://www.hackerrank.com/challenges/game-of-thrones/problem

function gameOfThrones(s) {
  const chars = {};
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char in chars) chars[char]++; else chars[char] = 1;
  }

  let allowOdd = (s.length % 2) !== 0;
  for (const key in chars) if ((chars[key] % 2) !== 0) if (allowOdd) allowOdd = false; else return "NO";
  return "YES";
}