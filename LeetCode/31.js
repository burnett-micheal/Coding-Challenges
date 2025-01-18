// Link: https://leetcode.com/problems/next-permutation/

var nextPermutation = function(nums) {
    // Find lowest possible number in front of number that needs changed, then swap those 2 numbers. 
    // The lowest possible number must be greater than the number that needs changed.
    // All the numbers after the left most changed number must be sorted in ascending order.
    // Unless its already as high as possible, then sort from lowest to highest.

    // A number needs changed if all the numbers after it are highest to lowest.

    // 321322
    // 322123

    for(let i = nums.length - 2; i > -1; i--) {
        const lNum = nums[i];
        const rNum = nums[i+1]

        if (lNum < rNum){
            // nums[i] needs changed.
            
            // determine the lowest number after nums[i]
            const cNum = nums[i];
            const cni = i;
            let lowNum = Infinity;
            let lni = undefined;
            for(let j = i+1; j < nums.length; j++) { if(nums[j] > nums[i] && nums[j] < lowNum) { lowNum = nums[j]; lni = j; } }

            // Swap the lowest number with number that needs changed.
            nums[cni] = lowNum;
            nums[lni] = cNum;

            // sort numbers to the right of nums[i]
            const rNums = nums.slice(i+1);
            rNums.sort((a,b) => a - b);
            nums.splice(i+1, rNums.length, ...rNums);
            return;
        }
    }

    nums = nums.sort((a,b) => a - b); 
};
