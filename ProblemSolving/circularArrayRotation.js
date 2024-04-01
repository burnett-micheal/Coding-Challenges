// Link: https://www.hackerrank.com/challenges/circular-array-rotation/problem

function circularArrayRotation(a, k, queries) {
  const newArr = [...a];
  for (let i = 0; i < k % a.length; i++) {
    const val = newArr.pop();
    newArr.unshift(val);
  }

  const result = [];
  for (let i = 0; i < queries.length; i++) {
    result.push(newArr[queries[i]]);
  }

  return result;
}