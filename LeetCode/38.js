// link: https://leetcode.com/problems/count-and-say

var countAndSay = function(n) {
    const rle = (ns) => {
        let num = ns[0];
        let count = 1;
        let rleStr = "";
        for(let i = 1; i < ns.length; i++) {
            if(ns[i] === num) {
                count++;
            } else {
                rleStr = rleStr + `${count}${num}`;
                num = ns[i];
                count = 1;
            }
        }
        rleStr = rleStr + `${count}${num}`;
        return rleStr;
    }

    let result = "1";
    for(let i = 1; i < n; i++){
        result = rle(result);
    }

    return result;
};
