// Link: https://leetcode.com/problems/roman-to-integer/

var romanToInt = function(s) {
    const RNObj = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    let num = 0;

    let prevValue = RNObj[s[0]];
    for(let i = 1; i < s.length; i++) {
        prevValue = RNObj[s[i - 1]];
        let curValue = RNObj[s[i]];

        while(curValue > prevValue) {
            prevValue = RNObj[s[i - 1]];
            curValue = RNObj[s[i]];
            if(curValue > prevValue) {
                num += curValue - prevValue;
                s = s.slice(0, i - 1) + s.slice(i + 1, s.length);
            }
        }
    }

    for(let i = 0; i < s.length; i++) {
        num += RNObj[s[i]];
    }

    return num;
};
