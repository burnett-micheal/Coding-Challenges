// Link: https://leetcode.com/problems/3sum-closest

var threeSumClosest = function(nums, target) {
    const Sum = (a,b,c) => a+b+c;
    if(nums.length === 3) return Sum(...nums);

    nums.sort((a,b) => a - b);

    let cSum = -Infinity;
    for(let i = 0; i < nums.length - 2; i++) {
        let li = i + 1;
        let ri = nums.length - 1;
        while(ri > li) {
            const sum = nums[i]+nums[li]+nums[ri];
            if(sum === target) return sum;
            if(sum < target) li++;
            if(sum > target) ri--;
            if(Math.abs(target - sum) < Math.abs(target - cSum)) cSum = sum;
        }
    }

    return cSum;
};
