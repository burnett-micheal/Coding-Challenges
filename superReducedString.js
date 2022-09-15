// Link: https://www.hackerrank.com/challenges/reduced-string/problem

function superReducedString(s) {
  s = s.split("");

  const getPairIndex = () => {
    for (let i = 0; i < s.length - 1; i++)
      if (s[i] === s[i + 1])
        return i;
    return -1;
  }

  let index = getPairIndex();
  while (index > -1) {
    s.splice(index, 2);
    index = getPairIndex();
  }

  return s.length === 0 ? "Empty String" : s.join("");
}