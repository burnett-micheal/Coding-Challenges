// Link: https://www.hackerrank.com/challenges/picking-numbers/problem

function pickingNumbers(a) {
  const counts = {};
  for (let i = 0; i < a.length; i++) {
    const key = `${a[i]}`;
    if (key in counts) counts[key]++; else counts[key] = 1;
  }

  let result = 0;
  for (const key in counts) {
    const neg = counts[`${parseInt(key) - 1}`] === undefined ? 0 : counts[`${parseInt(key) - 1}`];
    const pos = counts[`${parseInt(key) + 1}`] === undefined ? 0 : counts[`${parseInt(key) + 1}`];
    const count = counts[key] + (neg > pos ? neg : pos);
    if (count > result) result = count;
  }
  return result;
}