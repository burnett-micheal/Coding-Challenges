// Link: https://www.hackerrank.com/challenges/save-the-prisoner/problem

function saveThePrisoner(n, m, s) {
  const prisoners = n;
  const candies = m;
  const chair = s;
  const total = candies + chair - 1;

  if (prisoners > total) {
    return total;
  } else if (prisoners < candies + chair) {
    return total % prisoners === 0 ? prisoners : total % prisoners;
  } else return 1;
}