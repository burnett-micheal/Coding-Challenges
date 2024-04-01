// Link: https://www.hackerrank.com/challenges/mini-max-sum/problem

function miniMaxSum(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const rem = (val) => arr.splice(arr.findIndex(a => a === val), 1);
  rem(min); rem(max);
  const sum = arr[0] + arr[1] + arr[2];
  console.log(min + sum, max + sum);
}