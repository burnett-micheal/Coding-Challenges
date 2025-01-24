// Link: https://leetcode.com/problems/search-insert-position/

var searchInsert = function(nums, target) {
    const io = nums.indexOf(target);
    if(io > -1) return io;

    const lNum = nums[0];
    const rNum = nums[nums.length - 1];

    if(nums.length === 0) return 0;
    if(target < lNum) return 0;
    if(target > rNum) return nums.length;

    if(target - lNum < rNum - target) {
        for(let i = 0; i < nums.length; i++) { 
            if(nums[i] > target) return i; 
        }
    } else {
        for(let i = nums.length - 1; i >= 0; i--) {
            if(nums[i] < target) return i + 1;
        }
    }
};
