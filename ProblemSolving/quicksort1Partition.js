// Link: https://www.hackerrank.com/challenges/quicksort1/problem

function quickSort(arr) {
    /*
        p = arr[0]
        left[i] < p
        equal[i] = p
        right[i] > p
        return [...left, ...equal, ...right];
    */
    
    const p = arr[0];
    const left = [];
    const equal = [p];
    const right = [];
    for(let i = 1; i < arr.length; i++) {
        const curVal = arr[i];
        if(curVal < p) left.push(curVal);
        else if(curVal === p) equal.push(curVal);
        else if(curVal > p) right.push(curVal); 
    }
    return [...left, ...equal, ...right];
}
