//#Source https://bit.ly/2neWfJ2 
const splitLines = str => str.split(/\r?\n/);
console.log('Original string:');
console.log('This\nis a\nmultiline\nstring.\n');
console.log(splitLines('This\nis a\nmultiline\nstring.\n'));


Original string:
This
is a
multiline
string.

["This","is a","multiline","string.",""]