// Link: https://www.hackerrank.com/challenges/cats-and-a-mouse/problem

function catAndMouse(x, y, z) {
  const dis = (a, b) => a > b ? a - b : b - a;
  const aDis = dis(x, z);
  const bDis = dis(y, z);
  if (aDis === bDis) return "Mouse C";
  if (aDis > bDis) return "Cat B"; else return "Cat A";
}