// Link: https://www.hackerrank.com/challenges/strange-code/problem

function strangeCounter(t) { 
    let totalMults = 0;
    let lastTimeMult = 0;
    let timeToNextMult = 3 * Math.pow(2, totalMults);
    let remainingTime = t;
    while(remainingTime > timeToNextMult) {
        remainingTime -= timeToNextMult;
        lastTimeMult += timeToNextMult;
        totalMults++;
        timeToNextMult = 3 * Math.pow(2, totalMults);
    }
    
    const valueAtLastMult = 3 * Math.pow(2, totalMults);
    return valueAtLastMult - (t - lastTimeMult - 1);
}
