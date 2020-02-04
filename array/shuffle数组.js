//#Source https://bit.ly/2neWfJ2 
const shuffle = ([...arr]) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
};
const foo = [1, 2, 3];

console.log(shuffle(foo));

[2,1,3]