Remove n elements from the end of a given array

const takeRight = (arr, n = 1) => arr.slice(arr.length - n, arr.length);

console.log(takeRight([1, 2, 3], 2));
console.log(takeRight([1, 2, 3]));


[2,3]
[3]

Get an array with n elements removed from the beginning from a given array

//#Source https://bit.ly/2neWfJ2 
const take = (arr, n = 1) => arr.slice(0, n);
console.log(take([1, 2, 3], 5));
console.log(take([1, 2, 3], 0));

[1,2,3]
[]


Get removed elements from the end of a given array until the passed function returns true

//#Source https://bit.ly/2neWfJ2 
const takeRightWhile = (arr, func) => {
  for (let i of arr.reverse().keys())
    if (func(arr[i])) return arr.reverse().slice(arr.length - i, arr.length);
  return arr;
};

console.log(takeRightWhile([1, 2, 3, 4], n => n < 3));
[3,4]


Get removed elements of an given array until the passed function returns true

//#Source https://bit.ly/2neWfJ2 
const takeWhile = (arr, func) => {
  for (const [i, val] of arr.entries()) if (func(val)) return arr.slice(0, i);
  return arr;
};

console.log(takeWhile([1, 2, 3, 4], n => n >= 3));
[1,2]