// forEach

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
