// Link: https://www.hackerrank.com/challenges/string-construction/problem

function stringConstruction(s) {
  return new Set(s.split('')).size;
}