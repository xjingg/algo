const powerset = arr => arr.reduce((a, v) => a.concat(a.map(r => [v].concat(r))), [[]]);
console.log(powerset([1, 2]));
console.log(powerset([1, 2, 3]));
console.log(powerset([1, 2, 3, 4]));

[[],[1],[2],[2,1]]
[[],[1],[2],[2,1],[3],[3,1],[3,2],[3,2,1]]
[[],[1],[2],[2,1],[3],[3,1],[3,2],[3,2,1],[4],[4,1],[4,2],[4,2,1],[4,3],[4,3,1],[4,3,2],[4,3,2,1]]