/*
- При завантаженні сторінки показати користувачеві поле введення (`input`) з написом `Price`. Це поле буде служити для введення числових значень
- Поведінка поля має бути такою:
- При фокусі на полі введення – у нього має з'явитися рамка зеленого кольору. При втраті фокусу вона пропадає.
- Коли забрали фокус з поля - його значення зчитується, над полем створюється `span`, в якому має бути виведений текст: 
. 
Поруч із ним має бути кнопка з хрестиком (`X`). Значення всередині поля введення фарбується зеленим.
- При натисканні на `Х` - `span` з текстом та кнопка `X` повинні бути видалені.
- Якщо користувач ввів число менше 0 - при втраті фокусу підсвічувати поле введення червоною рамкою, 
під полем виводити фразу - `Please enter correct price`. `span` зі значенням при цьому не створюється.
*/
const input = document.querySelector(`input`);
const span = document.createElement(`span`);
const btn = document.createElement(`button`)

input.addEventListener("focus", (ev) => {
    span.remove();
    ev.target.className = "";
    ev.target.classList.add("focus");
    ev.target.value = ``;
})

input.addEventListener("change", (ev) => {
    ev.target.className = "";
    if(/^(0|[1-9]\d*)(\.[0-9]{1,})?$/.test(ev.target.value)){
        ev.target.classList.add("valid")
        span.textContent = ev.target.value;
        btn.textContent = `X`;
        ev.target.parentNode.before(span, btn);
    }else{
        ev.target.classList.add("error");
        ev.target.parentNode.after(span);
        span.textContent = `Please enter correct price`;
    } 
})

btn.addEventListener(`click`, (ev) => {
    span.remove();
    ev.target.remove();
    input.value = ``;
})

