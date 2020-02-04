function FindAllMethods(obj) {
    return Object.getOwnPropertyNames(obj).filter(function(property) {
        return typeof obj[property] == "function";
    });
}
//above code finds methods only
//Following code finds both properties and methods 
console.log(FindAllMethods(Math));
console.log(FindAllMethods(Array));
function all_properties(obj) 
{
 return Object.getOwnPropertyNames(obj);
}

console.log(all_properties(Math));

console.log(all_properties(Array));

["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc"]
["isArray", "from", "of"]
["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"]
["length", "name", "prototype", "isArray", "from", "of"]