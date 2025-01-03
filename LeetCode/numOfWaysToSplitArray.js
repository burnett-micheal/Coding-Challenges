// Link: https://leetcode.com/problems/number-of-ways-to-split-array

var waysToSplitArray = function(nums) {
    const sums = [];
    let curSum = 0;
    for(let i = 0; i < nums.length; i++) {
        curSum += nums[i];
        sums.push(curSum);
    }

    const rSum = sums[sums.length - 1];
    let result = 0;
    for(let i = 0; i < sums.length - 1; i++) {
        if(rSum - sums[i] <= sums[i]) {
            result++;
        }
    }

    return result;
};
