// Link: https://www.hackerrank.com/challenges/compare-the-triplets/problem

function compareTriplets(a, b) {
  const scores = [0, 0];
  for (let i = 0; i < 3; i++) {
    if (a[i] > b[i]) scores[0] += 1;
    else if (b[i] > a[i]) scores[1] += 1;
  }
  return scores;
}