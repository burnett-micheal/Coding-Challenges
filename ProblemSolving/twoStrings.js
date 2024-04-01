// Link: https://www.hackerrank.com/challenges/two-strings/problem

function twoStrings(s1, s2) {
  const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
  s1 = s1.split(''); s2 = s2.split('');
  for (let i = 0; i < alpha.length; i++) {
    const char = alpha[i];
    if (s1.includes(char) && s2.includes(char)) return "YES";
  }
  return "NO";
}