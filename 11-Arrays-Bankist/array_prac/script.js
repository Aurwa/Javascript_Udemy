let fruits = ["apple", "mango", "orange", "lemon", "peach", "melon", "banana"];

// console.log(fruits[0]);
// console.log(fruits[fruits.length - 1]);
// console.log(fruits.length);
// for (let i = 0; i < fruits.length; i++) {
// console.log(fruits[i]);
// }

// fruits.push("pineapple");
// fruits.unshift("grapes");
// console.log(fruits);

// fruits.pop();
// fruits.shift();
// console.log(fruits);
// console.log(fruits.includes("apple"));
// console.log(fruits.indexOf("orange"));

// const citrus = fruits.slice(2, 4);
// console.log(citrus);

let vegetables = ["tomato", "potato"];
const food = fruits.concat(vegetables);
// console.log(food.join(","));
// const reversedArr = fruits.reverse();
// console.log(reversedArr);

// const fruitLen = fruits.map(function (fruit) {
//   return fruit.length;
// });

// console.log(fruitLen);

/*

if (a > b) { return 1; }: If a is greater than b, the function returns 1. This indicates that a should come after b in the sorted order.

else if (b > a) { return -1; }: If b is greater than a, the function returns -1. This indicates that b should come after a in the sorted order.

else { return 0; }: If a and b are equal, the function returns 0. This indicates that a and b are equal and can be in either order in the sorted result.

*/

// Example 1 - Method 1
function mySort(a, b) {
  if (a > b) {
    return 1;
  } else if (b > a) {
    return -1;
  } else {
    return 0;
  }
}

[6, -2, 2, -7].sort(mySort);

// Example 1 - Method 2
const array1 = [1, 30, 4, 21, 100000];
array1.sort((a, b) => a - b);

// Task List Management
// 1
/*
// Write a function addTask(task) that adds a new task to the end of the tasks array.

const tasks = ["Design", "Development", "Testing", "Deployment"];

function addTask(task) {
  tasks.push(task);
}

addTask("Marketing");
addTask("Branding");
console.log(tasks);
*/

// 2
/*
// Write a function removeTask(task) that removes a specific task from the tasks array.

const tasks = ["Design", "Development", "Testing", "Deployment"];

function removeTask(task) {
  const index = tasks.indexOf(task);
  if (index !== -1) {
    tasks.splice(index, 1);
  }
}

removeTask("Development");
console.log(tasks);
*/

// 3
/*
Write a function listTasks() that prints all tasks in the array, each prefixed with its index.

const tasks = ["Design", "Development", "Testing", "Deployment"];

function listTasks() {
  tasks.forEach((task, index) => {
    console.log(`${index} : ${task}`);
  });
}

listTasks();
*/

const tasks = ["Design", "Development", "Testing", "Deployment"];

function addTask(task) {
  tasks.push(task);
}

addTask("Marketing");
// console.log(tasks);

function removeTask(task) {
  const index = tasks.indexOf(task);
  tasks.splice(index, 1);
}

removeTask("Design");
// console.log(tasks);

function listTasks() {
  tasks.forEach((task, index) => {
    console.log(`${index} : ${task}`);
  });
}

//listTasks();

/*
const inventory = [
  { id: 1, name: "Laptop", quantity: 4 },
  { id: 2, name: "Smartphone", quantity: 10 },
  { id: 3, name: "Tablet", quantity: 6 },
];

function addProduct(id, name, quantity) {
  inventory.push({
    id: id,
    name: name,
    quantity: quantity,
  });
}

addProduct(4, "PC", 7);
//console.log(inventory);

// forEach
// function updateQuantity(id, quantity) {
//   inventory.forEach((item) => {
//     if (item.id === id) {
//       item.quantity = quantity;
//     }
//   });
// }

// for Loop
function updateQuantity(id, quantity) {
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].id === id) {
      inventory[i].quantity = quantity;
    }
  }
}

updateQuantity(1, 10);
//console.log(inventory);

// function findProductByName(name)
*/

