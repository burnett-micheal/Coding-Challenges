// Link: https://leetcode.com/problems/remove-element/

var removeElement = function(nums, val) {
    let numRemoved = 0;
    for(let i = 0; i < nums.length; i++) { 
        if(nums[i] === "_") break;
        
        if(nums[i] === val) {
            nums.splice(i, 1);
            nums.push("_");
            numRemoved++;
            i--;
        }
    }

    return nums.length - numRemoved;
};
