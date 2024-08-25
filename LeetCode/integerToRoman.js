// Link: https://leetcode.com/problems/integer-to-roman/

var intToRoman = function(num) {
    const romanNumerals = [
        {
            char: "M",
            value: 1000
        },
        {
            char: "D",
            value: 500
        },
        {
            char: "C",
            value: 100
        },
        {
            char: "L",
            value: 50
        },
        {
            char: "X",
            value: 10
        },
        {
            char: "V",
            value: 5
        },
        {
            char: "I",
            value: 1
        },
    ];

    const getHighestRN = (val) => {
        let result = undefined;
        
        for(let i = 0; i < romanNumerals.length; i++) {
            const rn = romanNumerals[i];
            if(rn.value <= val) {
                result = rn;
                break;
            }
        }

        return result;
    }

    const numArr = `${num}`.split('');
    while(numArr.length < 4) numArr.unshift(-1);

    let result = "";

    for(let i = 0; i < numArr[0]; i++) result += "M";

    if(numArr[1]=== '4') result += "CD";
    else if(numArr[1]=== '9') result += "CM";
    else {
        let remVal = numArr[1] * 100;
        while(remVal > 0) {
            const rn = getHighestRN(remVal);
            remVal -= rn.value;
            result += rn.char;
        }
    }

    if(numArr[2]=== '4') result += "XL";
    else if(numArr[2]=== '9') result += "XC";
    else {
        let remVal = numArr[2] * 10;
        while(remVal > 0) {
            const rn = getHighestRN(remVal);
            remVal -= rn.value;
            result += rn.char;
        }
    }

    if(numArr[3]=== '4') result += "IV";
    else if(numArr[3]=== '9') result += "IX";
    else {
        let remVal = numArr[3];
        while(remVal > 0) {
            const rn = getHighestRN(remVal);
            remVal -= rn.value;
            result += rn.char;
        }
    }

    return result;
};
