Perform stable sorting of an array, preserving the initial indexes of items when their values are the same

//#Source https://bit.ly/2neWfJ2 
const stableSort = (arr, compare) =>
  arr
    .map((item, index) => ({ item, index }))
    .sort((a, b) => compare(a.item, b.item) || a.index - b.index)
    .map(({ item }) => item);

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(stableSort(arr, () => 0));



[0,1,2,3,4,5,6,7,8,9,10]
