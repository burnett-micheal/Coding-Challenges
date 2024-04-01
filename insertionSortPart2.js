// Link: https://www.hackerrank.com/challenges/insertionsort2/problem

function insertionSort2(n, arr) {
    const sortIndex = (indexToSort) => {
        const unsortedVal = arr[indexToSort];
        let sorted = false;

        for(let i = indexToSort - 1; i >= 0; i--) {
            const curVal = arr[i];
            arr[i + 1] = curVal > unsortedVal ? curVal : unsortedVal;
            if(curVal <= unsortedVal) { sorted = true; break; }
        }

        if(!sorted) arr[0] = unsortedVal;
    }
    
    for(let i = 1; i < n; i++) {
        sortIndex(i);
        console.log(arr.join(" "));
    }
}
