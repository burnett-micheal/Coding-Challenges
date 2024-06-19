// Link: https://leetcode.com/problems/zigzag-conversion/

var convert = function(s, numRows) {
    // In this leetcode problem were taking a string s and a numRows parameter
    // The string is set in a zigzag pattern based on the numRows, and we need
    // To return a string that reads that zigzag pattern in order from top to bottom.
    // For an Ex: s = "PAYPALISHIRING"; numRows = 4;
    
    // P     I    N
    // A   L S  I G
    // Y A   H R
    // P     I

    // The result would be: "PINALSIGYAHRPI"
    // This is because:
    // Row 1: PIN
    // Row 2: ALSIG
    // Row 3: YAHR
    // Row 4: PI
    // Result: "PINALSIGYAHRPI"


    // If theres just 1 row return the string unchanged
    if(numRows === 1) return s;

    // Iterate over the whole string, adding the character to the appropriate rows index.
    const rows = [];
    let row = 0;
    let rowInc = 1;
    for(let i = 0; i < s.length; i++) {
        if(rows[row]) rows[row] += s[i]; else rows[row] = s[i];
        if(row + rowInc >= numRows || row + rowInc < 0) rowInc *= -1;
        row += rowInc;
    }

    // Join all the rows into 1 string and return the result
    return rows.join("");
};
