// Link: https://www.hackerrank.com/challenges/the-birthday-bar/problem

function birthday(s, d, m) {
  let result = 0;
  for (let i = 0; i < s.length - (m - 1); i++) {
    let sum = 0;
    for (let x = 0; x < m; x++) sum += s[i + x];
    if (sum === d) result++;
  }
  return result;
}