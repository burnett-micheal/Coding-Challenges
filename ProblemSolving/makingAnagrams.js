// Link: https://www.hackerrank.com/challenges/making-anagrams/problem

function makingAnagrams(s1, s2) {
  const a = s1.split('');
  const b = s2.split('');
  let result = 0;

  for (let i = 0; i < s1.length; i++) {
    const charA = a.shift();
    const index = b.findIndex(a => a === charA);
    if (index >= 0) b.splice(index, 1); else result++;
  }

  result += b.length;
  return result;
}