// Link: https://www.hackerrank.com/challenges/the-grid-search/problem

function gridSearch(grid, pattern) {
    /*
        I'm going to do my best to put into words what I've done here. 
        So the challenge was to find out if a 2d pattern exists in a 2d grid.
        
          Grid - - Pattern
          
          1234       99
          9991       98
          5988
          4321
          
        So in the above example we can see the pattern exists in the grid from 1,1 to 2,2.
        
        What I did to do this programatically was:
         
         1. Search for the first row of the pattern in the grid going from grid[0] to grid[grid.length - pattern.length + 1]
         2. Now iterate over each index I found the first row of the pattern, and check for the below patterns.
         3. If I find the full pattern, break out of the loop and return YES. Otherwise, finish the loop and return NO.
         
         So to show this in the above example, 
         I check row 1 "1234" for the row 1 pattern "99". Its not there so I move on.
         I check row 2 "9991" for the row 1 pattern "99". It is there, starting on indexes 0 and 1. firstOccs = [0, 1]
         Now I iterate over each one I found, checking for the below patterns.
         I check row 3, "5988" index 0 "59" for the row 2 pattern "98". Its not there so I move on.
         I check row 3, "5988" index 1 "98" for the row 2 pattern "98". It is there so break out of the loop and return YES.
    */
    
    const getAllOccurrencesOnRow = (indexOfRow, patternToSearchFor) => {
        let row = grid[indexOfRow];
        const occurrences = [];
        for(let j = 0; j < row.length - patternToSearchFor.length + 1; j++) {
            if(patternToSearchFor === row.substring(j, j + patternToSearchFor.length)) {
            occurrences.push(j);
            }
        }
        return occurrences;
    }
    
    const checkOccurrenceOnRow = (indexOfRow, patternToSearchFor, startIndex) => {
        let row = grid[indexOfRow];
        return row.substring(startIndex, startIndex + patternToSearchFor.length) === patternToSearchFor;
    }

    let foundIt = false;
    for(let i = 0; i < grid.length - pattern.length + 1; i++) { 
        // Iterate thru all possible first pattern rows
        const firstOccs = getAllOccurrencesOnRow(i, pattern[0]); // All the starting indexes of the first row of the pattern on grid[i]
        
        for(let j = 0; j < firstOccs.length; j++) { 
            // Iterate thru any occurrences of the first pattern, checking for below patterns
            const firstOcc = firstOccs[j]; // A starting index of the first row of the pattern on grid[i], each below pattern must start on this index.
            
            for(let k = 1; k < pattern.length; k++) { 
                // Iterate thru all below patterns
                if(checkOccurrenceOnRow(i + k, pattern[k], firstOcc)) {
                    if(k === pattern.length - 1) foundIt = true;
                } else {
                    break;
                }
            }
            
            if(foundIt) break;
        }
        
        if(foundIt) break;
    }
    
    return foundIt ? "YES" : "NO";
}
