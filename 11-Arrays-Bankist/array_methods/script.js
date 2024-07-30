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
