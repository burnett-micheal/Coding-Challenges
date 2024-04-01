// Link: https://www.hackerrank.com/challenges/extra-long-factorials/problem

function extraLongFactorials(n) {
    const calcFactorial = (fat) => {
        return (fat === BigInt(1)) ? fat : fat * calcFactorial(fat - BigInt(1));
    }
    
    console.log(calcFactorial(BigInt(n)).toString());
}
