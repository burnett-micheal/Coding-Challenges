// Link: https://leetcode.com/problems/longest-valid-parentheses

var longestValidParentheses = function(s) {
    if(s.length < 2) return 0;
    let st = 0;
    let et = s.length;
    for(st; st < s.length; st++) { if(s[st] === "(") break; }
    for(et; et > -1; et--) { if(s[et - 1] === ")") break; }
    s = s.substring(st, et);
    if(s.length < 2) return 0;

    let left = 0;
    let right = 0;
    
    let rmax = 0;
    for(let i = 0; i < s.length; i++) {
        if(s[i] === "(") left++; else right++;
        if(right === left && right+left > rmax) rmax = right+left; 
        if(right > left) {
            left = 0;
            right = 0;
        }
    }

    left = 0;
    right = 0;

    let lmax = 0;
    for(let i = s.length - 1; i > -1; i--) {
        if(s[i] === "(") left++; else right++;
        if(right === left && right+left > lmax) lmax = right+left;
        if(left > right) {
            left = 0;
            right = 0;
        }
    }

    return lmax < rmax ? rmax : lmax;
};
