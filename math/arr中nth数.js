const every_nth = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);
console.log(every_nth([1, 2, 3, 4, 5, 6], 1));
console.log(every_nth([1, 2, 3, 4, 5, 6], 2));
console.log(every_nth([1, 2, 3, 4, 5, 6], 3));
console.log(every_nth([1, 2, 3, 4, 5, 6], 4));

[1,2,3,4,5,6]
[2,4,6]
[3,6]
[4]