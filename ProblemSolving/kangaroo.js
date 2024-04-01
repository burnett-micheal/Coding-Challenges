// Link: https://www.hackerrank.com/challenges/kangaroo/problem

function kangaroo(x1, v1, x2, v2) {
  if (v1 <= v2) return "NO";

  const gain = v1 - v2;
  if (((x2 - x1) / gain) % 1 === 0)
    return "YES";
  else
    return "NO";
}