// Link: https://www.hackerrank.com/challenges/apple-and-orange/problem

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let applesHitCount = 0;
  for (let i = 0; i < apples.length; i++) {
    const loc = a + apples[i];
    if (loc >= s && loc <= t) applesHitCount += 1;
  }
  console.log(applesHitCount);

  let orangesHitCount = 0;
  for (let i = 0; i < oranges.length; i++) {
    const loc = b + oranges[i];
    if (loc >= s && loc <= t) orangesHitCount += 1;
  }
  console.log(orangesHitCount);
}