// Link: https://leetcode.com/problems/generate-parentheses/

var generateParenthesis = function(n) {
    // I tried very hard to make this a problem that could be solved using loops,
    // However after looking up the answer it seems recursion is the way.
    // I rarely use recursion so it took me a bit to wrap my head around the answer.

    // As far as I can tell these are the steps it takes when working with n = 2

    // [lNum, rNum]
    // 2,2 - 1,2 - 0,2 - 0,1 - 0,0
    //        |
    //       1,1 - 0,1 - 0,0

    // CurStr
    // ( - (( - (() - (()) - (() - 
    // (( - ( - () - ()() - ()( -
    // () - (

    const curStr = [];
    const result = [];

    const recurse = (lNum, rNum) => {
        if(lNum === 0 && rNum === 0) result.push(curStr.join(""));

        if(lNum > 0) {
            curStr.push("(");
            recurse(lNum - 1, rNum);
        }

        if(rNum > 0 && lNum < rNum) {
            curStr.push(")");
            recurse(lNum, rNum - 1);
        }

        if(curStr.length > 0) {
            curStr.pop();
        }
    }

    recurse(n,n);

    return result;
};
