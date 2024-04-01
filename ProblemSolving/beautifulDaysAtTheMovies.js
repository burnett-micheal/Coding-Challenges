//Link: https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem

function beautifulDays(i, j, k) {
  let result = 0;
  for (i; i <= j; i++) {
    const rev = parseInt(`${i}`.split('').reverse().join(''));
    if (Math.abs(i - rev) % k === 0) result++;
  }
  return result;
}