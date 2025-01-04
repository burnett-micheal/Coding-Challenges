// Link: https://leetcode.com/problems/unique-length-3-palindromic-subsequences

var countPalindromicSubsequence = function(s) {
    const charIndexes = {};
    const charCounts = {};
    let uniqCharCount = 0;
    let result = 0;

    for(let i = 0; i < s.length; i++) {
        const char = s[i];
        
        if(char in charCounts) {
            charIndexes[char][1] = i;
            if(charCounts[char] < 4) charCounts[char]++;
            if(charCounts[char] === 3) result++;
        } else {
            charIndexes[char] = [i, i];
            charCounts[char] = 1;
        }
    }
    
    const charPairs = {};
    
    for(let i = 1; i < s.length - 1; i++) {
        const c = s[i];
        
        for(char in charIndexes) {
            if(c === char) continue;
            const leftIndx = charIndexes[char][0];
            const rightIndx = charIndexes[char][1];
            if(rightIndx - leftIndx <= 1) continue;
            
            if(i > leftIndx && i < rightIndx) {
                if(char in charPairs) { 
                    if(!charPairs[char].includes(c)) {
                        charPairs[char].push(c);
                        result++;
                    }
                } else {
                    charPairs[char] = [c]; 
                    result++;
                }
            }
        }
    }

    return result;
};
