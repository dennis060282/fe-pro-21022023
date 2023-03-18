/* Напишіть функцію map(fn, array), яка приймає на вхід функцію та масив, 
та обробляє кожен елемент масиву цією функцією, повертаючи новий масив.*/

let arr = [1, 6, 10, 34, 80, 77, 20, 19, 60, 70];

function roundNumber(number) {
   let newArr = [];
    for (let i = 0; i <= arr.length; i++) {
        if (number[i] % 10 === 0) {
            newArr.push(number[i]);
        }
    }
    document.write("Круглі числа: " + newArr);
}

function map(fn, array) {
    return fn(array);
}

map(roundNumber, arr)