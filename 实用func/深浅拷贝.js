const shallowClone = obj => Object.assign({}, obj);
const a = { x: true, y: 1 };
const b = shallowClone(a);  

console.log(b);

{"x":true,"y":1}
