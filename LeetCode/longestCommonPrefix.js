// Link: https://leetcode.com/problems/longest-common-prefix/

var longestCommonPrefix = function(strs) {
    let prefix = "";

    for(let i = 0; i < Infinity; i++) {
        const char = strs[0][i];
        if(!char) break;
        let charMatch = true;
        for(let j = 1; j < strs.length; j++){
            charMatch = strs[j][i] === char;
            if(!charMatch) break;
        }
        if(charMatch) prefix += char; else break;
    }

    return prefix;
};
