// Link: https://www.hackerrank.com/challenges/3d-surface-area/problem

function surfaceArea(A) {
    /*
        So I'm going to try to explain whats going on here.
        
        In this challenge I need to determine the surface area of a 3d object.
        I'm given a 2d array, which represents the height at any given spot. 
        1 height = 1 x 1 x 1 cube or a cube that is 1 unit high
        2 height = 1 x 1 x 2 cube or a cube that is 2 units high
        The height will always be between 1 - 100 inclusive.
        
        Example:
        1 3 4
        2 2 3
        1 2 4
        
        In order to determine how much of the surface is exposed on any given cell, 
        I need to get the difference between that cell and its neighbors.
        This is necessary for the left, right, front, and back surface area.
        It is not for the top and bottom surface area, since that will always be exposed.
        
        In order to get the left, right, back, and front, these would be the indexes to get.
        
        center = A[y][x]
        left = A[y][x - 1]
        right = A[y][x + 1]
        back = A[y - 1][x]
        front = A[y + 1][x]
        
        So if I wanted to get the surface area for the center cell (1,1) or 2
        I'd get all its neighbors left:2, right: 3, back:3, front:2
        
        top = 1
        bottom = 1
        2 - left:2 = 0
        2 - right:3 = -1 < 0 so turn to 0
        2 - back:3 = -1 < 0 so turn to 0
        2 - front:2 = 0
        
        Since we can't have negative surface area, anything less than 0 becomes 0.
        So that leaves us with 1 + 1 + 0 + 0 + 0 + 0 = 2
        
        And if we do somewhere that doesnt have neighbors, we just assume the neighbors height is 0.
        For example, cell (0,0) or 1. left: 0, right: 3, back: 0, front: 2
        
        top = 1
        bottom = 1
        1 - left:0 = 1
        1 - right:3 = -2 < 0 so 0
        1 - back:0 = 1
        1 - front:2 = -1 < 0 so 0
        
        1 + 1 + 1 + 0 + 1 + 0 = 4
        
    */
    
    let totalSurfaceArea = A.length * A[0].length * 2; // Top and bottom surface area
    for(let i = 0; i < A.length; i++) {
        const prevRow = i > 0 ? A[i - 1] : null;
        const row = A[i];
        const nextRow = i < A.length - 1 ? A[i + 1] : null;
        
        for(let j = 0; j < row.length; j++) {
            // Here I'm calculating the surface area of each cell or A[i][j], except for top and bottom.
            // I'm doing this by getting the difference in height between this cell and its neighbor
            // If a neighboring cell doesnt exist, just assume its height is 0.
            // If a neighboring cell is taller than the current cell, than that side surface area is 0
            // If a neighboring cell is shorter than the current cell, than that side surface area is:
            // Current Cell Height - Neighbor Cell Height
            const center = row[j];
            const left = j > 0 ? row[j - 1] : 0;
            const right = j < row.length - 1 ? row[j + 1] : 0;
            const back = prevRow ? prevRow[j] : 0;
            const front = nextRow ? nextRow[j] : 0;
            
            totalSurfaceArea += center - left > 0 ? center - left : 0;   // left surface area
            totalSurfaceArea += center - right > 0 ? center - right : 0; // right surface area
            totalSurfaceArea += center - back > 0 ? center - back : 0;   // back surface area
            totalSurfaceArea += center - front > 0 ? center - front : 0; // front surface area
        }
    }
    
    return totalSurfaceArea;
}
