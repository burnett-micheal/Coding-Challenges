// Link: https://www.hackerrank.com/challenges/countingsort1/problem

function countingSort(arr) {
    const cntArr = Array(100).fill(0);
    
    for(let i = 0; i < arr.length; i++) { cntArr[arr[i]]++; }
    
    return cntArr;
}
