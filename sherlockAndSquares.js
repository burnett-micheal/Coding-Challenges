// Link: https://www.hackerrank.com/challenges/sherlock-and-squares/problem

function squares(a, b) {
  let loop = true;
  let sqrCount = a === 1 ? 1 : 0;
  let mod = 1;
  let prev = 1;
  while (loop) {
    mod += 2;
    const val = prev + mod;
    if (val >= a && val <= b) sqrCount++;
    if (val > b) loop = false;
    prev = val;
  }
  return sqrCount;
}