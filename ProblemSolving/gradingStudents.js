// Link: https://www.hackerrank.com/challenges/grading/problem

function gradingStudents(grades) {
  const roundedGrades = [];
  for (let i = 0; i < grades.length; i++) {
    const grade = grades[i];
    if (grade < 38) roundedGrades.push(grade);
    else {
      const rem = grade % 5;
      if (rem > 2)
        roundedGrades.push(grade + (5 - rem));
      else
        roundedGrades.push(grade);
    }
  }
  return roundedGrades;
}