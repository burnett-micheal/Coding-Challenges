// Link: https://www.hackerrank.com/challenges/marcs-cakewalk/problem

function marcsCakewalk(calorie) {
    calorie.sort(function(a, b){return b - a}); // sort in descending
    let minimumCalories = 0;
    for(let i = 0; i < calorie.length; i++) minimumCalories += Math.pow(2, i) * calorie[i];
    return minimumCalories;
}
