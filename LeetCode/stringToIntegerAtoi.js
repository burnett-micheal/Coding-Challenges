// Link: https://leetcode.com/problems/string-to-integer-atoi/

var myAtoi = function(s) {
    /*
        In this problem we take a string and convert it to a 32 bit signed integer.
        The string may contain (0-9), (a-z), (A-Z), " ", "+", "-", "."
        For example: 1337c0d3 would convert to 1337.

        In order to convert the string we do the following:
        1. Remove whitespace ( Any spaces at the start of the string )
        2. Check for signs "+" or "-"
        3. Check for numbers
        4. Repeat step 3 until a non-number is found
        5. Create a substring of the number indexes, and convert to an intager accounting for the sign.
        6. Check if the integer is above or below the max / min value for 32 bit signed integer and return accordingly.
    */

    const min = -2_147_483_648;
    const max = 2_147_483_647;
    
    const signs = "-+";
    const nums = "0123456789";

    let str = s;

    // Remove whitespace
    if(str[0] === " ") str = str.trim();

    // Check if the first character is invalid
    if(!`${nums + signs}`.includes(str[0])) return 0;
    
    // Handle sign if it exists
    let isNeg = str[0] === "-";
    if(signs.includes(str[0])) str = str.substring(1);

    // Get the maximum numbered index, Ex: 1337c0d3 would be 4
    let i = 0;
    for(; i < str.length; i++) {
        const c = str[i];
        if(nums.includes(c)) continue; else break;
    }

    // If no numbers return 0.
    if(i === 0) return 0;
    
    // Convert the numbered indexes into an integer accounting for the sign
    let result = parseInt(str.substring(0, i)) * (isNeg ? -1 : 1);

    // Check against max and min values, returning accordingly.
    if(result > max) result = max; else
    if(result < min) result = min;

    return result;
};
