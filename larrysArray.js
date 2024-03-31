// Link: https://www.hackerrank.com/challenges/larrys-array/problem

function larrysArray(A) {
    /*
        [0,1,2]
        Can be rotated in 2 ways:
        [0,1,2] - +2, -1, -1 - [1,2,0]
        [0,1,2] - +1, +1, -2 - [2,0,1]
        
        While being able to rotate any 3 consecutive indices any number of times,
        determine if the array can be sorted in consecutive order.
        
        [1, 6, 5, 2, 4, 3]
                <- Move the lowest number to the left that is unsorted, its 2
        [1, 5, 2, 6, 4, 3]
              <-
        [1, 2, 6, 5, 4, 3]
                    <-  <- Again move the lowest number to the left thats unsorted, this time its 3
        [1, 2, 6, 3, 5, 4]
                 <- Here were moving [6,3,5] to [3,5,6], this is to not mess up 2, which is sorted
        [1, 2, 3, 5, 6, 4]
                    <- <-
        [1, 2, 3, 4, 5, 6]
        
        [3,5,4] No
        [3,4,5] Solved
        [5,4,3] No
        [5,3,4] Yes 3,4
        [4,5,3] Yes 4,5
        [4,3,5] No
        
        So in order to be solvable, at the last operation, the last 3 indexes must have 2 consecutive
        indexes in order, or already be in order. Before that, its just a matter of moving the lowest
        unsorted integer to the left until its sorted.
    */
    
    const arr = [... A];
    
    const moveLeft = (targetIndex, startIndex, highestSortedIndex) => {
        // I feel like theres a way to make this even faster by using splice and delete to 
        // handle rotations that are divisible by 2 all in one operation.
        // ex. 124567893 needs rotated 6 times
        // Delete last index 12456789
        // Splice at target index 123456789
        // This would only work for even rotations, if its odd it must be handles differently.
        // However, after doing multiple test cases, it seems unnecessary.
        const rot2 = (s,e) => {
            const a3 = [arr[s], arr[s+1], arr[e]]; // 564 becomes 456
            arr[s] = a3[2];
            arr[s+1] = a3[0];
            arr[e] = a3[1];
        }
        
        const rot1 = (s,e) => {
            const a3 = [arr[s], arr[s+1], arr[e]]; // 652 becomes 526
            arr[s] = a3[1];
            arr[s+1] = a3[2];
            arr[e] = a3[0];
        }
        
        let currentIndex = startIndex;
        let numOfRots = startIndex - targetIndex;
        let numOfSafeRots = numOfRots - 1;
        
        while(numOfSafeRots > 0) {
            const s = currentIndex - 2;
            const e = currentIndex;
            if(numOfSafeRots >= 2) {
                rot2(s,e);
                numOfSafeRots -= 2;
                currentIndex -= 2;
            } else {
                rot1(s,e);
                numOfSafeRots -=1;
                currentIndex -= 1;
            }
        }
        
        if(currentIndex - 2 <= highestSortedIndex) {
            rot1(currentIndex - 1, currentIndex + 1);
        } else {
            rot1(currentIndex - 2, currentIndex);
        }
    }
    
    for(let i = 0; i < arr.length - 3; i++) {
        if(arr[i] === i + 1) continue;
        moveLeft(i, arr.indexOf(i + 1, i + 1), i - 1);
    }
    
    const last3 = [arr[arr.length - 3], arr[arr.length - 2], arr[arr.length - 1]];
    
    return last3[0] + 1 === last3[1] || last3[1] + 1 === last3[2] ? "YES" : "NO";
}
