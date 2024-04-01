// Link: https://www.hackerrank.com/challenges/migratory-birds/problem

function migratoryBirds(arr) {
  const counts = {};
  for (let i = 0; i < arr.length; i++) {
    const val = `${arr[i]}`;
    if (val in counts) counts[val]++; else counts[val] = 1;
  }

  let maxValue = 0;
  let maxList = [];
  for (const key in counts) {
    if (counts[key] > maxValue) {
      maxList = [key];
      maxValue = counts[key];
    } else
      if (counts[key] === maxValue)
        maxList.push(key);
  }

  return Math.min(...maxList);
}