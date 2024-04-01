// Link: https://www.hackerrank.com/challenges/manasa-and-stones/problem

function stones(n, a, b) {
    let numOfA = n - 1;
    let numOfB = 0;
    let possArr = [];
    
    while(numOfA >= 0) {
        possArr.push(numOfA * a + numOfB * b);
        numOfA--;
        numOfB++;
    }
    
    possArr = [... new Set(possArr)]; // remove duplicate values
    possArr.sort(function(a, b){return a - b}); // sort in ascending
    return possArr;
}
