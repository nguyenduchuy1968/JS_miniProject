// 1 - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log

console.log('------------ Homework 1.1 --------------');
let greeting = "Hello";
console.log(greeting);
// ---------------------------------------------
let nameSchool = "owu";
console.log(nameSchool);
// ---------------------------------------------
let domain = "com";
console.log(domain);
// ---------------------------------------------
let country = "ua";
console.log(country);
// ---------------------------------------------
let number_1 = 1;
console.log(number_1);
// ---------------------------------------------
let number_2 = 10;
console.log(number_2);
// ---------------------------------------------
let numberMinus = -999;
console.log(numberMinus);
// ---------------------------------------------
let number_3 = 123;
console.log(number_3);
// ---------------------------------------------
const PI = 3.;
console.log(PI);
// ---------------------------------------------
let number_4 = 2.7;
console.log(number_4);
// ---------------------------------------------
let number_5 = 16;
console.log(number_5);
// ---------------------------------------------
let isLifeGood = true;
console.log(isLifeGood);
// ---------------------------------------------
let isRusniaKind = false;
console.log(isRusniaKind);

// -----------------------------------------------------------------------------------------------------------------

// 2- Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person //(Не об'єкт, просто за допомоги конкатенації)

console.log('------------ Homework 1.2 --------------');

let firstName = 'Nguyen';
let middleName = 'Duc';
let lastName = 'Huy';

person_1 = `${firstName} ${middleName} ${lastName}`;
console.log(person_1);

person_2 = firstName.concat(' ', middleName).concat(' ', lastName);
console.log(person_2);

// -----------------------------------------------------------------------------------------------------------------

// 3- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

console.log('------------ Homework 1.3 --------------')

let a = 100;
console.log(typeof (a));

let b = 100;
console.log(typeof (b));

let c = true;
console.log(typeof (c));

// 4- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести
// в консоль

console.log('------------ Homework 1.4 --------------')

firstName = prompt('Enter your firstname:   ');
middleName = prompt('Enter your middleName:   ');
lastName = prompt('Enter your lastName:   ');
fullName = `${firstName} ${middleName} ${lastName}`;
console.log(fullName);