// Link: https://www.hackerrank.com/challenges/drawing-book/problem

function pageCount(n, p) {
  if (p === n || p === 1) return 0;
  if (n % 2 !== 0 && p === n - 1) return 0;

  const bDis = Math.ceil((p - 1) / 2);
  const eDis = n % 2 === 0 ? Math.ceil((n - p) / 2) : Math.floor((n - p) / 2);

  return Math.min(bDis, eDis);
}