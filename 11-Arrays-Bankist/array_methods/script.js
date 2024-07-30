// forEach
/*
let nums = [1, 2, 3, 4, 5];
nums.forEach((item, index, arr) => {
  // console.log("num [ " + index + "] = " + item);
});

// sum with forEach
let sumNum = [1, 2, 3];
let res = 0;
sumNum.forEach((item) => {
  res += item;
});
// console.log(res);

// repitition of letters with forEach
let letters = ["a", "b", "c", "a", "f"];
let count = {};
letters.forEach((letter, index, arr) => {
  if (count[letter]) {
    count[letter]++;
  } else {
    count[letter] = 1;
  }
});
// console.log(count);
*/

// map
/*
const nums = [1, 2, 3, 4, 5];
let res = 1;
nums.map((num) => {
  return (res *= num);
});
// console.log(res);

const numbers = [2, 4, 5];
let doubleNum = numbers.map((num) => {
  return num * 2;
});
// console.log(doubleNum);

const products = [
  {
    name: "laptop",
    price: 1000,
    count: 5,
  },
  {
    name: "desktop",
    price: 5000,
    count: 10,
  },
];

let itemWorth = products.map((product) => {
  return {
    name: product.name,
    total: product.price * product.count,
  };
});
// console.log(itemWorth);

let strNum = ["1", "2", "3"];
let nums2 = strNum.map((num) => {
  return Number(num);
});

// console.log(nums2);
// console.log(typeof nums2[0]);
*/

// filter
/*
const nums = [1, 2, 3, 4, 5, 6];
let odd = nums.filter((num) => {
  return num % 2 !== 0;
});
// console.log(odd);

const people = [
  { name: "A", age: 35 },
  { name: "B", age: 15 },
  { name: "C", age: 26 },
];

let adults = people.filter((person) => {
  return person.age >= 18;
});
// console.log(adults);

const duplicates = [1, 2, 3, 1];

let unique = duplicates.filter((item, index, arr) => {
  if (arr.indexOf(item) === index) {
    return item;
  }
});

// console.log(unique);
*/

// printing how many times each item is repeated
/*
// forEach
let nums = [1, 2, 3, 4, 1, 2];
let count = {};
nums.forEach((num) => {
  if (count[num]) {
    count[num]++;
  } else {
    count[num] = 1;
  }
});

// console.log(count);

// printing unique values
//filter
let letters = ["a", "c", "a", "b", "d"];
const uniqueVal = letters.filter((letter, index, arr) => {
  if (arr.indexOf(letter) === index) {
    return arr;
  }
});
console.log(uniqueVal);
*/

// printing only unique values
/*
let nums = [1, 2, 3, 1, 4, 2, 5];
let uniqueNums = nums.filter((num, index, arr) => {
  if (arr.indexOf(num) === index) {
    return num;
  }
});

console.log(uniqueNums);
*/

// Array Practice - forEach method
/*
// 1. Print each number
let arr = [1, 2, 3, 4, 5];
arr.forEach((num) => {
  // console.log(num);
});

// 2. Sum of numbers
let nums = [1, 1, 1, 1, 1, 5];
let sum = 0;
nums.forEach((num) => {
  sum += num;
});
// console.log(sum);

// 3. Print Elements with Index
let items = ["spoons", "tables", "chairs", "books"];
items.forEach((item, index) => {
  // console.log(item + ": " + index);
});

// 4. Convert Array Elements to Strings
let numbers = [1, 2, 3, 4];
numbers.forEach((num) => {
  // console.log(String(num));
});
*/

// Array Practice - map method
/*
// 1.Square of Numbers
let nums = [1, 2, 3, 4];
let square = nums.map((num) => {
  return num * num;
});
// console.log(square);

// 2. Uppercase Strings
let fruits = ["apple", "banana", "orange"];
let uppercase = fruits.map((fruit) => {
  return fruit.toUpperCase();
});
// console.log(uppercase);

// 3. Object Transformation
const person = [
  { name: "A", age: 25 },
  { name: "B", age: 26 },
  { name: "C", age: 27 },
];

const newPerson = person.map((item) => {
  return `${item.name} is ${item.age} years old.`;
});
// console.log(newPerson);

// 4. Length of Strings
const strings = ["apple", "cats", "poodle"];
let strLen = strings.map((len) => {
  return len.length;
});
// console.log(strLen);
*/

