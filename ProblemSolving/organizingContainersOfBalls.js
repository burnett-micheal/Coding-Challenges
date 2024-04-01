// Link: https://www.hackerrank.com/challenges/organizing-containers-of-balls/problem

function organizingContainers(containers) {
    // If theres a container for each ball type thats 
    // capacity is equal to the number of balls of that type, 
    // then its always possible, otherwise its not
    
    const ballTypes = Array(containers[0].length).fill(0);
    const capacities = Array(containers.length).fill(0);
    for(let i = 0; i < containers.length; i++) {
        for(let j = 0; j < containers[i].length; j++) {
            ballTypes[j] += containers[i][j];
            capacities[i] += containers[i][j];
        }
    }
    
    ballTypes.sort(function(a, b){return a - b});
    capacities.sort(function(a, b){return a - b});
    let isPossible = true;
    
    for(let i = 0; i < capacities.length; i++) {
        if(ballTypes[i] !== capacities[i]) {
            isPossible = false;
            break;
        }
    }
    
    return isPossible ? "Possible" : "Impossible";
}
