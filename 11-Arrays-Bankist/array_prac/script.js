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
