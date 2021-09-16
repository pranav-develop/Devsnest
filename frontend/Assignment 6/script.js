//jshint esversion: 8
//question 2
console.log("Question 2");
let a = [2, 4, 5];
let b = a.map((x) => x);
b.push(10);
console.log(a, b);

//question 3
console.log("Question 3");

function first(array, n) {
    if (n && n >= 0) {
        return array.slice(0, n);
    }
    if (n < 0) {
        return [];
    }
    return array[0];
}
console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));

//question 4
myColor = ["Red", "Green", "White", "Black"];

let st = "";
myColor.forEach((color, index) => {
    if (index === myColor.length - 1) st += color;
    else st += color + "+";
});
console.log(st);

//question 4
console.log("question 4");
var arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
let freq = {};

arr1.forEach((ch) => {
    freq[ch] = 1;
});
console.log(freq);
