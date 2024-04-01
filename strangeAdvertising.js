// Link: https://www.hackerrank.com/challenges/strange-advertising/problem

function viralAdvertising(n) {
  let totalLikes = 0;
  let todaysImpressions = 5;

  for (let i = 0; i < n; i++) {
    const liked = Math.floor(todaysImpressions / 2);
    const tomorrowsImpressions = liked * 3;
    totalLikes += liked;
    todaysImpressions = tomorrowsImpressions;
  }

  return totalLikes;
}