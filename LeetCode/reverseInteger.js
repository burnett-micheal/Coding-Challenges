// Link: https://leetcode.com/problems/reverse-integer/

var reverse = function(x) {
    // In this leetcode problem we take a 32 bit signed integer and return it reversed
    // However, if the reversed int value is outside the signed 32 bit int range we return 0
    // In this problem we must assume that we cannot store values outside of the signed 32 bit range

    // Determine if x is negative, if so, make it positive and set isNeg to true.
    // This removes the "-" character, which helps later.
    let isNeg = false;
    if(x < 0) {
        isNeg = true;
        x *= -1;
    }

    // reverse x and store it as a string.
    const rxStr = `${x}`.split('').reverse().join('');

    // If rxStr length is less than 10, than it falls into the signed 32 bit int range. 
    // Return result, accounting for negative or not.
    if(rxStr.length < 10) return parseInt(`${isNeg ? '-' : ''}${rxStr}`);

    // Here we store each digit for min and max values.
    // We then check against these digits,
    
    // If rxStr digit is greater than the min / max digit then it falls outside the signed 32 bit int range, return 0.
    
    // If rxStr digit is less than the min / max digit then the number will fall inside the signed 32 bit int range,
    // break and return the rxStr as an int
    const min = [2,1,4,7,4,8,3,6,4,8];
    const max = [2,1,4,7,4,8,3,6,4,7];

    if(isNeg) {
        for(let i = 0; i < 10; i++) { 
            const cInt = parseInt(rxStr[i]);
            if(cInt > min[i]) return 0; 
            if(cInt < min[i]) break;
        }
    } else {
        for(let i = 0; i < 10; i++) { 
            const cInt = parseInt(rxStr[i]);
            if(cInt > max[i]) return 0; 
            if(cInt < max[i]) break;
        }
    }

    return parseInt(`${isNeg ? '-' : ''}${rxStr}`);
};
