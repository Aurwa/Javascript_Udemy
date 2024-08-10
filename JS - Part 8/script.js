/*
let arr = [1, 2, 3, 4, 5, 6, 9, 2];

let even = arr.filter((num) => {
  return num % 2 == 0;
});

// console.log(even);

let ans = arr.some((num) => {
  return num % 2 == 0;
});
// console.log(ans);

let min = arr.reduce((acc, ele) => {
  if (acc < ele) {
    return acc;
  } else {
    return ele;
  }
});

// console.log(min);

let arr2 = [10, 20, 30, 40, 50];

let ans2 = arr2.every((el) => el % 10 == 0);
console.log(ans2);
*/

// function sum(a, b = 1) {
//   return a + b;
// }

// let x = sum(2, 6);
// console.log(x);

// console.log(..."apnacollege");

/*
let arr = [1, 2, 3, 4, 5];
let copy = { ...arr };
// console.log(copy);

// console.log(...arr);

let newArr = [...arr];
// console.log(newArr);

let chars = [..."hello"];
// console.log(chars);

let str = "hello";
let newStr = str.split("");
// console.log(newStr);

let data = {
  email: "zafar@yahoo.com",
  password: "abcd",
};

let newData = { ...data, id: 111 };
// console.log(newData);

function sum(...args) {
  console.log(args);
  return args.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
}

// console.log(sum(10, 20, 20));

// function min(a, b, c, d) {
//   console.log(arguments);
// }

// min(1, 2, 3, 4);

function min(...args) {
  return args.reduce((acc, curr) => {});
}

// de-structuring
let names = ["bruce", "william", "tony", "spark"];
let [winner, runnerUp, ...others] = names;
// console.log(winner, runnerUp);
// console.log(others);

const student = {
  username: "karan123",
  password: 123,
};

const { username: user, password: pass, city = "Mumbai" } = student;
console.log(pass);
// console.log(city);
*/

// let arr = [1, 2, 3];

function doubleAndReturn(arr, ...args) {
  let double = args.map((num) => {
    return num * 2;
  });
  return [...arr, ...double];
}

console.log(doubleAndReturn([2], 10, 4));

// let obj1 = {
//   name: "Aurwa",
//   id: 1,
// };

// let obj2 = {
//   name2: "Zed",
//   id2: 2,
// };

// const mergeObj = (obj1, obj2) => {
//   return { ...obj1, ...obj2 };
// };
// console.log(mergeObj(obj1, obj2));

const mergeObj = (obj1, obj2) => {
  const merged = { ...obj1 };
  for (let key in obj2) {
    if (merged[key]) {
      merged[key] = [merged[key], obj2[key]];
    } else {
      merged[key] = obj2[key];
    }
  }
  return merged;
};

console.log(mergeObj({ name: "Aurwa", id: 1 }, { name: "Zed", id: 2 }));
// Output: { name: ["Aurwa", "Zed"], id: [1, 2] }
