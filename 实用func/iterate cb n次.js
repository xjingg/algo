Iterate over a callback n times

//#Source https://bit.ly/2neWfJ2 
const times = (n, fn, context = undefined) => {
  let i = 0;
  while (fn.call(context, i) !== false && ++i < n) {}
};
var output = '';
times(5, i => (output += i));
console.log(output); // 01234
