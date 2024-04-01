// Link: https://www.hackerrank.com/challenges/fair-rations/problem

function fairRations(B) { 
    let bPos = undefined;
    let l = 0;
    for(let i = 0; i < B.length; i++) {
        if(B[i] % 2 !== 0) {
            if(bPos === undefined) {
                bPos = i;
            } else {
                l += (i - bPos) * 2;
                bPos = undefined;
            }
        }
    }
    return bPos === undefined ? l : "NO";
}
