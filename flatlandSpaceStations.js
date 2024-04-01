// Link: https://www.hackerrank.com/challenges/flatland-space-stations/problem

function flatlandSpaceStations(n, c) {
    if(c.length === n) return 0;
    c.sort(function(a, b){return a - b});
    
    let maxDis = c[0];
    let remDis = n - maxDis - 1;
    for(let i = 0; i < c.length - 1; i++) {
        if(remDis < maxDis) break;
        const dis = Math.floor((c[i + 1] - c[i]) / 2);
        if(dis > maxDis) maxDis = dis;
        remDis = n - c[i + 1] - 1;
    }
    if(remDis > maxDis) maxDis = remDis;
    
    return maxDis;
}
