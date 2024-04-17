// Link: https://leetcode.com/problems/fizz-buzz

var fizzBuzz = function(n) {
    const getFizzBuzz = (num) => {
        // By using phrases, we can add many more number - string combinations by just adding them to the phrases object.
        let phrases = {3: "Fizz", 5: "Buzz"};

        let result = '';
        for (let dividend in phrases) {
            if (num % dividend === 0) {
                result += phrases[dividend];
            }
        }

        return result === '' ? `${num}` : result;
    }

    const resultArr = [];
    for(let i = 1; i <= n; i++) {
        resultArr.push(getFizzBuzz(i));
    }

    return resultArr;
};
