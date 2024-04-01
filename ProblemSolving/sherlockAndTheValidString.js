// Link: https://www.hackerrank.com/challenges/sherlock-and-valid-string/problem

function isValid(s) {
  const char2count = {};
  s.split('').forEach(char => { if (char in char2count) char2count[char]++; else char2count[char] = 1; });

  const count2char = {};
  for (const char in char2count) {
    const count = `${char2count[char]}`;
    if (count in count2char) count2char[count]++; else count2char[count] = 1;
  }

  const uniqueCounts = Object.keys(count2char);
  if (uniqueCounts.length === 1) return "YES";
  if (uniqueCounts.length >= 3) return "NO";

  const a = { "count": parseInt(uniqueCounts[0]), "freq": count2char[uniqueCounts[0]] };
  const b = { "count": parseInt(uniqueCounts[1]), "freq": count2char[uniqueCounts[1]] };
  if (a.count === 1 && a.freq === 1) return "YES";
  if (b.count === 1 && b.freq === 1) return "YES";
  if (Math.abs(a.count - b.count) <= 1 && (a.freq === 1 || b.freq === 1)) return "YES"; else return "NO";
}