// Link: https://leetcode.com/problems/longest-strictly-increasing-or-strictly-decreasing-subarray

var longestMonotonicSubarray = function(nums) {
    if(nums.length <= 1) return nums.length;
    if(nums.length === 2)
        return nums[0] === nums[1] ? 1 : 2;
    
    let pNum = nums[0];
    let dir = 0;
    let curLen = 1;
    let maxLen = 1;

    for(let i = 1; i < nums.length; i++) {
        const cNum = nums[i];
        
        if(pNum === cNum) {
            if(curLen > maxLen) maxLen = curLen;
            curLen = 1;
            dir = 0;
        } else

        if(pNum < cNum) {
            if(dir !== 1) {
                if(curLen > maxLen) maxLen = curLen;
                curLen = 2;
                dir = 1;
            } else {
                curLen++;
            }
        } else

        if(pNum > cNum) {
            if(dir !== -1) {
                if(curLen > maxLen) maxLen = curLen;
                curLen = 2;
                dir = -1;
            } else {
                curLen++;
            }
        }

        pNum = cNum;
    }

    if(curLen > maxLen) maxLen = curLen;

    return maxLen;
};
