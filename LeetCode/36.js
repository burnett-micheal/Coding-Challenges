// Link: https://leetcode.com/problems/valid-sudoku

var isValidSudoku = function(board) {
    const subBoxes = [[[], [], []], [[], [], []], [[], [], []]];
    const rows = [[], [], [], [], [], [], [], [], []];
    const columns = [[], [], [], [], [], [], [], [], []];
    
    for(let x = 0; x < 9; x++) {
        for(let y = 0; y < 9; y++) {
            const val = board[y][x];
            if(val === ".") continue;
            if(rows[y].includes(val)) return false; else rows[y].push(val);
            if(columns[x].includes(val)) return false; else columns[x].push(val);
            
            const sbX = Math.floor(x/3); const sbY = Math.floor(y/3);
            if(subBoxes[sbY][sbX].includes(val)) return false; else subBoxes[sbY][sbX].push(val);
        }
    }

    return true;
};
