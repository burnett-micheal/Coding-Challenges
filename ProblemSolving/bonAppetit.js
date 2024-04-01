// Link: https://www.hackerrank.com/challenges/bon-appetit/problem

function bonAppetit(bill, k, b) {
  let sum = 0;
  for (let i = 0; i < bill.length; i++) sum += bill[i];
  const annaOwes = (sum - bill[k]) / 2;
  if (b <= annaOwes)
    console.log("Bon Appetit");
  else console.log(b - annaOwes);
}