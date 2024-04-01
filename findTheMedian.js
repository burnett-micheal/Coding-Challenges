// Link: https://www.hackerrank.com/challenges/find-the-median/problem

function findMedian(arr) {
    arr.sort(function(a, b){return a - b});
    const l = arr.length;
    if(l % 2 === 0) {
        return (arr[l/2] + arr[l/2 - 1]) / 2;
    } else {
        return arr[Math.ceil(l / 2) - 1];
    }
}
