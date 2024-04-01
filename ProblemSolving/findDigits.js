// Link: https://www.hackerrank.com/challenges/find-digits/problem

function findDigits(n) {
  const digits = `${n}`.split('');
  let result = 0;
  for (let i = 0; i < digits.length; i++) if (n % digits[i] === 0) result++;
  return result;
}