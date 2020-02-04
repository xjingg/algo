Takes a variadic function and returns a closure that accepts an array of arguments to map to the inputs of the function
//#Source https://bit.ly/2neWfJ2 
const spreadOver = fn => argsArr => fn(...argsArr);
const arrayMax = spreadOver(Math.max);

console.log(arrayMax([1, 2, 3]));



3