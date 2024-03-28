// Link: https://www.hackerrank.com/contests/projecteuler/challenges/euler001/problem

function sumOfMultiplesOf3And5(n) { 
    // Didnt know about this equation, had to look it up. The JS implementation is my own creation tho.
    // What it does is calculates the sum of all multiples below a certain number, and returns it.
    // So if value=11 multiple=5. 10 and 5 would be multiples of 5, and it would return 10 + 5 or 15.
    const sumOfMultiplesBelowValue = (value, multiple) => {
        value = value - 1;
        const count = Math.floor(value / multiple + 1);
        
        const x = BigInt(count) * BigInt(count - 1) * BigInt(multiple);
        return x % BigInt(2) === BigInt(0) ? x / BigInt(2) : (x - BigInt(1)) / BigInt(2);
        // Had to deal with big numbers, all its really doing is described in the comment below
        // return Math.floor(count * (count - 1) * multiple / 2);
    }
    
    // So what were doing here is getting the sum of multiples 3 and 5 and adding them.
    // However, since we only want to add each multiple once, we also need to subtract 
    // the multiples of 15, since both 3 and 5 are multiples of 15.
    return sumOfMultiplesBelowValue(n, 3) + sumOfMultiplesBelowValue(n, 5) - sumOfMultiplesBelowValue(n, 15);
}

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n = parseInt(readLine());
        // Had to convert it to a string so it doesnt have the big number n after the number.
        console.log(`${sumOfMultiplesOf3And5(n)}`);
    }
}
