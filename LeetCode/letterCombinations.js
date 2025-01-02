// Link: https://leetcode.com/problems/letter-combinations-of-a-phone-number/

var letterCombinations = function(digits) {
    if(digits.length === 0) return [];

    const numToStr = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    };

    const result = [];
    
    const lc = [];
    for(let i = 0; i < digits.length; i++){
        lc.push(numToStr[digits[i]]);
    }

    const li = [];
    const mli = [];
    
    for(let i = 0; i < lc.length; i++) {
        li.push(0);
        mli.push(lc[i].length - 1);
    }

    while(true) {
        let str = "";
        for(let i = 0; i < li.length; i++) str += lc[i][li[i]];
        result.push(str);

        let mdc = li.length - 1;
        while(li[mdc] === mli[mdc] && mdc >= 0) {
            li[mdc] = 0;
            mdc -= 1;
        }
        if(mdc < 0) return result;
        li[mdc] += 1;
    }
};
