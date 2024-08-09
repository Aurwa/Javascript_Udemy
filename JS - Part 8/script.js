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
