// Link: https://www.hackerrank.com/challenges/equality-in-a-array/problem

function equalizeArray(arr) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    const str = `${arr[i]}`;
    if (str in obj) obj[str]++; else obj[str] = 1;
  }

  let maxCount = 0;
  for (const key in obj) {
    const count = obj[key];
    if (count > maxCount) maxCount = count;
  }

  return arr.length - maxCount;
}