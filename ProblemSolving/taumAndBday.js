// Link: https://www.hackerrank.com/challenges/taum-and-bday/problem

function taumBday(b, w, bc, wc, z) {
  const isBigSum = (x, y) => y > 0 ? x > Number.MAX_SAFE_INTEGER - y : x < Number.MIN_SAFE_INTEGER - y;
  const isBigProduct = (x, y) => {
    if (x == 0 || y == 0) return false;
    var result = x * y;
    if (result > Number.MAX_SAFE_INTEGER || result < Number.MIN_SAFE_INTEGER) return true;
    return x != parseInt(result / y);
  }

  const sum = (x, y) => {
    if (typeof x == "bigint" || typeof y == "bigint" || isBigSum(x, y)) {
      if (typeof x == "number") x = BigInt(x);
      if (typeof y == "number") y = BigInt(y);
    }
    return x + y;
  }

  const product = (x, y) => {
    if (typeof x == "bigint" || typeof y == "bigint" || isBigProduct(x, y)) {
      if (typeof x == "number") x = BigInt(x);
      if (typeof y == "number") y = BigInt(y);
    }
    return x * y;
  }

  const costPerWhite = bc + z > wc ? wc : bc + z;
  const costPerBlack = wc + z > bc ? bc : wc + z;
  const totalWhiteCost = product(costPerWhite, w);
  const totalBlackCost = product(costPerBlack, b);
  return sum(totalWhiteCost, totalBlackCost);
}