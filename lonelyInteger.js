// Link: https://www.hackerrank.com/challenges/lonely-integer/problem

function lonelyinteger(a) {
    const countArray = Array(Math.max(...a) + 1).fill(0);
    for(let i = 0; i < a.length; i++) countArray[a[i]]++;
    return countArray.indexOf(1);
}
