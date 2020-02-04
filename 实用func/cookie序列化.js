//#Source https://bit.ly/2neWfJ2 
const serializeCookie = (name, val) => `${encodeURIComponent(name)}=${encodeURIComponent(val)}`;
console.log(serializeCookie('foo', 'bar'));

foo=bar
