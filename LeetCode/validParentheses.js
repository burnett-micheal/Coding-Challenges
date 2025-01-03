// Link: https://leetcode.com/problems/valid-parentheses/

var isValid = function(s) {
    const opening = ["(", "{", "["];

    const o = {
        "(": ")",
        "{": "}",
        "[": "]"
    };

    const a = [];

    for(let i = 0; i < s.length; i++) {
        const c = s[i];
        
        if(opening.includes(c)) { a.unshift(o[c]); } else
        if(a[0] === c) { a.shift() } else
        return false; 
    }

    if(a.length > 0) return false;

    return true;
};
