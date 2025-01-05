// Link: https://leetcode.com/problems/shifting-letters-ii

var shiftingLetters = function(s, shifts) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const sShifts = new Array(s.length).fill(0);
    
    for(let i = 0; i < shifts.length; i++) {
        const shiftStartIndex = shifts[i][0];
        const shiftEndIndex = shifts[i][1];
        const direction = shifts[i][2] === 1 ? 1 : -1;

        sShifts[shiftStartIndex] += direction;
        if(shiftEndIndex + 1 < sShifts.length) sShifts[shiftEndIndex + 1] -= direction;
    }

    let result = "";
    let shift = 0;
    for(let i = 0; i < s.length; i++) {
        shift += sShifts[i];
        if(shift === 0 || shift % alphabet.length === 0) {
            result += s[i];
            continue;
        }

        if(shift > 0) {
            const maxShift = (alphabet.length - 1) - alphabet.indexOf(s[i]);
            if(shift > maxShift) {
                const disFromStart = (shift - maxShift) % alphabet.length;
                if(disFromStart === 0) result += alphabet[alphabet.length - 1]; else result += alphabet[disFromStart - 1];
            } else {
                result += alphabet[alphabet.indexOf(s[i]) + shift];
            }
        } else {
            const maxShift = alphabet.indexOf(s[i]);
            if(Math.abs(shift) > maxShift) {
                const disFromEnd = (Math.abs(shift) - maxShift) % alphabet.length;
                if(disFromEnd === 0) result += alphabet[0]; else result += alphabet[alphabet.length - disFromEnd];
            } else {
                result += alphabet[alphabet.indexOf(s[i]) + shift];
            }
        }
    }

    return result;
};
