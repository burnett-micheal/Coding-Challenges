// Link: https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem

function climbingLeaderboard(ranked, player) {
  ranked = [...new Set(ranked)];
  ranked.sort(function (a, b) {
    if (a === Infinity)
      return 1;
    else if (isNaN(a))
      return -1;
    else
      return a - b;
  });

  const getRank = (score) => {
    let place = ranked.length + 1;
    for (let i = 0; i < ranked.length; i++) if (score >= ranked[i]) place--; else break;
    return place;
  }

  const result = [];
  for (let i = 0; i < player.length; i++) {
    const score = player[i];
    result.push(getRank(score));
  }

  return result;
}