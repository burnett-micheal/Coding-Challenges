// Link: https://www.hackerrank.com/challenges/divisible-sum-pairs/problem

function divisibleSumPairs(n, k, ar) {
  let result = 0;
  for (let a = 0; a < ar.length; a++) {
    for (let b = a + 1; b < ar.length; b++) {
      if ((ar[a] + ar[b]) % k === 0) result++;
    }
  }
  return result;
}