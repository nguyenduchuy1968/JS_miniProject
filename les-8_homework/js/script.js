'use strick';

// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

const users = [];
let user1 = new User(1, 'vasya', 'aaa', 'aaa@gmail.com', 56546436);
let user2 = new User(2, 'petya', 'aaa', 'aaa@gmail.com', 56546436);
let user3 = new User(3, 'kolya', 'aaa', 'aaa@gmail.com', 56546436);
let user4 = new User(4, 'max', 'aaa', 'aaa@gmail.com', 56546436);
let user5 = new User(5, 'anya', 'aaa', 'aaa@gmail.com', 56546436);
let user6 = new User(6, 'oleg', 'aaa', 'aaa@gmail.com', 56546436);
let user7 = new User(7, 'masha', 'aaa', 'aaa@gmail.com', 56546436);
let user8 = new User(8, 'olya', 'aaa', 'aaa@gmail.com', 56546436);
let user9 = new User(9, 'vasya', 'aaa', 'aaa@gmail.com', 56546436);
let user10 = new User(10, 'vasya', 'aaa', 'aaa@gmail.com', 56546436);

users.push(user1);
users.push(user2);
users.push(user3);
users.push(user4);
users.push(user5);
users.push(user6);
users.push(user7);
users.push(user8);
users.push(user9);
users.push(user10);

console.log(users);
console.log('----------------------------------------------');

//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
const filteredArr = users.filter(user => !(user.id % 2));
console.log('filteredArr :', filteredArr);
console.log('----------------------------------------------');

//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
const sortedArr = users.sort((user1, user2) => user1.id - user2.id);
console.log('sortedArr :', sortedArr);
console.log('----------------------------------------------');


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
//
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

const clients = [];
let client1 = new Client(1, 'vasya', 'aaa', 'aaa@gmail.com', 56546436, ['telephone', 'book', 'earphone',]);
let client2 = new Client(2, 'petya', 'aaa', 'aaa@gmail.com', 56546436, ['telephone', 'book', 'earphone', 'apples', 'juice', 'shoes']);
let client3 = new Client(3, 'kolya', 'aaa', 'aaa@gmail.com', 56546436, ['telephone', 'book']);
let client4 = new Client(4, 'max', 'aaa', 'aaa@gmail.com', 56546436, ['telephone', 'book', 'earphone', 'coatch']);
let client5 = new Client(5, 'anya', 'aaa', 'aaa@gmail.com', 56546436, ['telephone', 'book', 'earphone',]);
let client6 = new Client(6, 'oleg', 'aaa', 'aaa@gmail.com', 56546436, ['telephone', 'book', 'earphone',]);
let client7 = new Client(7, 'masha', 'aaa', 'aaa@gmail.com', 56546436, ['telephone', 'book', 'earphone', 'apples', 'juice']);
let client8 = new Client(8, 'olya', 'aaa', 'aaa@gmail.com', 56546436, ['telephone', 'book', 'earphone',]);
let client9 = new Client(9, 'vasya', 'aaa', 'aaa@gmail.com', 56546436, ['telephone']);
let client10 = new Client(10, 'vasya', 'aaa', 'aaa@gmail.com', 56546436, ['telephone', 'book', 'earphone',]);

clients.push(client1);
clients.push(client2);
clients.push(client3);
clients.push(client4);
clients.push(client5);
clients.push(client6);
clients.push(client7);
clients.push(client8);
clients.push(client9);
clients.push(client10);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
const sortedClients = clients.sort((client1, client2) => client1.order.length - client2.order.length);
console.log('sortedClients', sortedClients);
console.log('----------------------------------------------');

//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
function Car(model, manufacturer, make, maxSpeed, engineVolume) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.make = make;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${maxSpeed} на годину`);
    }

    this.info = function () {
        console.log(`model : ${model}, manufacturer : ${manufacturer}, make: ${make} year, maxSpeed : ${maxSpeed} km/h, engineVolume : ${engineVolume} litres`)
    }

    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = newSpeed;
    }

    this.changeYear = function (newValue) {
        this.make = newValue;
    }

    this.addDriver = function (driver) {
        this.driver = driver;
        console.log(this.driver);
    }
}

const car1 = new Car('SX1', 'BMW', 2020, 220, 3);
console.log(car1);
car1.drive();
car1.changeYear(2023);
console.log(car1.make);
car1.addDriver({driverName: 'Andriy', driverAge: 30, workExperience: 8});
console.log('----------------------------------------------');

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
class Car2 {
    constructor(model, manufacturer, make, maxSpeed, engineVolume) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.make = make;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    info2() {
        console.log(`model : ${this.model}, manufacturer : ${this.manufacturer}, make: ${this.make} year, maxSpeed : ${this.maxSpeed} km/h, engineVolume : ${this.engineVolume} litres`);
    }


    increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = newSpeed;
    }

    changeYear = function (newValue) {
        this.make = newValue;
    }

    addDriver = function (driver) {
        this.driver = driver;
        console.log(this.driver);
    }
}

const car2 = new Car2('DJ23', 'Audi', 2021, 250, 3.5);
console.log(car2);
car2.drive();
car2.addDriver({driverName: 'Vasyl', driverAge: 33, workExperience: 10});
console.log('----------------------------------------------');

//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


// Cinderela's Class
class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

// Creation empty arr for cinderelas
const cinderelaArr = [];

const cinderela1 =  new Cinderella('Cinderella1', 21, 11);
const cinderela2 =  new Cinderella('Cinderella2', 22, 12);
const cinderela3 =  new Cinderella('Cinderella3', 23, 13);
const cinderela4 =  new Cinderella('Cinderella4', 24, 14);
const cinderela5 =  new Cinderella('Cinderella5', 25, 15);
const cinderela6 =  new Cinderella('Cinderella6', 26, 16);
const cinderela7 =  new Cinderella('Cinderella7', 27, 17);
const cinderela8 =  new Cinderella('Cinderella8', 28, 18);
const cinderela9 =  new Cinderella('Cinderella9', 29, 19);
const cinderela10 =  new Cinderella('Cinderella10', 30, 20);

cinderelaArr.push(cinderela1);
cinderelaArr.push(cinderela2);
cinderelaArr.push(cinderela3);
cinderelaArr.push(cinderela4);
cinderelaArr.push(cinderela5);
cinderelaArr.push(cinderela6);
cinderelaArr.push(cinderela7);
cinderelaArr.push(cinderela8);
cinderelaArr.push(cinderela9);
cinderelaArr.push(cinderela10);

console.log(cinderelaArr);

// Prince's class extends class Cinderella
class Prince extends Cinderella {
    constructor(name, age, footSize) {
        super(name, age, footSize);
        this.foundedShoe = footSize;
    }
}

// Creation instance of class Prince
const prince = new Prince('White Prince', 25, 12);
console.log('Prince : ', prince);


for (const cinderela of cinderelaArr) {
    if (cinderela.footSize === prince.foundedShoe) {
        console.log(`${prince.name} found ${cinderela.name} with footSize : ${cinderela.footSize} (using "for ... of")`);
    }
}

const mainCinderela = cinderelaArr.find(cinderela => cinderela.footSize === prince.foundedShoe);
console.log(`${prince.name} found ${mainCinderela.name} with footSize : ${mainCinderela.footSize} (using "find")`);
