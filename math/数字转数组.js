const digitize = n => [...`${n}`].map(i => parseInt(i));

console.log(digitize(123));
console.log(digitize(1230));


[1,2,3]
[1,2,3,0]