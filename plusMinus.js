// Link: https://www.hackerrank.com/challenges/plus-minus/problem

function plusMinus(arr) {
  let posCount = 0;
  let negCount = 0;
  let zeroCount = 0;

  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];
    if (val > 0) posCount++;
    else if (val < 0) negCount++;
    else zeroCount++;
  }

  console.log(posCount / arr.length);
  console.log(negCount / arr.length);
  console.log(zeroCount / arr.length);
}