// Link: https://leetcode.com/problems/median-of-two-sorted-arrays/

var findMedianSortedArrays = function(nums1, nums2) {
    // So in this question we want to find the median of 2 sorted arrays
    // Ex arr1 = [1,2] arr2 = [3,4] the median would be 2.5
    // In order to achieve this I looped and removed the lowest and highest value,
    // I did this until there were less than 3 values, then I got the median
    // If there was 2, I added the min and max value then divided by 2
    // If there was 1, then that value was the median
    
    // I feel like theres a way to eliminate many, many more min and max values without looping and removing
    // Only 1 at a time, but without merging the arrays togethor and sorting them again I'm not sure.
    // I can calculate how many need removed, the problem is I have to determine what array they need removed from.
    // Regardless, this solution did pass the leetcode tests.

    const n1 = [... nums1];
    const n2 = [... nums2];

    const min = () => {
        const n1Len = n1.length;
        const n2Len = n2.length;
        if(n1Len > 0 && n2Len > 0) {
            const n1Min = n1[0];
            const n2Min = n2[0];
            return n1Min < n2Min ? n1.shift() : n2.shift();
        } else
        if(n1Len > 0) {
            return n1.shift();
        } else
        if(n2Len > 0) {
            return n2.shift();
        }
    }

    const max = () => {
        const n1Len = n1.length;
        const n2Len = n2.length;
        if(n1Len > 0 && n2Len > 0) {
            const n1Max = n1[n1.length - 1];
            const n2Max = n2[n2.length - 1];
            return n1Max > n2Max ? n1.pop() : n2.pop();
        } else
        if(n1Len > 0) {
            return n1.pop();
        } else
        if(n2Len > 0) {
            return n2.pop();
        }
    }

    while(n1.length + n2.length >= 3) { min(); max(); }
    if(n1.length + n2.length === 1) { return n1[0] === undefined ? n2[0] : n1[0]; }
    if(n1.length + n2.length === 2) { return (min() + max()) / 2 }
};
