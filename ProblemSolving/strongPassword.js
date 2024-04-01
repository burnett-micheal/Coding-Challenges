// Link: https://www.hackerrank.com/challenges/strong-password/problem

function minimumNumber(n, password) {
  let changes = 0;

  if (password.length > 2) {
    if (!/.*[a-z].*/.test(password)) changes++;
    if (!/.*[A-Z].*/.test(password)) changes++;
    if (!/.*\d.*/.test(password)) changes++;
    if (!/.*\W.*/.test(password)) changes++;
    if (password.length + changes < 6) changes += 6 - (password.length + changes);
  } else {
    changes = 6 - password.length;
  }

  return changes;
}