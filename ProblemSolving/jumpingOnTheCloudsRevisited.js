// Link: https://www.hackerrank.com/challenges/jumping-on-the-clouds-revisited/problem

function jumpingOnClouds(c, k) {
  // starts at c[0]
  let energy = 100;
  let index = 0;
  let loop = true;
  while (loop) {
    index = (index + k) % c.length;
    if (c[index] === 1) energy -= 2;
    energy -= 1;
    if (index === 0) loop = false;
  }
  return energy;
}