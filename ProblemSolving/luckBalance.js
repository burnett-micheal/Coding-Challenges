// Link: https://www.hackerrank.com/challenges/luck-balance/problem

function luckBalance(k, contests) {
  // constests[i][0] = luck --- contests[i][1] = importance
  
  const importantContestsLuck = [];
  let totalUnimportantContestsLuck = 0;
  for(let i = 0; i < contests.length; i++) {
    const contest = contests[i];
    const luck = contest[0];
    const isImportant = contest[1] === 1;
    if(isImportant) { importantContestsLuck.push(luck); } else { totalUnimportantContestsLuck += luck; }
  }
  
  let maxImportantContestsLuck = 0;
  importantContestsLuck.sort((a, b) => {return b - a});
  for(let i = 0; i < importantContestsLuck.length; i++) {
    if(i < k) { 
      maxImportantContestsLuck += importantContestsLuck[i]; 
    } else {
      maxImportantContestsLuck -= importantContestsLuck[i];
    }
  }
  
  return totalUnimportantContestsLuck + maxImportantContestsLuck;
}
