// Link: https://www.hackerrank.com/challenges/cavity-map/problem

function cavityMap(grid) {
    const newGrid = [];
    
    for(let y = 0; y < grid.length; y++){
        let gridStr = "";
        let prevCell = undefined;
        let prevCellCavity = false;
        for(let x = 0; x < grid[y].length; x++){
            const curCell = parseInt(grid[y][x]);
            let isCavityCell = false;
            
            // Handle border cells
            if(x === 0 || x === grid[y].length - 1 || y === 0 || y === grid.length - 1) {
                gridStr += grid[y][x]; 
            } else 
            
            // Handle if last cell was cavity
            if(prevCellCavity) {
                gridStr += grid[y][x];
            } else
            
            // Handle potential cavity cells
            if(prevCell < curCell) {
                if(curCell > parseInt(grid[y][x + 1]) && curCell > parseInt(grid[y + 1][x]) && curCell > parseInt(grid[y - 1][x])) {
                    // Cavity cell
                    isCavityCell = true;
                    gridStr += "X";
                } else {
                    // Not Cavity cell
                    gridStr += grid[y][x];
                }
            } else 
            
            // Handle not cavity cells
            {
                gridStr += grid[y][x];
            }
            
            prevCell = parseInt(grid[y][x]);
            prevCellCavity = isCavityCell;
        }
        newGrid.push(gridStr);
    }
    
    return newGrid;
}
