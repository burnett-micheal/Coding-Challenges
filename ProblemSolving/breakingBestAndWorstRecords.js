// Link: https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem

function breakingRecords(scores) {
  let highest = scores[0]; let hCount = 0;
  let lowest = scores[0]; let lCount = 0;
  for (let i = 1; i < scores.length; i++) {
    const score = scores[i];
    if (score > highest) {
      highest = score;
      hCount++;
    } else
      if (score < lowest) {
        lowest = score;
        lCount++;
      }
  }
  return [hCount, lCount];
}