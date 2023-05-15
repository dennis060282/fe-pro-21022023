/*
Реалізуйте програму перевірки телефону

* Використовуючи JS Створіть поле для введення телефону та кнопку збереження
* Користувач повинен ввести номер телефону у форматі 0(Початок з 0)ХХ-ХХХ-ХХ-ХХ
* Після того як користувач натискає кнопку зберегти перевірте правильність введення номера, якщо номер правильний зробіть зелене тло і використовуючи document.location переведіть через 3с користувача на сторінку https://risovach.ru/upload/2013/03/mem/toni-stark_13447470_big_.jpeg якщо буде помилка, відобразіть її в діві до input.
*/
const task2 =  document.createElement('div');
task2.id = 'task2';
container.after(task2);

const phone = document.createElement('input');
phone.placeholder = `0XX-XXX-XX-XX`;
phone.id = 'phone';
phone.classList.add('container-stopwatch', 'silver')
task2.prepend(phone);

const task2Button = document.createElement('button');
task2Button.classList.add('red')
task2Button.innerText = 'Зберегти';
task2.append(task2Button);


const regexp = /^0\d{2}-\d{3}-\d{2}-\d{2}$/;

task2Button.addEventListener('click', () => {

    if(regexp.test(phone.value)){
        setTimeout(() => {
            document.location.href = 'https://risovach.ru/upload/2013/03/mem/toni-stark_13447470_big_.jpeg';
          }, 3000);
        task2.classList.add('green');
        if(document.getElementById('errorDiv')){
            const errorDiv = document.querySelector('#errorDiv');
            errorDiv.remove();
        }
    }
    else{
        if(document.getElementById('errorDiv')){
            const errorDiv = document.querySelector('#errorDiv');
            errorDiv.remove();
        }
        const errorDiv = document.createElement('div');
        errorDiv.classList.add('container-stopwatch', 'red');
        errorDiv.id = 'errorDiv';
        task2.append(errorDiv);
        errorDiv.innerText = `Ви ввели невірний формат номера телефону: ${phone.value}
        Введіть ваш номер телефону відповідно до зразка : 0XX-XXX-XX-XX`;
    }
});

