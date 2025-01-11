// Link: https://leetcode.com/problems/construct-k-palindrome-strings

var canConstruct = function(s, k) {
    if(s.length === k) return true;
    if(s.length < k) return false;

    let pairs = 0;
    let singles = 0;
    let alphaCount = {
        "a": 0,
        "b": 0,
        "c": 0,
        "d": 0,
        "e": 0,
        "f": 0,
        "g": 0,
        "h": 0,
        "i": 0,
        "j": 0,
        "k": 0,
        "l": 0,
        "m": 0,
        "n": 0,
        "o": 0,
        "p": 0,
        "q": 0,
        "r": 0,
        "s": 0,
        "t": 0,
        "u": 0,
        "v": 0,
        "w": 0,
        "x": 0,
        "y": 0,
        "z": 0
    };
    
    for(let i = 0; i < s.length; i++) alphaCount[s[i]]++;
    
    for(c in alphaCount) {
        const ct = alphaCount[c];
        if(ct === 0) continue;
        pairs += Math.floor(ct / 2);
        singles += ct % 2;
    }

    if(singles > k) return false;

    const maxPal = s.length;
    const minPal = singles;

    return k <= maxPal && k >= minPal;
};
