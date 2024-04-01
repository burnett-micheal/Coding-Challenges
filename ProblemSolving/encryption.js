// Link: https://www.hackerrank.com/challenges/encryption/problem

function encryption(s) {
    const noSpcStr = s.replaceAll(" ", "");
    const l = noSpcStr.length;
    const sqr = Math.sqrt(l);
    let flSqrL = Math.floor(sqr);
    const clSqrL = Math.ceil(sqr);
    
    if(flSqrL * clSqrL < l) flSqrL++;
    
    let encStr = "";
    for(let i = 0; i < clSqrL; i++){
        for(let j = 0; j < flSqrL; j++){
            const charIndex = i + j * clSqrL;
            if(noSpcStr.length - 1 >= charIndex) encStr += noSpcStr[i + j * clSqrL];   
        }
        encStr += " ";
    }
    
    return encStr;
}
