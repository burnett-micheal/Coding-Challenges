// Link: https://www.hackerrank.com/challenges/magic-square-forming/problem

function formingMagicSquare(s) {
  const squares = ['618753294', '816357492', '834159672', '438951276', '672159834', '276951438', '294753618', '492357816'];

  let sStr = "";
  for (let i = 0; i < s.length; i++) sStr += s[i].join('');

  const getErrors = (index) => {
    let count = 0;
    for (let i = 0; i < 9; i++)
      if (sStr[i] !== squares[index][i]) {
        const desired = parseInt(squares[index][i]);
        const current = parseInt(sStr[i]);
        count += Math.abs(desired - current);
      }
    return count;
  }

  let lowestErrors = Infinity;
  let bestIndex = undefined;
  for (let i = 0; i < 8; i++) {
    let errors = getErrors(i);
    if (errors < lowestErrors) {
      lowestErrors = errors;
      bestIndex = i;
    }
  }

  let result = 0;
  const square = squares[bestIndex];
  for (let i = 0; i < 9; i++) {
    const desired = parseInt(square[i]);
    const current = parseInt(sStr[i]);
    result += Math.abs(desired - current);
  }

  return result;
}