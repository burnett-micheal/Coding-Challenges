// Link: https://leetcode.com/problems/3sum/

var threeSum = function(nums) {
    const results = [];

    nums.sort((a,b) => a - b);

    for(let i = 0; i < nums.length - 2; i++) {
        if(nums[i] > 0) break;

        if(i > 0 && nums[i] === nums[i - 1]) continue;

        let j = i + 1;

        let k = nums.length - 1;

        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];

            if(sum === 0) {
                results.push([nums[i], nums[j], nums[k]])
            
                // This part of the problem stumped me, each 3Sum solution needs to be a unique set of numbers.
                // So a nums array like -1, 0, 0, 1, 1 would typically result in 2 solutions that are unique indexes, but not unique numbers.
                // Indexes: [0, 1, 3], [0, 2, 4] Numbers: [-1, 0, 1], [-1, 0, 1]
                // In order to resolve this we increment the right and left side ( j being left, k being right) while they are equal to there next number. 
                // This ensures that each number after our base number ( nums[i] ) is unique and only used for 1 solution.
                while(nums[j] === nums[j + 1]) j++
                while(nums[k] === nums[k - 1]) k--
                j++
                k--

            } else

            if(sum < 0) {
                j++
            } else

            if(sum > 0) {
                k--
            }
        }
    }

    return results;
};
