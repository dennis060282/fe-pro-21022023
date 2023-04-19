/*
Створити клас Car , Engine та Driver.
Клас Driver містить поля - ПІБ, стаж водіння.
Клас Engine містить поля – потужність, виробник.
Клас Car містить поля – марка автомобіля, клас автомобіля, вага, водій типу Driver, мотор типу Engine. Методи start(), stop(), turnRight(), turnLeft(), які виводять на друк: "Поїхали", "Зупиняємося", "Поворот праворуч" або "Поворот ліворуч". А також метод toString(), який виводить повну інформацію про автомобіль, її водія і двигуна.

Створити похідний від Car клас - Lorry (вантажівка), що характеризується також вантажопідйомністю кузова.
Створити похідний від Car клас - SportCar, який також характеризується граничною швидкістю.
*/



//Створити клас Car
//Клас Car містить поля – марка автомобіля, клас автомобіля, вага, водій типу Driver, мотор типу Engine. Методи start(), stop(), turnRight(), turnLeft(), які виводять на друк: "Поїхали", "Зупиняємося", "Поворот праворуч" або "Поворот ліворуч". А також метод toString(), який виводить повну інформацію про автомобіль, її водія і двигуна.
class Car{
    constructor(carBrand, carClass, carWeight, carDriver, carEngine){
        this.carBrand = carBrand,
        this.carClass = carClass,
        this.carWeight = carWeight,
        this.carDriver = carDriver,
        this.carEngine = carEngine
    };
    start(){
        console.log('Поїхали')
    };
    stop(){
        console.log('Зупиняємося')
    };
    turnRight(){
        console.log('Поворот праворуч')
    };
    turnLeft(){
        console.log('Поворот ліворуч')
    };
    toString(){
        console.log(`
    Автомобіль: ${this.carBrand}, 
    Клас: ${this.carClass}, 
    Вага: ${this.carWeight}кг., 
    Водій: ${this.carDriver.fullName}, стаж водіння ${this.carDriver.drivingExperience} років,
    Двигун: потужністю: ${this.carEngine.enginePower} к.с., вироблений: ${this.carEngine.engineProdused}.
    `)
    }
}

//  Клас Driver містить поля - ПІБ, стаж водіння.
class Driver {
    constructor(fullName, drivingExperience){
        this.fullName = fullName,
        this.drivingExperience = drivingExperience
    }
};

//  Клас Engine містить поля – потужність, виробник.
class Engine{
    constructor(enginePower, engineProdused){
        this.enginePower = enginePower,
        this.engineProdused = engineProdused
    }
};

//  Створити похідний від Car клас - Lorry (вантажівка), що характеризується також вантажопідйомністю кузова.
class Lorry extends Car{
    constructor(carBrand, carClass, carWeight, carDriver, carEngine, carryingCapacity){
    super(carBrand, carClass, carWeight, carDriver, carEngine),
    this.carryingCapacity = carryingCapacity
    }
    //перевизначив метод to string(), щоб він виводив ще один параметр - вантажопідйомність.
    toString(){
        console.log(`
    Автомобіль: ${this.carBrand}, 
    Клас: ${this.carClass}, 
    Вага: ${this.carWeight}кг., 
    Водій: ${this.carDriver.fullName}, стаж водіння ${this.carDriver.drivingExperience} років,
    Двигун: потужністю: ${this.carEngine.enginePower} к.с., вироблений: ${this.carEngine.engineProdused},
    Вантажопідйомність ${this.carryingCapacity} кг.
    `)
    }
}

//  Створити похідний від Car клас - SportCar, який також характеризується граничною швидкістю.
class SportCar extends Car{
    constructor(carBrand, carClass, carWeight, carDriver, carEngine, speedLimit){
    super(carBrand, carClass, carWeight, carDriver, carEngine),
    this.speedLimit = speedLimit
    }
    //перевизначив метод to string(), щоб він виводив ще один параметр - максимальна швидкість.
    toString(){
        console.log(`
    Автомобіль: ${this.carBrand}, 
    Клас: ${this.carClass}, 
    Вага: ${this.carWeight}кг., 
    Водій: ${this.carDriver.fullName}, стаж водіння ${this.carDriver.drivingExperience} років,
    Двигун: потужністю: ${this.carEngine.enginePower} к.с., вироблений: ${this.carEngine.engineProdused},
    Максимальна швидкість ${this.speedLimit} км на год.
    `)
    }
}


//  Прототипи

//  Прототипи класу Driver
const bmwDriver = new Driver('Коваленко Юрій Євгенович', 22);
const toyotaDriver = new Driver('Суслов Максим Юрійович', 27);

const fordDriver = new Driver('Тюрін Дмитро Андрійович', 33);
const ivecoDriver = new Driver('Войтов Володимир Анатолійович', 38)

//  Прототипи класу Engine

const bmwEngine = new Engine(500, 'Bmw');
const toyotaEngine = new Engine(550, 'Toyota');

const fordEngine = new Engine(350, 'Ford');
const ivecoEngine = new Engine(330, 'Iveco');

//  Протоотипи класу Car
const car1 = new Car('Bmw', 'sportcar', 1500, bmwDriver, bmwEngine);

const car3 = new Car('Ford', 'lorry', 5000, fordDriver, fordEngine, 20000)

// Прототипи класу Lorry
const lorry1 = new Lorry(car3.carBrand, car3.carClass, car3.carWeight, car3.carDriver, car3.carEngine, 20000);
const lorry2 = new Lorry('Iveco', 'lorry', 4800, ivecoDriver, ivecoEngine, 19000);

// Прототипи класу SportCar
const SportCar1 = new SportCar(car1.carBrand, car1.carClass, car1.carWeight, car1.carDriver, car1.carEngine, 280);
const SportCar2 = new SportCar('Toyota', 'sportcar', 1800, toyotaDriver, toyotaEngine, 305);



//

console.log(bmwDriver)
console.log(toyotaEngine)


car1.toString()
car3.toString()


lorry1.toString()
lorry2.toString()


SportCar1.toString()
SportCar2.toString()
