// Link: https://www.hackerrank.com/challenges/birthday-cake-candles/problem

function birthdayCakeCandles(candles) {
  const maxHeight = Math.max(...candles);
  let count = 0;
  for (let i = 0; i < candles.length; i++) if (candles[i] === maxHeight) count++;
  return count;
}