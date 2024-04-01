// Link: https://www.hackerrank.com/challenges/electronics-shop/problem

function getMoneySpent(keyboards, drives, b) {
  let maxSpent = -1;
  for (let kI = 0; kI < keyboards.length; kI++) {
    for (let dI = 0; dI < drives.length; dI++) {
      const price = keyboards[kI] + drives[dI];
      if (price <= b && price > maxSpent) maxSpent = price;
    }
  }
  return maxSpent;
}