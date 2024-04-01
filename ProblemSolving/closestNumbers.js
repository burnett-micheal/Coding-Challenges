// Link: https://www.hackerrank.com/challenges/closest-numbers/problem

function closestNumbers(arr) {
    /*
        Given an array of unsorted integers, find the pair of elements that have the smallest 
        absolute difference between them. If there are multiple pairs, find them all.
        
        Starting Array: [5, 2, 3, 4, 1]
        
        Start by sorting the array: [1, 2, 3, 4, 5]
        Now iterate over the array, getting each pairs absolute difference.
        |1 - 2|, |2 - 3|, |3 - 4|, |4 - 5|
        If the absolute difference is the lowest so far, store its diff, add it to a cleared result arr.
        If the absolute difference is equally low to the lowest, add it to the result arr.
        If the absolute difference is greater than the lowest, just continue to the next iteration.
    */
    arr.sort(function(a, b){return a - b});
    let lowestAbsDiff = Math.abs(arr[0] - arr[1]);
    let lowestAbsDiffPairs = [arr[0], arr[1]];
    for(let i = 2; i < arr.length; i++) {
        const curAbsDiff = Math.abs(arr[i - 1] - arr[i]);
        if(curAbsDiff < lowestAbsDiff) {
            lowestAbsDiff = curAbsDiff;
            lowestAbsDiffPairs = [];
            lowestAbsDiffPairs = [arr[i - 1], arr[i]];
        } else
        if(curAbsDiff === lowestAbsDiff) {
            lowestAbsDiffPairs.push(arr[i - 1], arr[i]);
        }
    }
    
    return lowestAbsDiffPairs;
}