// Array Practice - filter method
/*
// 1. Filter Even Numbers
const nums = [1, 2, 3, 4, 5, 6, 7, 8];
let even = nums.filter((num) => {
  if (num % 2 === 0) {
    return num;
  }
});
// console.log(even);

// 2. Filter Long Strings
const items = ["trees", "flowers", "butterfly", "synchoronous"];
let moreThanFive = items.filter((item) => {
  return item.length > 5;
});
// console.log(moreThanFive);

// 3. Filter by Value
const array = ["chair", "notebook", "america", "house"];
function filterByValue(arr, length) {
  const x = arr.filter((item) => {
    if (item.length === length) {
      return item;
    }
  });
  return x;
}
const filteredArray = filterByValue(array, 5);
// console.log(filteredArray);
*/

// forEach
/*
// 1. Updating the inventory

const inventory = [
  { name: "Apple", quantity: 10 },
  { name: "Banana", quantity: 0 },
  { name: "Cherry", quantity: 20 },
];
const amount = 2;

inventory.forEach((item) => {
  if (item.quantity > 0) {
    // console.log(`${item.name}: ${item.quantity - amount}`);
  }
});

// 3. Sending notification emails
const users = [
  { id: 1, email: "user1@example.com" },
  { id: 2, email: "user2@example.com" },
];
const message = "This is a notification email";
function sendEmail(email, message) {
  console.log(email);
  console.log(message);
}

users.forEach((user) => {
  // sendEmail(user.email, message);
});

// 4. Processing Orders
const orders = [
  { orderId: 101, status: "pending" },
  { orderId: 102, status: "pending" },
];

orders.forEach((order) => {
  // console.log(
  `orderId: ${order.orderId}, status: ${(order.status = "processed")}`;
  // );
});

// 5. Calculating Total Sales
const sales = [
  { itemId: 1, amount: 100 },
  { itemId: 2, amount: 150 },
];
let total = 0;
sales.forEach((sale) => {
  total += sale.amount;
});
// console.log(total);
*/

// map
/*
// 1. Create array of full names
const users = [
  { firstName: "John", lastName: "Doe" },
  { firstName: "Jane", lastName: "Smith" },
];

let fullName = users.map((user) => {
  return user.firstName + " " + user.lastName;
});
// console.log(fullName);

// 2. Convert prices to EUR
const products = [
  { name: "Laptop", priceUSD: 1000 },
  { name: "Phone", priceUSD: 500 },
];

let updatedPrice = products.map((product) => {
  return product.priceUSD * 0.85;
});
// console.log(updatedPrice);

// 3. Create array of HTML strings
const books = [
  { title: "Book One", author: "Author One" },
  { title: "Book Two", author: "Author Two" },
];

let bookList = books.map((book) => {
  return `<li>${book.title} by ${book.author}</li>`;
});
// console.log(bookList.join("\n"));

// 4. Format dates to MM/DD/YYYY
const events = [
  { name: "Event One", date: "2023-08-15" },
  { name: "Event Two", date: "2023-09-10" },
];
const updatedEvents = events.map((event) => {
  const [year, month, date] = event.date.split("-");
  const updatedDate = `${month}-${year}-${date}`;
  return { ...event, date: updatedDate };
});
console.log(updatedEvents);
*/

// filter

// 1. Filter active users
const users = [
  { id: 1, name: "Alice", isActive: true },
  { id: 2, name: "Bob", isActive: false },
];

const activeUsers = users.filter((user) => {
  if (user.isActive === true) {
    return user;
  }
});
// console.log(activeUsers);

// 3. Filter events after current date
const events = [
  { name: "Event One", date: "2023-08-15" },
  { name: "Event Two", date: "2023-09-10" },
  { name: "Event Two", date: "2023-08-1" },
];
const currentDate = new Date("2023-08-10");

let upcomingEvents = events.filter((event) => {
  let eventDate = new Date(event.date);
  if (currentDate < eventDate) {
    return event;
  }
});
// console.log(upcomingEvents);

// 4. Email Validation
const emails = ["test@example.com", "invalid-email", "user@domain.com"];

const regex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let validEmail = emails.filter((email) => {
  if (email.match(regex)) {
    return email;
  }
});
// console.log(validEmail);

// 5. Filter completed tasks
const tasks = [
  { taskName: "Task One", isCompleted: true },
  { taskName: "Task Two", isCompleted: false },
];

let completedTasks = tasks.filter((task) => {
  if (task.isCompleted === true) {
    return { ...tasks };
  }
});
// console.log(completedTasks);
