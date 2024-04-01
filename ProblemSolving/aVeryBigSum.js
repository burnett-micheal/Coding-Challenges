// Link: https://www.hackerrank.com/challenges/a-very-big-sum/problem

function aVeryBigSum(ar) {
  let result = 0;
  for (let i = 0; i < ar.length; i++) result += ar[i];
  return result;
}