/*
const inventory = [
  { id: 1, name: "Laptop", quantity: 4 },
  { id: 2, name: "Smartphone", quantity: 10 },
  { id: 3, name: "Tablet", quantity: 6 },
];

// forEach

// function updateQuantity(id, quantity) {
//   inventory.forEach((item) => {
//     if (id === item.id) {
//       item.quantity = quantity;
//     }
//   });
// }

// updateQuantity(1, 10);

// for Loop
function updateQuantity(id, quantity) {
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].id === id) {
      inventory[i].quantity = quantity;
    }
  }
}

updateQuantity(2, 5);
// console.log(inventory);

//function findProductByName(name) {
//   for (let i = 0; i < inventory.length; i++) {
//     if (inventory[i].name === name) {
//       console.log(inventory[i]);
//     }
//   }
// }

// findProductByName("Laptop");

// Array.find

function findProductByName(name) {
  const product = inventory.find((item) => {
    return item.name === name;
  });
  console.log(product);
}

findProductByName("Smartphone");
*/

const grades = [85, 92, 78, 88, 90];
let avg;
// let max = grades[0];

// function highestGrade(a, b) {
//   if (a < b) {
//     return 1;
//   } else if (a > b) {
//     return -1;
//   }
// }

// const max = grades.sort(highestGrade);
// console.log(max[0]);

function highestGrade() {
  console.log(Math.max(...grades));
}

//highestGrade();

function lowestGrade() {
  console.log(Math.min(...grades));
}

//lowestGrade();

// let arr = [1, 5, 1000, 200];
// const res = function sortArr(a, b) {
//   if (a < b) {
//     return 1;
//   } else if (a > b) {
//     return -1;
//   } else {
//     return 0;
//   }
// };
// const max = arr.sort(res);
// console.log(max[0]);

// function highestGrade() {
//   for (let i = 0; i < grades.length; i++) {
//     if (grades[i] > max) {
//       return grades[i];
//     }
//   }
// }

// console.log(highestGrade());

// function averageGrade() {
//   const total = grades.reduce(function (accumulator, value) {
//     return accumulator + value;
//   }, 0);
//   avg = total / grades.length;
//   return avg;
// }
// console.log(averageGrade());

// let sum = 0;
// let average;

// function averagGrade() {
//   grades.map((num) => {
//     average = (sum += num) / grades.length;
//   });
//   console.log(average);
// }

// averagGrade();

const movies = [
  { title: "Inception", director: "Christopher Nolan", year: 2010 },
  {
    title: "The Matrix",
    director: "Lana Wachowski, Lilly Wachowski",
    year: 1999,
  },
  { title: "Interstellar", director: "Christopher Nolan", year: 2014 },
];

// push method
// let res = [];

// function findMoviesByDirector(director) {
//   for (let i = 0; i < movies.length; i++) {
//     if (movies[i].director === director) {
//       res.push(movies[i]);
//     }
//   }
//   return res;
// }

//console.log(findMoviesByDirector("Christopher Nolan"));
//findMoviesByDirector("Christopher Nolan");

// find Method

// function findMoviesByDirector(director) {
//   movies.find((movie) => {
//     if (movie.director === director) {
//       console.log(movie);
//     }
//   });
// }

// findMoviesByDirector("Christopher Nolan");

// filter method
function findMoviesByDirector(director) {
  let list = movies.filter((movie) => {
    if (movie.director === director) {
      return movie;
    }
  });
  console.log(list);
}

//findMoviesByDirector("Christopher Nolan");

function listMovies() {
  const sortedmovies = movies.sort((a, b) => {
    // ascending order
    if (a.year > b.year) {
      return 1;
    } else if (a.year < b.year) {
      return -1;
    }
  });
  // console.log(sortedmovies);
  sortedmovies.forEach((sortedMovie) => {
    console.log(`${sortedMovie.year} : ${sortedMovie.title}`);
  });
}

//listMovies();

const temperatures = [72, 75, 79, 80, 78, 74, 73];

// function daysAboveThreshold(threshold) {
//   temperatures.forEach((temp) => {
//     if (temp > threshold) {
//       console.log(temp);
//     }
//   });
// }

function daysAboveThreshold(threshold) {
  const days = temperatures.filter((temp) => {
    if (temp > threshold) {
      return temp;
    }
  });
  console.log(days.length);
}
daysAboveThreshold(75);

// function averageTemp() {
//   const sum = temperatures.reduce((accumulator, temp) => {
//     return (accumulator += temp);
//   }, 0);

//   console.log(sum / temperatures.length);
// }
// averageTemp();
