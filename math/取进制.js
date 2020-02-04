//#Source https://bit.ly/2neWfJ2 
const round = (n, decimals = 0) => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);

console.log(round(1.005, 2));
console.log(round(1.05, 2));
console.log(round(1.0005, 2));

结果：
1.01
1.05
1