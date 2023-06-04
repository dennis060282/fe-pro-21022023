/*
1. 
Прив'яжіть усім інпутам наступну подію - втрата фокусу кожен інпут виводить своє value в параграф з id="test"

2.
Дано інпути. Зробіть так, щоб усі інпути втрати фокусу перевіряли свій вміст на правильну кількість символів. Скільки символів має бути в інпуті, зазначається в атрибуті data-length. Якщо вбито правильну кількість, то межа інпуту стає зеленою, якщо неправильна – червоною.

3.
Використовуючи бібліотеку bootstrap створіть форму у якій запитати у користувача данні.
Ім'я, Прізвище (Українською)
Список з містами України 
Номер телефону у форматі +380XX XXX XX XX - (Визначити код оператора та підтягувати логотип оператора. додатковл) 
Пошта 
Якщо поле має помилку показати червоний хрестик  біля поля ❌,  якщо помилки немає показати зелену галочку ✅
Перевіряти данні на етапі втрати фокуса та коли йде натискання кнопки відправити дані 

4.
- При завантаженні сторінки показати користувачеві поле введення (`input`) з написом `Price`. Це поле буде служити для введення числових значень
- Поведінка поля має бути такою:
- При фокусі на полі введення – у нього має з'явитися рамка зеленого кольору. При втраті фокусу вона пропадає.
- Коли забрали фокус з поля - його значення зчитується, над полем створюється `span`, в якому має бути виведений текст. 
- Поруч із ним має бути кнопка з хрестиком (`X`). Значення всередині поля введення фарбується зеленим.
- При натисканні на `Х` - `span` з текстом та кнопка `X` повинні бути видалені.
- Якщо користувач ввів число менше 0 - при втраті фокусу підсвічувати поле введення червоною рамкою, 
під полем виводити фразу - `Please enter correct price`. `span` зі значенням при цьому не створюється.
*/

//task 1
//Прив'яжіть усім інпутам наступну подію - втрата фокусу кожен інпут виводить 
//своє value в параграф з id="test"
//task 2
// Дано інпути. Зробіть так, щоб усі інпути втрати фокусу перевіряли свій вміст на правильну кількість символів.
//Скільки символів має бути в інпуті, зазначається в атрибуті data-length.
//Якщо вбито правильну кількість, то межа інпуту стає зеленою, якщо неправильна – червоною.

const p_test = document.querySelector("#test");
const [...t1_inputs] = document.querySelectorAll("#task_1 input");

function bordeColor(elem, state) {
  if (state) {
    elem.classList.remove("red-border");
    elem.classList.add("green-border");
  }
  else {
    elem.classList.remove("green-border");
    elem.classList.add("red-border");
  }
}

t1_inputs.forEach((element) => {
  element.addEventListener("blur", (e) => {
    if (Number(e.target.dataset.length) >= e.target.value.length) {
      bordeColor(element, true);
    }
    else {
      bordeColor(element, false);
    }
    p_test.innerText = e.target.value;
  });
});

/*
//task 2
Ім'я, Прізвище (Українською)
Список з містами України 
Номер телефону у форматі +380XX XXX XX XX - (Визначити код оператора та підтягувати логотип оператора. додатковл) 
Пошта 
Якщо поле має помилку показати червоний хрестик  біля поля ❌,  якщо помилки немає показати зелену галочку ✅

Перевіряти данні на етапі втрати фокуса та коли йде натискання кнопки відправити дані
*/

const userName = document.querySelector("#user-name");
const userSurname = document.querySelector("#user-surname");
const userEmail = document.querySelector("#user-email");
const userCity = document.querySelector("#user-city");
const btn = document.querySelector("#btn");

const [...t3_inputs] = document.querySelectorAll('#task_2 input, #task_2 select');

function picValidationShow(elem, state) {
  if (!elem.nextSibling) {
    const span = document.createElement('span');
    span.classList.add('validation-pic');
    elem.after(span);
  }
  if (state) {
    elem.nextSibling.innerText = "✅";
  }
  else {
    elem.nextSibling.innerText = "❌";
    return;
  }
}

function patternValidation(pattern, element) {
  if (pattern.test(element.value)) {
    bordeColor(element, true);
    picValidationShow(element, true);
  } else {
    bordeColor(element, false);
    picValidationShow(element, false);
  }
}

function picCreation(element, url) {
  if (element.parentElement.lastChild.tagName === 'IMG') {
    element.parentElement.lastChild.src = url;
    return
  }
  const img = document.createElement('img');
  img.classList.add('operator-pic');
  img.src = url;
  element.nextSibling.after(img);
}

