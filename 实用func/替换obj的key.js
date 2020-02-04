//#Source https://bit.ly/2neWfJ2 
const rename_keys = (keysMap, obj) =>
  Object.keys(obj).reduce(
    (acc, key) => ({
      ...acc,
      ...{ [keysMap[key] || key]: obj[key] }
    }),
    {}
  );
const obj = { name: 'Bobo', job: 'Programmer', shoeSize: 100 };
console.log("Original Object");
console.log(obj);
console.log("-------------------------------------");
result = rename_keys({ name: 'firstName', job: 'Actor' }, obj);
console.log("New Object");
console.log(result);


"Original Object"
[object Object] {
  job: "Programmer",
  name: "Bobo",
  shoeSize: 100
}
"-------------------------------------"
"New Object"
[object Object] {
  Actor: "Programmer",
  firstName: "Bobo",
  shoeSize: 100
}