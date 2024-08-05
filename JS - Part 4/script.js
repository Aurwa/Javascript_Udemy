// printing all odd nums

for (let i = 15; i >= 1; i -= 2) {
  // console.log(i);
}

// printing all even

for (let i = 2; i < 15; i += 2) {
  // console.log(i);
}

// table of 5
// let num = Number(prompt("Which number table?"));
// for (let i = num; i <= num * 10; i += num) {
//   console.log(i);
// }

// fav movie
// let favMovie = "avatar";
// let guess = prompt("Enter movie name:");

// while (guess !== favMovie) {
//   if (guess === "quit") {
//     console.log("You quit");
//     break;
//   }
//   guess = prompt("Take another guess");
// }

let heros = [
  ["ironman", "spiderman"],
  ["wonder woman", "flash"],
];

// for (list of heros) {
//   for (hero of list) {
//     console.log(hero);
//   }
// }

// for (let i = 0; i < heros.length; i++) {
//   for (let j = 0; j < heros[i].length; j++) {
//     console.log(heros[i][j]);
//   }
// }

// for (char of "aurwa") {
//   console.log(char);
// }

// Basic Todo

let todo = [];
let tasks = prompt("What do you want to do");
while (true) {
  if (tasks === "quit") {
    console.log(todo);
    break;
  } else if (tasks === "add") {
    let addTask = prompt("Enter your task");
    todo.push(addTask);
    console.log(todo);
  } else if (tasks === "remove") {
    let removeTask = prompt("Which task you want to remove?");
    for (let i = 0; i < todo.length; i++) {
      if (todo[i] === removeTask) {
        todo.splice(i, 1);
      }
    }
    console.log(todo);
  }
  tasks = prompt("What do you want to do");
}
