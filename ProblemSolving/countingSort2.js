// Link: https://www.hackerrank.com/challenges/countingsort2/problem

function countingSort(arr) {
    const cntArr = Array(100).fill(0);
    for(let i = 0; i < arr.length; i++) { cntArr[arr[i]]++; }

    const sortedArr = [];
    for(let i = 0; i < cntArr.length; i++) {
        for(let j = 0; j < cntArr[i]; j++) {
            sortedArr.push(i);
        }
    }
    
    return sortedArr;
}
