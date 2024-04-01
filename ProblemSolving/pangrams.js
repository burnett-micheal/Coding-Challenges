// Link: https://www.hackerrank.com/challenges/pangrams/problem

function pangrams(s) {
  const arr = s.toLowerCase().split('');
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let isPangram = true;
  for (let i = 0; i < alphabet.length; i++)
    if (!arr.includes(alphabet[i])) {
      isPangram = false;
      break;
    }
  return isPangram ? "pangram" : "not pangram";
}

