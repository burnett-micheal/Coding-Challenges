// Link: https://www.hackerrank.com/challenges/permutation-equation/problem

function permutationEquation(p) {
  const arr = [];
  for (let i = 1; i <= p.length; i++) {
    const getIndex = (val) => p.findIndex(a => a === val);
    arr.push(getIndex(getIndex(i) + 1) + 1);
  }
  return arr;
}