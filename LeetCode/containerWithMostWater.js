// Link: https://leetcode.com/problems/container-with-most-water/

var maxArea = function(height) {
    /*
        In this problem we have an array of int heights where each index is spaced 1 unit apart.
        We need to determine maximum area of water that can be stored given these heights.
        
        For example: 
        heights = [1,8,6,2,5,4,8,3,7]
        The best area would use index 1: 8, and index 8: 7
        Since water can only fill to the lower of the 2, the height would be 7.
        The width is the distance between the indexes so 8 - 1 or 7.
        The best area is therefore height * width or 7 * 7 = 49.

        In order to determine the max area, I iterated water heights starting from 1.
        I then checked if there was a left and right height that were equal to or above the water height.
        
        If there was, then we calculate the maximum area at that water height, 
        if it is greater than the previous we set it as the new max area.

        If there was not a left and right index that is at or above the water height tho, we break and return max area.
    */

    // Iterate over water heights
    let ma = 0;
    for(let wh = 1; wh <= Math.pow(10, 4); wh++){
        // Get the left most index that is at or above water height. (wh)
        let leftIndex = undefined;
        for(let li = 0; li < height.length; li++){
            if(height[li] >= wh) {
                leftIndex = li;
                break;
            }
        }

        // Get the right most index that is at or above water height. (wh)
        let rightIndex = undefined;
        for(let ri = 0; ri < height.length; ri++){
            const index = height.length - (1 + ri);
            if(height[index] >= wh) {
                rightIndex = index;
                break;
            }
        }

        // If no left or right index was found, break out and return the max area. (ma)
        if(leftIndex === undefined || rightIndex === undefined) break;

        // Calculate the new area, and set max area if the new area is greater.
        const area = (rightIndex - leftIndex) * wh;
        if(area > ma) ma = area;
    }

    return ma;
};
