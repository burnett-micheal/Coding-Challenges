// Link: https://www.hackerrank.com/challenges/between-two-sets/problem

function getTotalX(a, b) {
  const isDivisibleA = (num) => {
    let result = true;
    for (let i = 0; i < a.length; i++) {
      if (num % a[i] !== 0) {
        result = false;
        break;
      }
    }
    return result;
  }

  let aStep = undefined;
  const minA = Math.min(...a);
  for (let i = 1; i <= 100; i++) {
    const val = minA * i;
    if (isDivisibleA(val)) {
      aStep = val;
      break;
    }
    if (val > 100) break;
  }

  if (aStep === undefined) return 0;

  let val = 0;
  let result = 0;
  while (val <= Math.min(...b)) {
    val += aStep;
    let isValid = true;
    for (let i = 0; i < b.length; i++) if (b[i] % val !== 0) isValid = false;
    if (isValid) result++;
  }
  return result;
}