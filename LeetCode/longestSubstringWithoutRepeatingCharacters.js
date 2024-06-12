// Link: https://leetcode.com/problems/longest-substring-without-repeating-characters/

var lengthOfLongestSubstring = function(s) {
    if(s.length === 0) return 0;
    
    // So in this problem were looking for the length of the longest unique substring in the string: s
    // In order to achieve this, I looped over each character in s, saving the unique character in an arrOfChars
    // If I run into a character that is already in arrOfChars, 
    // I reduce the curLen and splice the arrOfChars to right after that character was found
    // If the curLen is higher than result, we set result to curLen
    // And once we've iterated the whole string, we return the result
    let result = 0;
    let curLen = 0;
    let arrOfChars = [];
    for(let i = 0; i < s.length; i++) {
        const char = s[i];
        
        if(arrOfChars.includes(char)) {
            const charIndex = arrOfChars.indexOf(char);
            curLen = arrOfChars.length - charIndex;
            arrOfChars.splice(0, charIndex + 1);
            arrOfChars.push(char);
        } else {
            curLen++;
            arrOfChars.push(char);
        }

        if(curLen > result) result = curLen;
    }

    return result;
};
