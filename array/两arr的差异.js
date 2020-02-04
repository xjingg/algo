const symmetricDifference = (a, b) => {
  const sA = new Set(a),
    sB = new Set(b);
  return [...a.filter(x => !sB.has(x)), ...b.filter(x => !sA.has(x))];
};

console.log(symmetricDifference([1, 2, 3], [1, 2, 4]));


[3,4]