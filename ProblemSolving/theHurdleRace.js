// Link: https://www.hackerrank.com/challenges/the-hurdle-race/problem

function hurdleRace(k, height) {
  const maxHeight = Math.max(...height);
  return maxHeight > k ? maxHeight - k : 0;
}