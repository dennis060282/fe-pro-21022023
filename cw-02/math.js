let firstNumber = 10;
let secondNumber = 2;

console.log(firstNumber+secondNumber);
console.log(firstNumber-secondNumber);
console.log(firstNumber*secondNumber);
console.log(firstNumber/secondNumber);

console.log(firstNumber%secondNumber);
console.log(11%2);
console.log(4%2);
console.log(6%3);

let firstUserValue = prompt('Введіть перше число');
let secondUserValue = prompt('Введіть друге число');

//let result = +firstUserValue + +secondUserValue;
let result = parseInt(firstUserValue) + parseFloat(secondUserValue);
//console.log(parseInt(firstUserValue));
//console.log(parseFloat(secondUserValue));

console.log(Number(firstUserValue));
console.log(secondUserValue);

