let obj = {
  1: "a",
  2: "b",
  age: 23,
};

const student = {
  name: "Aurwa",
  age: 26,
  marks: 94.4,
  city: "Delhi",
};

student.city = "Mumbai";
student.gender = "female";
student.marks = "A";
// console.log(student);

// Generate random number
/*
let max = prompt("Enter a range:");

let randomNum = Math.floor(Math.random() * max) + 1;

let guess = prompt("Enter your guess");

while (true) {
  if (guess == "quit") {
    console.log("User quits");
    break;
  }

  if (guess == randomNum) {
    console.log("You guessed it. The number was: ", randomNum);
    break;
  } else if (guess < randomNum) {
    guess = prompt("Take a higher guess");
  } else {
    guess = prompt("Take a lower guess");
  }
}
*/

// let arr = [1, 2, 3, 4, 5, 6, 2, 3];

let num = Math.floor(Math.random() * 6) + 1;
console.log(num);
