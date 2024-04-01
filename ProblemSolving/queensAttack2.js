// Link: https://www.hackerrank.com/challenges/queens-attack-2/problem

function queensAttack(n, k, r_q, c_q, obstacles) {
    const getDistance = (startX, startY, endX, endY) => Math.hypot(endX - startX, endY - startY);
    
    const queenX = r_q;
    const queenY = c_q;
    
    const getTopLeft = () => {
        if(queenX - 1 === n - queenY) {
            return { x: 1, y: n};
        } else 
        if(queenX - 1 < n - queenY) {
            return { x: 1, y: queenY + (queenX - 1) };
        } else {
            return { x: queenX - (n - queenY), y: n };
        }
    }
    
    const getTopRight = () => {
        if(n - queenX === n - queenY) {
            return { x: n, y: n };
        } else 
        if(n - queenX < n - queenY) {
            return { x: n, y: queenY + (n - queenX) };
        } else {
            return { x: queenX + (n - queenY), y: n}
        }
    }
    
    const getBottomLeft = () => {
        if(queenX - 1 === queenY - 1) {
            return { x: 1, y: 1};
        } else 
        if(queenX - 1 < queenY - 1) {
            return { x: 1, y: queenY - (queenX - 1) };
        } else {
            return { x: queenX - (queenY - 1), y: 1}
        }
    }
    
    const getBottomRight = () => {
        if(n - queenX === queenY - 1) {
            return { x: n, y: 1};
        } else 
        if(n - queenX < queenY - 1) {
            return { x: n, y: queenY - (n - queenX) };
        } else {
            return { x: queenX + (queenY - 1), y: 1}
        }
    }
    
    const topLeft = getTopLeft();
    const topRight = getTopRight();
    const bottomLeft = getBottomLeft();
    const bottomRight = getBottomRight();
    
    let topDis = getDistance(queenX, queenY, queenX, n);
    let topRightDis = getDistance(queenX, queenY, topRight.x, topRight.y);
    let topLeftDis = getDistance(queenX, queenY, topLeft.x, topLeft.y);

    let bottomDis = getDistance(queenX, queenY, queenX, 1);;
    let bottomRightDis = getDistance(queenX, queenY, bottomRight.x, bottomRight.y);
    let bottomLeftDis = getDistance(queenX, queenY, bottomLeft.x, bottomLeft.y);

    let rightDis = getDistance(queenX, queenY, n, queenY);
    let leftDis = getDistance(queenX, queenY, 1, queenY);
    
    const diagDis1 = getDistance(0,0, 1,1);
    const strDis1 = getDistance(0,0, 0,1);
    
    const handleObs = (obs) => {
        const obsX = obs[0];
        const obsY = obs[1];
        
        if(obsX === queenX) {
            if(obsY > queenY) {
                // Top
                const dis = getDistance(queenX, queenY, obsX, obsY) - strDis1;
                if(dis < topDis) { topDis = dis; }
            } else {
                // Bottom
                const dis = getDistance(queenX, queenY, obsX, obsY) - strDis1;
                if(dis < bottomDis) { bottomDis = dis; }
            }
        } else
        if(obsY === queenY) {
            if(obsX > queenX) {
                // Right
                const dis = getDistance(queenX, queenY, obsX, obsY) - strDis1;
                if(dis < rightDis) { rightDis = dis; }
            } else {
                // Left
                const dis = getDistance(queenX, queenY, obsX, obsY) - strDis1;
                if(dis < leftDis) { leftDis = dis; }
            }
        } else
        if(queenX - obsX === queenY - obsY) {
            if(obsX > queenX) {
                // Top Right
                const dis = getDistance(queenX, queenY, obsX, obsY) - diagDis1;
                if(dis < topRightDis) { topRightDis = dis; }
            } else {
                // Bottom Left
                const dis = getDistance(queenX, queenY, obsX, obsY) - diagDis1;
                if(dis < bottomLeftDis) { bottomLeftDis = dis; }
            }
        } else
        if(queenX - obsX === (queenY - obsY) * -1) {
            if(obsX > queenX) {
                // Bottom Right
                const dis = getDistance(queenX, queenY, obsX, obsY) - diagDis1;
                if(dis < bottomRightDis) { bottomRightDis = dis; }
            } else {
                // Top Left
                const dis = getDistance(queenX, queenY, obsX, obsY) - diagDis1;
                if(dis < topLeftDis) { topLeftDis = dis; }
            }
        }
    }
    
    for(let i = 0; i < obstacles.length; i++) { handleObs(obstacles[i]); }
    
    const strSqrs = (topDis + bottomDis + leftDis + rightDis) / strDis1;
    const diagSqrs = (topRightDis + topLeftDis + bottomRightDis + bottomLeftDis) / diagDis1;
    
    return Math.floor(strSqrs + diagSqrs);
}
