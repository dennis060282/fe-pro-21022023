/*
Створити клас Animal та розширюючі його класи Dog, Cat, Horse.
Клас Animal містить змінні food, location та методи makeNoise, eat, sleep. Метод makeNoise, 
наприклад, може виводити на консоль "Така тварина спить".
Dog, Cat, Horse перевизначають методи makeNoise, eat.
Додайте змінні до класів Dog, Cat, Horse, що характеризують лише цих тварин.
Створіть клас Ветеринар, у якому визначте метод void (Нічого не повертає), treatAnimal(Animal animal). 
Нехай цей метод роздруковує food і location тварини, що прийшла на прийом.
У методі main створіть масив типу Animal, в який запишіть тварин всіх типів, що є у вас. У циклі надсилайте їх на прийом до ветеринара.
*/

/* Конструктор Animal*/
function Animal(typeOfAnimal, food, location) {
    this.typeOfAnimal = typeOfAnimal;
    this.food = food;
    this.location = location;
}
Animal.prototype.makeNoise = function () {
    console.log(`Your pet is sleep`)
}

Animal.prototype.eat = function () {
    console.log(`Your pet should eat 3 times a day`)
}

Animal.prototype.sleep = function () {
    console.log(`Your pet likes sleep`)
}


/* Конструктор Dog*/
function Dog(typeOfAnimal, food, location, favouriteToy) {
    this.typeOfAnimal = typeOfAnimal;
    this.food = food;
    this.location = location;
    this.favouriteToy = favouriteToy;
}
Dog.prototype = new Animal();
Dog.prototype.makeNoise = function () { console.log(`Your dog is sleep`) };
Dog.prototype.eat = function () { console.log(`Your dog should eat pet food instead of his favourite ${this.favouriteToy}`) };


/* Конструктор Cat*/
function Cat(typeOfAnimal, food, location, typeOfFur) {
    this.typeOfAnimal = typeOfAnimal;
    this.food = food;
    this.location = location;
    this.typeOfFur = typeOfFur;
}
Cat.prototype = new Animal()
Cat.prototype.makeNoise = function () { console.log(`Your cat is sleep`) }
Cat.prototype.eat = function () { console.log(`Your cat likes cakes as well as fish`) }


/* Конструктор Horse*/
function Horse(typeOfAnimal, food, location, colour) {
    this.typeOfAnimal = typeOfAnimal;
    this.food = food;
    this.location = location;
    this.colour = colour;
}
Horse.prototype = new Animal()
Horse.prototype.makeNoise = function () { console.log(`Your horse is sleep`) }
Horse.prototype.eat = function () { console.log(`Your horse likes to eat apple`) }


const cat = new Cat("Cat", "fish", "outdoor", "smooth");
const dog = new Dog("Dog", "meat", "indoor", "bone");
const horse = new Horse("Horse", "apple", "field", "white")


/* Конструктор Veterinar*/
function Veterinar() { };
Veterinar.prototype.void = function () { };
Veterinar.prototype.treatAnimal = function (animal) {
    return(`Patient: ${animal.typeOfAnimal}; Food: ${animal.food}; Location: ${animal.location} `)
}
const clinic = new Veterinar();


/* Метод main*/
function main() {
    const animalArray = [cat, dog, horse];
    animalArray.forEach(element =>
        document.write(`${element.typeOfAnimal} is at the reception. <br> ${clinic.treatAnimal(element)}. <br><br>`))
}
main()

