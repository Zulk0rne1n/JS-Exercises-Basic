let hello = 'Ciao';     // number
let age = 18;       // boolean
let isGraduated = false;     // string

hello = Number(hello);
age = Boolean(age);
isGraduated = String(isGraduated);

console.log(hello);
console.log(age);
console.log(isGraduated);

// As long as a string variable has a non numeric value 
// it won't be possible to convert it into a number and that is why it prints out `NaN`
// P.S. I think it may be achieved with a function or a legend.