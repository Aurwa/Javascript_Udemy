// We can use concat() and slice() and spread method to make shallow copies
// [...num].arrayChaining

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
/*
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
*/

// ******************************************
// Array reduce method

// let nums = [1, 2, 13, 4, 5];
// const max = nums.reduce((accumulator, num) => {
//   if (accumulator > num) {
//     return accumulator;
//   } else {
//     return num;
//   }
// }, 0);
// console.log(max);

// const store = [
//   {
//     product: "laptop",
//     value: 1000,
//     count: 3,
//   },
//   {
//     product: "desktop",
//     value: 1500,
//     count: 4,
//   },
//   {
//     product: "mobile",
//     value: 500,
//     count: 10,
//   },
// ];

// const productWorth = store.reduce((acc, item) => {
// const price = item.value * item.count;
// return accumulator + price;
//   acc[item.product] = item.value * item.count;
//   return acc;
// }, {});

// console.log(productWorth);

// Array Practice - reduce
/*
// 1. Flatten an Array
const arrays = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8, 9],
];
const flatArray = arrays.reduce((acc, arr) => {
  return acc.concat(arr);
}, []);
// console.log(flatArray);

// 2. Count Occurrences of Values
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
const occurence = fruits.reduce((acc, fruit) => {
  if (acc[fruit]) {
    acc[fruit]++;
  } else {
    acc[fruit] = 1;
  }
  return acc;
}, {});
// console.log(occurence);

// getting max from an array
let numbers = [20, 15, 25, 100, 90];
let maxNumber = numbers.reduce((acc, num) => {
  if (acc > num) {
    return acc;
  } else {
    return num;
  }
});
// console.log(maxNumber);

const store = [
  {
    product: "laptop",
    value: 1000,
    count: 3,
  },
  {
    product: "desktop",
    value: 1500,
    count: 4,
  },
  {
    product: "mobile",
    value: 500,
    count: 10,
  },
];

const productsWorth = store.reduce((acc, item) => {
  acc[item.product] = item.value * item.count;
  return acc;
}, {});
// console.log(productsWorth);
*/

// Polyfill for map()
/*
Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

let numbers = [1, 2, 3, 4];
let multiplyByThree = numbers.myMap((num) => {
  return num * 3;
});
console.log(multiplyByThree);


Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

let nums = [2, 4, 6];
let multiplyByTwo = nums.myMap((num) => {
  return num * 2;
});
console.log(multiplyByTwo);
*/

// Polyfill for filter()
/*
Array.prototype.myFilter = function (cb) {
  let temp = [];
  console.log(cb);
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }
  return temp;
};

let nums = [1, 2, 3, 4, 5];
let greaterThan2 = nums.myFilter((num) => {
  return num > 2;
});
console.log(greaterThan2);
*/

// Polyfill for reduce()
/*
Array.prototype.myReduce = function (cb, initialVal) {
  let accumulator = initialVal;

  for (let i = 0; i < this.length; i++) {
    if (accumulator) {
      accumulator = cb(accumulator, this[i], i, this);
    } else {
      accumulator = this[i];
    }
  }
  return accumulator;
};

let nums = [1, 2, 3, 4, 5];
let sum = nums.myReduce((acc, num) => {
  return acc + num;
}, 0);
console.log(sum);


let students = [
  { name: "Piyush", rollNumber: 31, marks: 80 },
  { name: "Jenny", rollNumber: 15, marks: 69 },
  { name: "Kaushal", rollNumber: 16, marks: 35 },
  { name: "Dilpreet", rollNumber: 7, marks: 55 },
];

let add20 = students
  .map((student) => {
    if (student.marks < 60) {
      student.marks += 20;
    }
    return student;
  })
  .filter((student) => student.marks > 60)
  .reduce((acc, curr) => {
    return acc + curr.marks;
  }, 0);

// console.log(add20);
*/

// slice
// const nums = [1, 2, 3, 4, 5];
// console.log(nums.slice(-4));

// Array sort method
let nums = [200, 20, 100, 5, 60];
nums.sort(function (a, b) {
  return a - b;
});
// console.log(nums);

let a = [1, 2, 3];
let b = [4, 5, 6];
// console.log(a.concat(b));
let c = a.concat();
// console.log(c);

function createArray(n) {
  return Array(n)
    .fill(0)
    .map((_, i) => {
      return i + 1;
    });
}
// console.log(createArray(10));

// let str = "Coding iss fun!";
// let reversedStr = str.split("").reverse().join("");
// console.log(reversedStr);

const numbers = [1, 2, 3];
numbers.unshift(0, -1);
// console.log(numbers);

