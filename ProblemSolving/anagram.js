// Link: https://www.hackerrank.com/challenges/anagram/problem

function anagram(s) {
  if (s.length % 2 > 0) return -1;

  const sa = s.slice(0, (s.length / 2)).split('');
  const sb = s.slice((s.length / 2), s.length).split('');

  const saCopy = [...sa];
  for (let i = 0; i < saCopy.length; i++) {
    const rem = (arr, val) => {
      if (arr.includes(val)) arr.splice(arr.findIndex(a => a === val), 1);
    }
    rem(sa, saCopy[i]);
    rem(sb, saCopy[i]);
  }

  return sb.length;
}