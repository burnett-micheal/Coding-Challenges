// Link: https://www.hackerrank.com/challenges/happy-ladybugs/problem

function happyLadybugs(b) {
    let isHappy = true;
    
    if(b.includes("_")) {
        // There is empty space, As long as every color is greater than 1 ladybugs are happy
        const ladybugs = {};
        
        for(let i = 0; i < b.length; i++) {
            const val = b[i];
            if(val === "_") { 
                continue;
            } else 
            if(val in ladybugs) {
                ladybugs[val]++;
            } else {
                ladybugs[val] = 1;
            }
        }

        for(const color in ladybugs) {
            if(ladybugs[color] === 1) {
                isHappy = false;
                break;
            }
        }
    } else {
        // There isnt empty space, The string must be perfect
        let prevColor = undefined;
        let nextColor = b[0];
        for(let i = 1; i < b.length; i++) {
            if(b[i] === prevColor) {
                continue;
            } else
            if(nextColor === undefined) {
                nextColor = b[i];
                prevColor = undefined;
            } else
            if(b[i] === nextColor) {
                nextColor = undefined;
                prevColor = b[i];
            } else {
                isHappy = false;
                break;
            }
        }
        
        if(nextColor !== undefined) {
            isHappy = false;
        }
    }
    
    return isHappy ? "YES" : "NO";
}
