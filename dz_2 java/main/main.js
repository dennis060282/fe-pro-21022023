// Задание 1. Геометрические фигуры 

document.write("<h1>ГЕОМЕТРИЧЕСКИЕ ФИГУРЫ</h1>");

document.write("<h2>ПРЯМОУГОЛЬНИК</h2>");

for(counter = 0; counter < 15; counter++) {

    for(i = 0; i < 45; i++) {
        document.write(" *");
    }

    document.write("<br>");
}

document.write("<h3>ПРЯМОУГОЛЬНЫЙ ТРЕУГОЛЬНИК</h3>");

for (counter = 0; counter < 25; counter++) {
    for(i = (25 - counter); i < 25; i++) {
        document.write(" *")
    }

    document.write("<br>");
}

document.write("<h4>РАВНОСТОРОННИЙ ТРЕУГОЛЬНИК</h4>");

for(counter = 0; counter < 30; counter++) {

    for(i = (30 - counter); i < 30; i++) {
        document.write("<div> </div>");
    }

    for (i = (30 - counter); i < 30; i++) {
        document.write(" *");
    }

    document.write("<br>")
}

document.write("<h5>РОМБ</h5>");

for(counter = 0; counter < 25; counter++) {

    for(i = (0 + counter); i < 25; i++ ) {
        document.write("<div> </div>");
    }

    for(i = (25 - counter); i < 25; i++) {
        document.write(" *");
    }

    document.write("<br>")
}

for (counter = 0; counter < 25; counter++) {
    for(i = (25 - counter); i < 25; i++ ) {
        document.write("<div> </div>");
    }

    for(i = (0 + counter); i < 24; i++) {
        document.write(" *");
    }
}

// Задание 2. Переписать с оператора if на тернарный оператор(?)

document.write("<h1>ПЕРЕВОД С ОПЕРАТОРА IF НА ТЕРНАРНЫЙ ОПЕРАТОР</h1>");

// ex. #1

document.write("<h2>Задание №1. a + b < 4 ?</h2>");

let a = 1;
let b = 1;

let res = a + b < 4 ? "мало" : "много";

document.write(`<h4>Пример 1(если a + b = 2): ${res}</h4>`);

a = 2;
b = 3;

res = a + b < 4 ? "мало" : "много";

document.write(`<h4>Пример 2(если a + b = 5): ${res}</h4>`);

// ex. #2

document.write("<h2>Задание №2. LOGIN</h2>");

let message;
let login = "Директор";

message = (login == "Вася") ? "Привет!" : (login == "Директор") ? "Здравствуйте!" : (login == "") ? "Нет логина!" : "Неверный логин!"; 

document.write(`<h3>Если логин Директор: ${message}</h3>`);

message;
login = "Вася";

message = (login == "Вася") ? "Привет!" : (login == "Директор") ? "Здравствуйте!" : (login == "") ? "Нет логина!" : "Неверный логин!"; 

document.write(`<h2>Если логин Вася: ${message}</h2>`);

message;
login = "";

message = (login == "Вася") ? "Привет!" : (login == "Директор") ? "Здравствуйте!" : (login == "") ? "Нет логина!" : "Неверный логин!"; 

document.write(`<h3>Если логина нет, пустое поле: ${message}</h3>`);

message;
login = "Петя";

message = (login == "Вася") ? "Привет!" : (login == "Директор") ? "Здравствуйте!" : (login == "") ? "Нет логина!" : "Неверный логин!"; 

document.write(`<h2>Если введённого логина не существует: ${message}</h2>`);
