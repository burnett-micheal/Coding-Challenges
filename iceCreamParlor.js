// Link: https://www.hackerrank.com/challenges/icecream-parlor/problem

function icecreamParlor(m, arr) {
    // If the answer is 2 prices of the same value, this handles it.
    if(m % 2 === 0 && arr.includes(m / 2)) {
        const indexes = [];
        const halfMoney = m / 2;
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] === halfMoney) indexes.push(i + 1);
            if(indexes.length === 2) break;
        }
        if(indexes.length === 2) return indexes;
    }
    
    // Otherwise the 2 prices will always be different, thus we remove duplicate values.
    const arrCopy = [... arr]; // This is to be able to find the indexes later.
    arr = [... new Set(arr)]; // Remove duplicate values.
    let minValue = Math.min(... arr);
    arr = arr.filter((val) => val <= m - minValue); // Filter out values that are too high.
    arr.sort(function(a, b){return a - b}); // By sorting we can check the min and max values each iteration, by adding the first and last value in the array.
    
    const solutionPrices = [];
    while(solutionPrices.length === 0 && arr.length >= 2) {
        const totalCost = arr[0] + arr[arr.length - 1];
        if(totalCost === m) { solutionPrices.push(arr[0], arr[arr.length - 1]); }
        else if(totalCost < m) { arr.shift(); } // If the total cost is too low we remove the high value
        else if(totalCost > m) { arr.pop(); } // If the total cost is too high we remove the low value
    }

    // Find the indexes of the solution prices, and sort them. Then return the answer.
    const solutionIndexes = [arrCopy.indexOf(solutionPrices[0])+1, arrCopy.indexOf(solutionPrices[1])+1];
    solutionIndexes.sort(function(a, b){return a - b});
    
    return solutionIndexes;
}
