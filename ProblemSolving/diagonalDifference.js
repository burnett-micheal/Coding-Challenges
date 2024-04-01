// Link: https://www.hackerrank.com/challenges/diagonal-difference/problem

function diagonalDifference(arr) {
  let l = 0;
  let r = 0;

  for (let i = 0; i < arr.length; i++) {
    l += arr[i][i];
    r += arr[i][arr.length - (i + 1)];
  }

  return Math.abs(l - r);
}