const filter_Non_Unique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));

console.log(filter_Non_Unique([1, 2, 2, 3, 4, 4, 5]));  
console.log(filter_Non_Unique([1, 2, 3, 4])); 


[1,3,5]
[1,2,3,4]