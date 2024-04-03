// Link: https://www.hackerrank.com/challenges/big-sorting/problem

function bigSorting(unsortedArray) {
    /*
        So in this challenge we get an array of positive numerical strings and need to sort them in
        consecutive order. I tried a few different sorting methods, but the only implementation
        that worked fast enough is the one below.
        
        So how do we determine if one string is larger than another?
        Well thats the job of the function isNumericStringGreaterThan.
        
        Ex: numStr1: "12345" numStr2: "12346"
        The string with the higher length will be larger. Both are the same length (5) so move on.
        Now we iterate thru each starting from index 0 to see if there values differ.
        If numStr1[i] !== numStr2[i] then the larger value is the one one with the higher value index.
        
                ns1   ns2     
        Index 0: 1  =  1
        Index 1: 2  =  2
        Index 2: 3  =  3
        Index 3: 4  =  4
        Index 4: 5 !== 6 So numStr2 is larger
        
        Using the above logic, I created a compare function to be used in .sort,
        and returned the sorted array.
    */
    
    const isNumericStringGreaterThan = (numStr1, numStr2) => {
        if(numStr1.length !== numStr2.length) return numStr1.length > numStr2.length ? 1 : -1;
        
        let result = 0;
        // While I could parseInt, I think using this object is faster.
        const numObj = {"0": 0, "1": 1, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9};
        for(let i = 0; i < numStr1.length; i++) {
            const num1 = numObj[numStr1[i]];
            const num2 = numObj[numStr2[i]];
            if(num1 !== num2) {
                result = num1 > num2 ? 1 : -1;
                break;
            }
        }
        
        return result;
    }
    
    unsortedArray.sort(isNumericStringGreaterThan);
    return unsortedArray;
}
