// Link: https://leetcode.com/problems/word-subsets

var wordSubsets = function(words1, words2) {

    const reqCharsCount = {};  
    for(let i = 0; i < words2.length; i++){
        const chars = words2[i].split("");
        const tempObj = {};
        for(let j = 0; j < chars.length; j++) {
            const c = chars[j];
            if(c in tempObj) tempObj[c]++; else tempObj[c] = 1;
        }

        for(char in tempObj) {
            if(char in reqCharsCount) {
                if(reqCharsCount[char] < tempObj[char]) reqCharsCount[char] = tempObj[char];
            } else {
                reqCharsCount[char] = tempObj[char];
            }
        }
    }

    const result = [];
    for(let i = 0; i < words1.length; i++) {
        const rcc = {... reqCharsCount};
        const w = words1[i];

        for(let j = 0; j < w.length; j++) {
            const c = w[j];
            if(c in rcc)
                if(rcc[c] - 1 === 0) delete rcc[c]; else rcc[c] -= 1;
            
            if(Object.keys(rcc).length === 0) {
                result.push(w);
                break;
            }
        }
    }

    return result;
};
