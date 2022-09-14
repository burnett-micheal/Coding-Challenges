// Link: https://www.hackerrank.com/challenges/append-and-delete/problem

function appendAndDelete(s, t, k) {
  if (s.length + t.length < k) return "Yes";

  let reqDel = 0;
  let reqIns = 0;
  for (let i = 0; i < s.length; i++) {
    const index = s.length - (1 + i);
    if (s[index] !== t[index]) {
      reqDel = i + 1;
      reqIns = t.length - (s.length - reqDel);
      reqIns = reqIns < 0 ? 0 : reqIns;
      if (reqDel + reqIns > k) break;
    }
  }

  if (reqDel === 0) reqIns = t.length - s.length;

  const remainingOps = k - (reqIns + reqDel);

  if (remainingOps < 0) return "No";
  if (remainingOps === 0) return "Yes";
  if (remainingOps % 2 === 0) return "Yes"; else return "No";
}