// Array every() method

const nums1 = [1, 2, 3, 4, 5];
let res = nums1.every((item) => {
  return item > 0;
});
// console.log(res);

const people = [{ name: "A" }, { name: "B" }, { surname: "C" }];
// let result = people.every((person) => {
// return person.name;
// });
// console.log(result);

// Array from() method
let numStr = "1234567";
let r = Array.from(numStr, mapFun);
// console.log(r);

function mapFun(val) {
  return Number(val);
}

// Using Array.from to remove duplicates
let duplicates = [1, 2, 3, 1, 4, 5, 6, 2, 4, 7];
let unique = Array.from(new Set(duplicates));
// console.log(unique);

function phoneticLookup(val) {
  let result = "";
  const lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank",
  };
  result = lookup[val];
  return result;
}

// console.log(phoneticLookup("charlie"));

// 1. isArray or not
function is_Array(val) {
  return Array.isArray(val);
}

// console.log(is_Array("w3resource"));
// console.log(is_Array([1, 2, 3, 4, 5]));

// 2. Clone an array
function cloneArray(arr) {
  return arr.slice();
}

// console.log(cloneArray([1, 2, 3, 4, 5]));

// 3. first element of an array
function firstEle(arr, n) {
  return arr.slice(0, n);
}

// console.log(firstEle([7, 9, 0, -2], 6));

// 4. last element of an array
function last(arr, n) {
  // return arr.slice(Math.max(arr.length - n, 0));
}

// console.log(last([7, 9, 0, -1], 3));
// console.log(last([7, 9, 0, -2], 6));

// 5. joining arrays
myColor = ["Red", "Green", "White", "Black"];
// console.log(myColor.join("+"));

// 6.
// let num = window.prompt();
// let str = num.toString();
// let result = [str[0]];
// for (let i = 1; i < str.length; i++) {
//   if (str[i - 1] % 2 == 0 && str[i] % 2 == 0) {
//     result.push("-", str[i]);
//   } else {
//     result.push(str[i]);
//   }
// }

// console.log(result.join(""));

// 7. sorting an array
// let arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
// arr1.sort((a, b) => {
//   return a - b;
// });
// console.log(arr1);

// 1. Reverse an array
// let arr = [1, 2, 3, 4, 5];
// arr.reverse();
// console.log(arr);

// 2. Maximum in an array
// let arr = [3, 5, 4, 2, 5, 9, 2, 1];
// let max = arr.reduce((acc, curr) => {
//   if (acc > curr) {
//     return acc;
//   } else {
//     return curr;
//   }
// }, 0);
// console.log(max);

// Using reduce
// let min = arr.reduce((acc, curr) => {
//   if (acc > curr) {
//     return curr;
//   } else {
//     return acc;
//   }
// });

// console.log(min);

// using forEach

// let min1;
// arr.forEach((num) => {
//   min1 = arr[0];
//   if (num < min1) {
//     min1 = num;
//   }
// });
// console.log(min1);

// Using sort

// let sortedNums = arr.sort((a, b) => {
//   return a - b;
// });
// let min1 = sortedNums[0];
// console.log(min1);

// Using spread operator
// let min1 = Math.min(...arr);
// console.log(min1);

// 3. Array Sum
// let arr = [1, 2, 3, 4, 5, 6];
// let sum = arr.reduce((acc, curr) => {
//   return acc + curr;
// }, 0);
// console.log(sum);

// 4. Remove item
// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.slice(2, 3);
// console.log(newArr);

// 5. If two arrays are equal

// Way 1
// let arr1 = [1, 2, 3];

// function areEqual(arr) {
//   if (arr.length !== arr1.length) {
//     return false;
//   }

//   for (let i = 0; i < arr.length; i++) {
//     if (arr1[i] !== arr[i]) {
//       return false;
//     }
//   }
//   return true;
// }

// let equal = areEqual([1, 2, 3]);
// console.log(equal);

// Way 2 - every
// function equalArrays(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }

//   return arr1.every((num, index) => {
//     return num === arr2[index];
//   });
// }
// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 5];
// console.log(equalArrays(arr1, arr2));

// Method  - every()

// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3];

// function areEqual(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }

//   return arr1.every((ele, i) => {
//     return ele === arr2[i];
//   });
// }

// console.log(areEqual(arr1, arr2));

// Checking if an array is palindrome
let arr = [1, 2, 3, 2, 1];
function isPalindrome(arr) {
  return arr.every((ele, index, arr) => {
    return ele === arr[arr.length - 1 - index];
  });
}

console.log(isPalindrome(arr));
