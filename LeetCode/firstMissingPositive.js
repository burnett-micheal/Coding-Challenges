// Link: https://leetcode.com/problems/first-missing-positive/

var firstMissingPositive = function(nums) {
    // Simple Solution
    // const numsSet = new Set(nums);
    
    // for(let i = 1; i <= nums.length + 1; i++) {
    //     if (!numsSet.has(i)) {
    //         return i;
    //     }
    // }


    // Best Solution
    // nums = [3,4,-1,1]

    for(let i = 0; i < nums.length; i++) { // If the number isnt positive set it to the maximum possible value plus 1
        if(nums[i] <= 0) { 
            nums[i] = nums.length + 1; 
        }
    }

    // nums = [3,4,5,1]

    for(let i = 0; i < nums.length; i++) { 
        // If the absolute value of the number minus 1 is an index within the nums array, than make that indexes value negative
        // Essentially, were marking each individual index as occupied, or unoccupied. Index 0 should be 1. Index 1, should be 2 etc.
        // If we find 1, we mark index 0 as occupied by making it negative. If we find 2, we mark index 1 as occupied by making it negative.
        // This leaves us with positive numbers on all indexes that are unoccupied. Letting us find the answer using the index of the first positive number.
        let index = Math.abs(nums[i]);
        if(index <= nums.length) {
            nums[index - 1] = -1 * Math.abs(nums[index - 1]);
        }
    }

    // nums = [3,4,-5,1]
    // nums = [3,4,-5,-1]
    // nums = [-3,4,-5,-1]
    // nums = [-3,4,-5,-1]

    for(let i = 0; i < nums.length; i++) { // find the first index that is not negative and return that index + 1
        if(nums[i] > 0) {
            return i + 1;
        }
    }

    // result is 2

    return nums.length + 1; // This will return only if all the values are negative, thus returning 1, or if all the values are present, thus returning n + 1
};
