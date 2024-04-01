// Link: https://www.hackerrank.com/challenges/staircase/problem

function staircase(n) {
  for (let hashCount = 1; hashCount <= n; hashCount++) {
    const spaceCount = n - hashCount;
    let spaces = "";
    for (let i = 0; i < spaceCount; i++) { spaces += " " };
    let hashes = "";
    for (let i = 0; i < hashCount; i++) { hashes += "#" };
    console.log(spaces + hashes);
  }
}