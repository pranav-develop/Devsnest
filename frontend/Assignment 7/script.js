//jshint esversion: 8
console.log("question 1");
let student = {
    firstName: "Sandeep",
    sclass: "BTech",
    rollno: "41",
};

console.log(student);

console.log("question 2");

console.log(student);
delete student.rollno;
console.log(student);

console.log("Question 3");
var library = [
    { author: "Bill Gates", title: "The Road Ahead", readingStatus: true },
    { author: "Steve Jobs", title: "Walter Isaacson", readingStatus: true },
    { author: "Suzanne Collins", title: "Mockingjay: The Final Book of The Hunger Games", readingStatus: false },
];
for (let book = 0; book < library.length; book++) {
    console.log(library[book].title, library[book].readingStatus);
}

console.log("question 6");

function sort_by_title(a, b) {
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    return 0;
}

console.log(library.sort(sort_by_title));
