// Link: https://leetcode.com/problems/two-sum/

var twoSum = function(nums, target) {
    if(nums.length === 2) return [0, 1];
    
    // The lowest useful number is equal to target - max
    // Any number below this cannot be added to any value 
    // in the array to reach target, so we filter them out
    // we also sort the array in ascending order
    let max = Math.max(...nums);
    const ints = nums.filter((num) => num >= target - max);
    ints.sort((a,b) => a - b);

    // Now that the array is sorted, we begin testing the sums
    // Of the min values to the max values,
    // If the value is too high, we remove the max value
    // If the value is too low, we remove the min value
    // We do this until min + max = target
    let min = ints.shift();
    max = ints.pop();
    while( min + max !== target) {
        while( min + max > target) { max = ints.pop(); }
        while( min + max < target) { min = ints.shift(); }
    }

    // Now that we have the valid min and max values
    // We get the index that those values are at in
    // The nums array, if the min and max are the same
    // Then we make sure to search indexes after the minIndex
    // To find the maxIndex
    if(min === max) {
        const minIndex = nums.indexOf(min);
        return [minIndex, nums.indexOf(max, minIndex + 1)];
    }
    return [nums.indexOf(min), nums.indexOf(max)];
};
