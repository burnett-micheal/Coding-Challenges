//Link: https://leetcode.com/problems/remove-duplicates-from-sorted-array

var removeDuplicates = function(nums) {
    const uniqueArr = [];
    
    const i2r = [];
    for(let i = 0; i < nums.length; i++) {
        if(uniqueArr.includes(nums[i])) {
            i2r.push(i);
        } else {
            uniqueArr.push(nums[i]);
        }
    }
    i2r.reverse();
    
    for(let i = 0; i < i2r.length; i++) {
        const ri = i2r[i];
        nums.splice(ri, 1);
        nums.push("_");
    }

    return uniqueArr.length;
};
