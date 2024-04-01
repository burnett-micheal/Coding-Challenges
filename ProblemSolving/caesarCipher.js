// Link: https://www.hackerrank.com/challenges/caesar-cipher-1/problem

function caesarCipher(s, k) {
  const fixIndex = (i, max) => {
    if (i === max) return 0;
    if (i > max) return i % max;
    return i;
  }

  const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');

  let result = "";
  for (let i = 0; i < s.length; i++) {
    const char = s[i].toLowerCase();
    if (alphabet.includes(char)) {
      const val = alphabet[fixIndex(alphabet.indexOf(char) + k, alphabet.length)];
      result += s[i] === s[i].toUpperCase() ? val.toUpperCase() : val;
    } else result += char;
  }

  return result;
}