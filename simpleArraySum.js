// Link: https://www.hackerrank.com/challenges/simple-array-sum/problem

function simpleArraySum(ar) {
  let result = 0;
  for (let i = 0; i < ar.length; i++) result += ar[i];
  return result;
}