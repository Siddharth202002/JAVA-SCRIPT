let marks = [10, 5, 20, 15, 8, 9, 30];

let highestMarks = marks[0];

for (let i = 0; i < marks.length; i++) {
  highestMarks < marks[i]
    ? (highestMarks = marks[i])
    : (highestMarks = highestMarks);
}
console.log(highestMarks);