function operatorDefine(element) {
  if (!element.classList.contains('green-border')) { return }
  let link;
  const code = element.value;
  if (code.includes('+38067') || code.includes('+38097') || code.includes('+38068') || code.includes('+38039')) {
    link = 'https://kyivstar.ua/assets/cms/uploads/kyivstar_logo_full_d905270219.svg';
    picCreation(element, link);
  }
  else if (code.includes('+38063') || code.includes('+38093') || code.includes('+38073') || code.includes('+38091') || code.includes('+38092')) {
    link = 'https://www.lifecell.ua/images/logo.svg';
    picCreation(element, link);
  }
  else if (code.includes('+38050') || code.includes('+38066') || code.includes('+38095') || code.includes('+38099')) {
    link = 'https://www.vodafone.ua/svg/logo.svg';
    picCreation(element, link);
  }
  else {
    link = '';
    picCreation(element, link);
  }
}

function t3_Validation(elem) {
  let p;
  switch (elem.id) {
    case ("user-name"):
    case ("user-surname"):
      p = /^[а-яіґєї]{2,}$/i;
      patternValidation(p, elem);
      break;
    case ("user-email"):
      p = /^[a-z0-9_.]{3,}@[a-z.0-9]{2,}\.[a-z.]{2,10}$/i;
      patternValidation(p, elem);
      break;
    case ("user-phone"):
      p = /^[\+]380\d{2}-\d{3}-\d{2}-\d{2}$/i;
      patternValidation(p, elem);
      operatorDefine(elem);
      break;
    case ("user-city"):
      p = /^(?!.*(Оберіть Ваше місто))/gi;
      patternValidation(p, elem);
      break;
  }
}

function buttonSubmit() {
  let submit = true;
  t3_inputs.forEach((element) => {
    t3_Validation(element);
    if (!element.classList.contains('green-border') && !(element.id === 'btn')) {
      submit = false;
    }
  });
  if (submit) { alert('Data send to server'); }
}

t3_inputs.forEach((element) => {
  if (element.id === "btn") {
    element.addEventListener('click', (ev) => {
      buttonSubmit();
    });
  }
  else {
    element.addEventListener('change', (ev) => {
      t3_Validation(ev.target);
    });
  }
});

/*
4.
- При завантаженні сторінки показати користувачеві поле введення (`input`) з написом `Price`. 
- Це поле буде служити для введення числових значень
- Поведінка поля має бути такою:
- При фокусі на полі введення – у нього має з'явитися рамка зеленого кольору. При втраті фокусу вона пропадає.
- Коли забрали фокус з поля - його значення зчитується, над полем створюється `span`, в якому має бути виведений текст.
- Поруч із ним має бути кнопка з хрестиком (`X`). Значення всередині поля введення фарбується зеленим.
- При натисканні на `Х` - `span` з текстом та кнопка `X` повинні бути видалені.
- Якщо користувач ввів число менше 0 - при втраті фокусу підсвічувати поле введення червоною рамкою, 
під полем виводити фразу - `Please enter correct price`. `span` зі значенням при цьому не створюється.
*/

const t4_input = document.querySelector('#user-input > input');
const task4 = document.querySelector('#task4');
task4.addEventListener('click', (e) => {
  if (e.target.innerText === "❌") {
    e.target.previousElementSibling.remove();
    e.target.remove();
  }
});

function createSpan(elem, val) {
  const span = document.createElement('span');
  elem.append(span);
  span.innerText = val;
}

function topSpanAdd(val) {
  const upperDiv = t4_input.parentElement.previousElementSibling;
  if (!(upperDiv.firstChild === null)) {
    upperDiv.firstChild.innerText = val;
    return;
  }
  createSpan(upperDiv, val);
  createSpan(upperDiv, "❌");
}

function bottomSpanContent(val) {
  const lowerDiv = t4_input.parentElement.nextElementSibling;
  lowerDiv.innerText = val;
  return;
}

t4_input.addEventListener('focus', (e) => {
  e.target.classList.add('green-border', 'green-outline');
});
t4_input.addEventListener('blur', (e) => {
  e.target.classList.remove('green-border', 'green-outline');
  if (e.target.value === '') {
    e.target.classList.remove('red-border');
    return;
  }
  if (Number(e.target.value) >= 0) {
    e.target.classList.remove('red-border');
    bottomSpanContent("");
    topSpanAdd(e.target.value);
  }
  else {
    e.target.classList.add('red-border');
    bottomSpanContent("Please enter correct price");
  }
});
