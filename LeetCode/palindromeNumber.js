// Link: https://leetcode.com/problems/palindrome-number/

var isPalindrome = function(x) {
    /*
        In this problem we want to determine if the integer x is a palindrome,
        as an extra challenge I avoided turning the integer into a string.

        In order to determine if x is a palindrome, I need to compare the
        left and right side digits and see if they are equal. 

        For example 12321 is a palindrome, 12323 is not.
    */

    // If x is negative, it cannot be a palindrome.
    if(x < 0) return false;

    let num = x;

    // determine how many digits are in num, and adjust the factor accordingly.
    let factor = 1;
    while(num / factor >= 10) factor *= 10;

    while(num) {
        // Compare the first and last digit, return false if they dont match.
        if(Math.floor(num / factor) !== num % 10) return false;

        // Remove the first and last digit.
        num = Math.floor((num % factor) / 10);

        // Adjust the factor for the 2 removed digits.
        factor = factor / 100;
    }

    return true;
};
