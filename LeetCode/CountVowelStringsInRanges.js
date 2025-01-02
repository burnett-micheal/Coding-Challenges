//Link: https://leetcode.com/problems/count-vowel-strings-in-ranges

var vowelStrings = function(words, queries) {
    const vowels = ["a", "e", "i", "o", "u"];

    const matchCounts = [];
    let matchCount = 0;
    for(let i = 0; i < words.length; i++) {
        const firstLetter = words[i][0];
        const lastLetter = words[i][words[i].length - 1];
        if(vowels.includes(firstLetter) && vowels.includes(lastLetter)) {
            matchCount += 1;
        }
        matchCounts.push(matchCount);
    }

    const result = [];
    for(let i = 0; i < queries.length; i++) {

        let left = undefined;

        if(queries[i][0] === 0) left = 0; else
        if(queries[i][0] === queries[i][1]) left = matchCounts[queries[i][0] - 1]; else
        left = matchCounts[queries[i][0] - 1];


        result.push(matchCounts[queries[i][1]] - left);
    }

    return result;
};
