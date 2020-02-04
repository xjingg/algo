const decapitalize = ([first, ...rest], upperRest = false) =>
  first.toLowerCase() + (upperRest ? rest.join('').toUpperCase() : rest.join(''));
console.log(decapitalize('W3resource'))
console.log(decapitalize('Red', true));