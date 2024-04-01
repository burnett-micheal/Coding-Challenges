// Link: https://www.hackerrank.com/challenges/non-divisible-subset/problem

// Had to look up the solution on this one tbh, did my best to understand the principles of the solution by adding comments and rewriting the code in my own style.

function nonDivisibleSubset(k, s) {
    // This array will track how many of each remainder
    // Thus numOfRemainders[0] = 2 means there are 2 remainders that equal 0
    const numOfRemainders = Array(k).fill(0);
    
    for(let i = 0; i < s.length; i++){
        const remainder = s[i] % k;
        numOfRemainders[remainder]++;
    }
    
    // We can only have one number thats perfectly divisible by k
    if(numOfRemainders[0] > 1) numOfRemainders[0] = 1;
    
    // We can only have one number thats remainder is exactly half of k. Otherwise 2 will get added togethor and be divisible by k.
    if(k % 2 === 0 && numOfRemainders[k / 2] > 1) numOfRemainders[k / 2] = 1
    
    // So what were doing here is determining the best remainder count to add to the result. We cant have 2 remainders that add up to k, so were looking at both sides of the remainder counts array, and checking which one we have more of and adding that to the result. For example, assume k = 5 and i = 1. i represents the remainder after dividing by k. Using algebra, i + x = k, k - i = x, or 5 - 1 = 4 we can determine the remainder count we need to check on the right side of the array, which is 4. Now we cant have 1 and 4 in the result, as that would add up to k or 5, so we determine which one we have more of and add that in.
    let res = numOfRemainders[0];
    for(let i = 1; i <= k / 2; i++) {
        const leftRemCount = numOfRemainders[i];
        const rightRemCount = numOfRemainders[k - i];
        res += leftRemCount > rightRemCount ? leftRemCount : rightRemCount;
    }
    
    return res;
}
