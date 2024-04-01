// Link: https://www.hackerrank.com/challenges/runningtime/problem

function runningTime(arr) {
    let numOfShifts = 0;
    
    const sortIndex = (indexToSort) => {
        const unsortedVal = arr[indexToSort];
        let sorted = false;

        for(let i = indexToSort - 1; i >= 0; i--) {
            const curVal = arr[i];
            if(curVal > unsortedVal) {
                arr[i + 1] = curVal;
                numOfShifts++;
            } else {
                arr[i + 1] = unsortedVal;
                sorted = true;
                break;
            }
        }

        if(!sorted) arr[0] = unsortedVal;
    }

    for(let i = 1; i < arr.length; i++) {
        sortIndex(i);
    }
    
    return numOfShifts;
}
