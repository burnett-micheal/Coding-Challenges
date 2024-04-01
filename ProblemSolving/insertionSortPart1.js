// Link: https://www.hackerrank.com/challenges/insertionsort1/problem

function insertionSort1(n, arr) {
    const unsortedVal = arr[n - 1];
    let sorted = false;
    
    for(let i = n - 2; i >= 0; i--) {
        const curVal = arr[i];
        arr[i + 1] = curVal > unsortedVal ? curVal : unsortedVal;
        console.log(arr.join(" "));
        if(curVal <= unsortedVal) { sorted = true; break; }
    }
    
    if(!sorted) {
        arr[0] = unsortedVal;
        console.log(arr.join(" "));
    }
}
