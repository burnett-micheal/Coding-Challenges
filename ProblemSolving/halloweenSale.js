// Link: https://www.hackerrank.com/challenges/halloween-sale/problem

function howManyGames(p, d, m, s) {
    let remainingBalance = s;
    let costOfGame = p;
    let gamesBought = 0;
    
    while(costOfGame > m && remainingBalance > costOfGame) {
        remainingBalance -= costOfGame;
        costOfGame = costOfGame - d < m ? m : costOfGame - d;
        gamesBought++;
    }
    
    gamesBought += Math.floor(remainingBalance / costOfGame);
    
    return gamesBought;
}
