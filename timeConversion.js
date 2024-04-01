// Link: https://www.hackerrank.com/challenges/time-conversion/problem

function timeConversion(s) {
  const isAm = s[s.length - 2].toUpperCase() === "A" ? true : false;
  const hour = parseInt(s.slice(0, 2));
  let hourStr = "";

  if (isAm && hour === 12) hourStr = "00";
  else if (isAm && hour < 10) hourStr = `0${hour}`;
  else if (!isAm && hour === 12) hourStr = "12";
  else if (!isAm && hour !== 12) hourStr = `${hour + 12}`;
  else hourStr = `${hour}`;

  return `${hourStr}${s.slice(2, 8)}`;
}