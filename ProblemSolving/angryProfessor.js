// Link: https://www.hackerrank.com/challenges/angry-professor/problem

function angryProfessor(k, a) {
  let count = 0;
  for (let i = 0; i < a.length; i++) if (a[i] <= 0) count++;
  return count < k ? "YES" : "NO";
}