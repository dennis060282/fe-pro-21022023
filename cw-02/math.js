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

console.log("value++");

let startValue = 1;
let startValuePred = 1;
console.log(startValue); //1
console.log(startValue++); //1
console.log(startValue); //2
console.log(startValue++); //2
console.log(startValue); //3

console.log("++value");

console.log(startValuePred); 
console.log(++startValuePred); 
console.log(startValuePred); 
console.log(++startValuePred); 
console.log(startValuePred); 

console.log("value--");
let finishValue = 3;
let finishValuePred =3;

console.log(finishValue);  //3
console.log(finishValue--);  //3
console.log(finishValue);  //2
console.log(finishValue--);  //2 
console.log(finishValue);  //1

console.log("--value");
console.log(finishValuePred); //3
console.log(--finishValuePred); //2
console.log(finishValuePred); //2
console.log(--finishValuePred); //1
console.log(finishValuePred); //1

let myValue = 3;
myValue = myValue +3;
console.log('My value:', myValue);
// myValue +=3;
// myValue -=3;
// myValue *=3;
// myValue /=3;






