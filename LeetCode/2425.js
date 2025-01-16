// Link: https://leetcode.com/problems/bitwise-xor-of-all-pairings

var xorAllNums = function(nums1, nums2) {
    const isEven1 = nums1.length % 2 === 0;
    const isEven2 = nums2.length % 2 === 0;

    if(isEven1 && isEven2) return 0;

    let nums = [];
    if(!isEven1 && !isEven2) { nums = [...nums1, ...nums2]; } else
    if(isEven1 && !isEven2) { nums = [...nums1]; } else
    if(!isEven1 && isEven2) { nums = [...nums2]; }

    if(nums.length === 0) return 0;
    if(nums.length === 1) return nums[0];

    let result = nums[0] ^ nums[1];
    for(let i = 2; i < nums.length; i++) { result = result ^ nums[i]; }

    return result;
};
