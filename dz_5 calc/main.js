function getInformation(checkSign, show) {
    const operand1 = parseFloat(prompt("Введите первое число"));
    const operand2 = parseFloat(prompt("Введите второе число"));
    const sign = prompt("Введите знак", "+ - * /");

    show(checkSign(operand1, operand2, sign));
}

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => {
    if (b === 0) {
        console.error(`На ноль делить нельзя!`);
    } else {
        a / b;
    }
}

function checkSign(a, b, s) {
    switch (s) {
        case `+`: return add(a, b);
        case `-`: return sub(a, b);
        case `*`: return mul(a, b);
        case `/`: return div(a, b);
        default: console.error(`Значение ${s} не является знаком операции!`)
    }
}

const show = (checkSign) => {
    if (checkSign === undefined) {
        document.write(`Ошибка!`)
    } else {
        document.write(`Результат вашей операции число: ${checkSign}`);
    }
}

getInformation(checkSign, show);
