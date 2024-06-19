// Link: https://leetcode.com/problems/longest-palindromic-substring/

var longestPalindrome = function(s) {
    // In this leetcode problem we need to find and return the longest substring in s that is a palindrome.
    // Ex: s = "babad" result = "bab" or "aba" 

    if(s.length === 1) return s;

    let maxPal = s[0];

    for(let i = 0; i < s.length; i++) {
        // Loop over every character in s, getting the longest palindrome we can centered on that character
        // We then compare that palindrome with our longest palindrome so far, and set maxPal to the longest
        let pal = s[i];
        
        const remainingChars = s.length - i - 1;
        const maxPossiblePalLength = remainingChars * 2 + 1;
        if(maxPal.length > maxPossiblePalLength) {
            // There are not enough remaining characters in the string to make a longer palindrome.
            // So we break out of the loop, and return the result;
            break;
        }

        let checkOdd = i > 0 && s[i - 1] === s[i + 1];
        let checkEven = s[i] === s[i + 1];

        if(checkOdd || checkEven) {
            // Determine if an odd or even palindrome exists, if either does, 
            // get the longest version of that palindrome by expanding iteratively
            // and checking the left and rightmost chars to see if they match or are undefined.
            let dis = 1;
            
            while(checkOdd || checkEven) {
                if(checkEven) {
                    const cLeft = s[i - (dis - 1)];
                    const cRight = s[i + dis];
                    if(!cLeft || !cRight || cLeft !== cRight) {
                        const pDis = dis - 1;
                        pal = s.substring(i - (pDis - 1), i + pDis + 1);
                        checkEven = false;
                    }
                }

                if(checkOdd) {
                    const cLeft = s[i - dis];
                    const cRight = s[i + dis];
                    if(!cLeft || !cRight || cLeft !== cRight) {
                        const pDis = dis - 1;
                        pal = s.substring(i - pDis, i + pDis + 1);
                        checkOdd = false;
                    }
                }

                dis++;
            }
        }

        // Update maxPal if its shorter than our newest palindrome
        if(pal.length > maxPal.length) { maxPal = pal; }
    }

    // Return the longest palindrome
    return maxPal;
};
