"use strict";

// Assignment 1: Function and Array

function max(numbers) {
  let max = 0;
  numbers.forEach((num) => (num > max ? (max = num) : num));
  return max;
}

console.log(`function max([1, 2, 4, 5])...result : ${max([1, 2, 4, 5])}`);
console.log(`function max([5, 2, 7, 1, 6])...result : ${max([5, 2, 7, 1, 6])}`);

//Assignment 2: Object
function calculate(args) {
  let result;
  if (args.op === "+") {
    result = args.n1 + args.n2;
  } else if (args.op === "-") {
    result = args.n1 - args.n2;
  } else {
    result = "Not supported";
  }
  return result;
}

// Apply constructor or class to create a proper object

//constructor function
const ObjGeneratorFn = function (n1, n2, op) {
  this.n1 = n1;
  this.n2 = n2;
  this.op = op;
};

const argbyFn = new ObjGeneratorFn(100, 60, "-");
console.log(`calculate(argbyFn)...result : ${calculate(argbyFn)}`);

//ES6 Classes
class ObjGeneratorCl {
  constructor(n1, n2, op) {
    this.n1 = n1;
    this.n2 = n2;
    this.op = op;
  }
}

const argbyCl = new ObjGeneratorCl(5, 1, "+");
console.log(`calculate(argbyCl)...result : ${calculate(argbyCl)}`);

//Assignment 3: Function, Array, and Object
function avg(data) {
  const { size, products } = data;
  let sum = 0;

  for (let i = 0; i < products.length; i++) {
    sum += products[i].price;
  }
  console.log(`Average price is $ ${sum / size}`);
}

avg({
  size: 3,
  products: [
    {
      name: "Product 1",
      price: 100,
    },
    {
      name: "Product 2",
      price: 700,
    },
    {
      name: "Product 3",
      price: 250,
    },
  ],
});

//Assignment 5: Algorithm Practice (Advanced Optional)
function twoSum(nums, target) {
  let a = 0;
  let b = 0;
  for (let i = 0; i < nums.length; i++) {
    a = nums[i];
    b = target - nums[i];

    if (nums.includes(b)) {
      const arr = [];

      if (a === b) {
        const tempArr = nums.slice();
        arr.push(nums.indexOf(a));
        tempArr.splice(nums.indexOf(a), 1, "taken");
        arr.push(tempArr.indexOf(b));
        return arr;
      }
      arr.push(nums.indexOf(a));
      arr.push(nums.indexOf(b));
      return arr;
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([27, 27, 0, 15], 54));
console.log(twoSum([3, 5, 0, 5], 10));
