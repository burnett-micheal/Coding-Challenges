// Link: https://www.hackerrank.com/challenges/bigger-is-greater/problem

function biggerIsGreater(w) {
    const letterArray = "_abcdefghijklmnopqrstuvwxyz".split("");
    const letterValue = {};
    for(let i = 0; i < letterArray.length; i++) { letterValue[letterArray[i]] = i; }
    
    const valArr = [];
    for(let i = 0; i < w.length; i++) {
        valArr.push(letterValue[w[i]]);
    }
    
    // So heres a quick explanation of this coding challenge:
    // We recieve a a-z string, where each letter represents a value. (a = 1, b = 2, c = 3, etc)
    // We want to get the next largest value we can using the only the characters in the string.
    // Heres my solution explained: 
    // dkhc = 4 - 11 - 8 - 3
    // 4 gets swapped with 8, since its the smallest value to the left of 4 that is also greater than 4
    // 8 - 11 - 4 - 3
    // Now everything after 8 gets sorted in ascending order, to minimize the value
    // 8 - 3 - 4 - 11 = hcdk
    
    const prevValues = [valArr[valArr.length - 1]];
    let sortIndex = undefined;
    for(let i = valArr.length - 2; i >= 0; i--) {
        const curValue = valArr[i];
        const curIndex = i;
        let swapValue = undefined; 
        let swapIndex = undefined;
        
        for(let j = 0; j < prevValues.length; j++) {
            const prevValue = prevValues[j];
            if(prevValue > curValue) {
                swapValue = prevValue;
                swapIndex = valArr.length - 1 - j;
                break;
            }
        }
        
        if(swapValue !== undefined) {
            // curValue goes to swapIndex
            // swapValue goes to curIndex
            valArr[swapIndex] = curValue;
            valArr[curIndex] = swapValue;
            sortIndex = curIndex + 1;
            break;
        }
        
        prevValues.push(curValue);
    }
    
    if(sortIndex === undefined) return "no answer";
    
    const resultArray = valArr.slice(0, sortIndex).concat(valArr.slice(sortIndex).sort(function(a, b){return a - b}));
    
    let resultString = "";
    for(let i = 0; i < resultArray.length; i++) {
        resultString += letterArray[resultArray[i]];
    }
    
    return resultString;
}
