/*
1. Створіть 2 інпути та одну кнопку. Зробіть так, щоб інпути обмінювалися вмістом.
2. Створіть 5 див на сторінці потім використовуючи getElementsByTagName і forEath поміняйте дивам колір тла.
3. Cтворіть багаторядкове поле для введення тексту та кнопки. Після натискання кнопки користувачем програма повинна згенерувати тег div з текстом, який був у багаторядковому полі. багаторядкове поле слід очистити після переміщення інформації
4. Створіть картинку та кнопку з назвою "Змінити картинку" зробіть так щоб при завантаженні сторінки була картинка https://itproger.com/img/courses/1476977240.jpg При натисканні на кнопку вперше картинка замінилася на https://itproger.com/img/courses/1476977488.jpg при другому натисканні щоб картинка замінилася на https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png
5. Створює на сторінці 10 парахрафів і зробіть так, щоб при натисканні на параграф він зникав
6. Попрацювати з файлом 08
*/

//1. Створіть 2 інпути та одну кнопку. Зробіть так, щоб інпути обмінювалися вмістом.
const inputOne = document.createElement("input");
const inputTwo = document.createElement("input");
inputOne.placeholder = "Текст 1"
inputTwo.placeholder = "Текст 2"
const btn = document.createElement("button");
btn.innerText = "Поміняти текст місцями";
btn.classList.add("buttonFirst")
const taskOne = document.querySelector("#taskOne");
taskOne.after(inputOne, inputTwo, btn)

btn.onclick = () => {
    const firstText = inputOne.value
    inputOne.value = inputTwo.value
    inputTwo.value = firstText
}

//2. Створіть 5 див на сторінці потім використовуючи getElementsByTagName і forEath поміняйте дивам колір тла.
window.onload = () => {
    const [...el] = document.getElementsByTagName("div");
    el.forEach((el) => {
        el.style.background = "rgb(84, 137, 235)"
    })
}

//3. Cтворіть багаторядкове поле для введення тексту та кнопки. 
//Після натискання кнопки користувачем програма повинна згенерувати тег div з текстом, 
//який був у багаторядковому полі. багаторядкове поле слід очистити після переміщення інформації
const textarea = document.createElement("textarea");
textarea.placeholder = "Введіть текст"
textarea.rows = 5
textarea.cols = 72
taskThree.after(textarea)
const btnTwo = document.createElement("button");
btnTwo.innerText = "Створити дів з введеним текстом";

textarea.after(btnTwo)

btnTwo.onclick = () => {
    const createDiv = document.createElement("div");
    createDiv.innerText = textarea.value;
    createDiv.id = "divTaskThree"
    createDiv.style.width = "100%"
    btnTwo.after(createDiv)
    textarea.value = null
}

//4. Створіть картинку та кнопку з назвою "Змінити картинку", зробіть так щоб при натиску кнопки картинки мінялись

const pictures = ["https://itproger.com/img/courses/1621164792.jpg", "https://itproger.com/img/courses/1675418421.jpg", "https://itproger.com/img/courses/1677920545.jpg"]

const image = document.createElement("img");
image.alt = "image"
image.src = pictures[0]
taskFour.after(image)
const btnThree = document.createElement("button");
btnThree.innerText = "Змінити картинку";
btnThree.classList.add("firstImg")
image.after(btnThree)

let counterImg = 0;
let click = document.querySelector(".firstImg").onclick = () => {
    image.src = pictures[++counterImg];
    if (counterImg === 2) {
        counterImg = -1
       }
}

// 5. Створює на сторінці 10 парахрафів і зробіть так, щоб при натисканні на параграф він зникав
function createP() {
    for (i = 0; i < 10; i++) {
        const paragraph = document.createElement("p");
        paragraph.innerText = `#${i + 1}`
        document.querySelector(".paragraphs").append(paragraph);
        paragraph.onclick = function () {
            paragraph.remove()
        }
    }
}
createP()

// 6. Попрацювати з файлом 08
let currentItem;

function selectFirstChild() {
    let chosenItem
    if (currentItem == undefined) {
        chosenItem = document.querySelector("ul").firstElementChild
        chosenItem.style.background = "rgb(84, 137, 235)"
        return currentItem = chosenItem;
    }
    else {
        chosenItem = currentItem
        chosenItem.style.background = "rgb(209, 209, 226)"
        chosenItem = document.querySelector("ul").firstElementChild
        chosenItem.style.background = "rgb(84, 137, 235)"
        return currentItem = chosenItem;
    }
}

function selectLastChild() {
    let chosenItem = currentItem
    if (currentItem == undefined) {
        chosenItem = document.querySelector("ul").lastElementChild
        chosenItem.style.background = "rgb(84, 137, 235)"
        return currentItem = chosenItem;
    }
    else {
        chosenItem.style.background = "rgb(209, 209, 226)"
        chosenItem = document.querySelector("ul").lastElementChild
        chosenItem.style.background = "rgb(84, 137, 235)"
        return currentItem = chosenItem;
    }
}
function selectNextNode() {
    let chosenItem;
    if (currentItem == document.querySelector("ul").lastElementChild) {
        chosenItem = currentItem;
        chosenItem.style.background = "rgb(209, 209, 226)"
        chosenItem = document.querySelector("ul").firstElementChild
        chosenItem.style.background = "rgb(84, 137, 235)"
        return currentItem = chosenItem;

    }
    else if (currentItem == undefined) {
        chosenItem = currentItem;
        chosenItem = document.querySelector("ul").firstElementChild
        chosenItem.style.background = "rgb(84, 137, 235)"
        return currentItem = chosenItem;
    }
    else {
        chosenItem = currentItem;
        chosenItem.style.background = "rgb(209, 209, 226)"
        chosenItem = chosenItem.nextElementSibling;
        chosenItem.style.background = "rgb(84, 137, 235)"
        currentItem = chosenItem;
        return currentItem = chosenItem;
    }
}
function selectPrevNode() {
    let chosenItem;
    if (currentItem == document.querySelector("ul").firstElementChild) {
        chosenItem = currentItem;
        chosenItem.style.background = "rgb(209, 209, 226)"
        chosenItem = document.querySelector("ul").lastElementChild
        chosenItem.style.background = "rgb(84, 137, 235)"
        return currentItem = chosenItem;

    }
    else if (currentItem == undefined) {
        chosenItem = currentItem;
        chosenItem = document.querySelector("ul").lastElementChild
        chosenItem.style.background = "red"
        return currentItem = chosenItem;
    }

    else {
        chosenItem = currentItem;
        chosenItem.style.background = "rgb(209, 209, 226)"
        chosenItem = chosenItem.previousElementSibling;
        chosenItem.style.background = "rgb(84, 137, 235)"
        currentItem = chosenItem;
        return currentItem = chosenItem;
    }
}
let counterAfter = 5;
function createNewChild() {
    const list = document.getElementById("list")
    const newItem = document.createElement("li");
    newItem.textContent = `New Item ${++counterAfter}`;

    list.append(newItem)
}

let counterBefore = 1;
function createNewChildAtStart() {
    const list = document.getElementById("list")
    const newItem = document.createElement("li");
    newItem.textContent = `New Item ${--counterBefore}`;
    list.prepend(newItem)
}

function removeLastChild() {
    const removeItem = document.querySelector("ul").lastElementChild
    removeItem.remove()
}
