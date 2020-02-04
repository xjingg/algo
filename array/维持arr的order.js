//#Source https://bit.ly/2neWfJ2 
const sortedIndex = (arr, n) => {
  const isDescending = arr[0] > arr[arr.length - 1];
  const index = arr.findIndex(el => (isDescending ? n >= el : n <= el));
  return index === -1 ? arr.length : index;
};

console.log(sortedIndex([5, 3, 2, 1], 4));
console.log(sortedIndex([30, 50], 40));

1
1
以上为最小的index，下面为找最大的index

//#Source https://bit.ly/2neWfJ2 
const sortedLastIndex = (arr, n) => {
  const isDescending = arr[0] > arr[arr.length - 1];
  const index = arr.reverse().findIndex(el => (isDescending ? n <= el : n >= el));
  return index === -1 ? 0 : arr.length - index;
};

console.log(sortedLastIndex([10, 20, 30, 30, 40], 30));

4


根据provided的iterator function来判断，求最大的index使得order维持的
//#Source https://bit.ly/2neWfJ2 
const sortedLastIndexBy = (arr, n, fn) => {
  const isDescending = fn(arr[0]) > fn(arr[arr.length - 1]);
  const val = fn(n);
  const index = arr
    .map(fn)
    .reverse()
    .findIndex(el => (isDescending ? val <= el : val >= el));
  return index === -1 ? 0 : arr.length - index;
};
console.log(sortedLastIndexBy([{ x: 4 }, { x: 5 }], { x: 4 }, o => o.x));

1