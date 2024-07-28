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
