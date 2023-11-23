console.log('----------------- Task 1 ------------------');
// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr1 = ['hello', 123, true, false, {name: 'Max', age: 28}, 'Javascript', -254,
                                        [965, -457, 580], 'Good morning', [true, false]];
console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);
console.log(arr1[3]);
console.log(arr1[4]['name']);
console.log(arr1[4]['age']);
console.log(arr1[5]);
console.log(arr1[6]);
console.log(arr1[7][0]);
console.log(arr1[7][1]);
console.log(arr1[7][2]);
console.log(arr1[8]);
console.log(arr1[9][0]);
console.log(arr1[9][1]);

// --------------------------------------------------------------------------------

console.log('----------------- Task 2 ------------------');

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title: 'The lost life',
    pageCount: 210,
    genre: 'tragedy'
}

let book2 = {
    title: 'The war game',
    pageCount: 350,
    genre: 'comedy'
}

let book3 = {
    title: 'Yesterday',
    pageCount: 350,
    genre: 'drama'
}
// --------------------------------------------------------------------------------

console.log('----------------- Task 3 ------------------');
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let newBook1 = {
    title: 'The lost life',
    pageCount: 210,
    genre: 'tragedy',
    authors: [{name: 'Jame', age: 35}]
}

let newBook2 = {
    title: 'The war game',
    pageCount: 350,
    genre: 'comedy',
    authors: [{name: 'Mike', age: 28}]
}

let newBook3 = {
    title: 'Yesterday',
    pageCount: 350,
    genre: 'drama',
    authors: [{name: 'Lucie', age: 33}]
}

// --------------------------------------------------------------------------------

console.log('----------------- Task 4 ------------------');
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
//
let users = [
    {
        name: 'Boris',
        username: 'bora',
        password: 'gthyg-3622',
    },
    {
        name: 'Olia',
        username: 'ola',
        password: 'jkiom-458',
    },
    {
        name: 'Andriy',
        username: 'andr',
        password: 'zcad_999',
    },
    {
        name: 'Oleg',
        username: 'riji',
        password: 'b2g85ds',
    },
    {
        name: 'Sergiy',
        username: 'sera',
        password: 's56dgb',
    },
    {
        name: 'Dmitri',
        username: 'diduk',
        password: 'wwr56bhnj',
    },
    {
        name: 'Maksim',
        username: 'mako',
        password: 'v3hydio',
    },
    {
        name: 'Elena',
        username: 'eva',
        password: 'mnj987',
    },
    {
        name: 'Mariana',
        username: 'mama',
        password: 'lki9876',
    },
    {
        name: 'Katia',
        username: 'kota',
        password: 'oikj987',
    }
]

console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

// --------------------------------------------------------------------------------

console.log('----------------- Task 5 ------------------');
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x;

if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

// --------------------------------------------------------------------------------

console.log('----------------- Task 6 ------------------');

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time ;
// time = 29;
if ( time <=15 && time >= 0 ) {
    console.log('time in 1-zone');
} else if ( time <=30 && time > 15 ){
    console.log('time in 2-zone');
} else if ( time <=45 && time > 30 ){
    console.log('time in 3-zone');
} else if ( time <=59 && time > 45 ){
    console.log('time in 4-zone');
} else {
    console.log('the number must be in interval 0-59');
}

// --------------------------------------------------------------------------------

console.log('----------------- Task 7 ------------------');

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day;
// day = 11;
switch (true) {
    case day >= 1 && day <= 10:
        console.log('the day in the 1-decade');
        break;
    case  day > 10 && day <= 20:
        console.log('the day in the 2-decade');
        break;
    case  day > 20 && day <= 31:
        console.log('the day in the 3-decade');
        break;
    default:
        console.log('the day must be in iterval (1 -31)');
}

// --------------------------------------------------------------------------------

console.log('----------------- Task 8 ------------------');
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let date;
// date = 10;

switch (date) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Satuday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Each week has 7 days');
}

// --------------------------------------------------------------------------------

console.log('----------------- Task 9 ------------------');
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let number1 = +prompt('(For Task 9) => Enter the first number: ');
let number2 = +prompt('(For Task 9) => Enter the second number: ');

if (number1 > number2) {
    console.log(`${number1}`);
} else if (number2 > number1){
    console.log(`${number2}`);
} else {
    console.log(`Number 1 and number 2 are equal `);
}

// --------------------------------------------------------------------------------

console.log('----------------- Task 10 ------------------');
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
//

let someValue;
// someValue  = '111';
let defaultValue = 'default';
someValue = someValue || defaultValue;
console.log(someValue) ;

// --------------------------------------------------------------------------------

console.log('----------------- Task 11 ------------------');

//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0]['monthDuration'] > 5) {
    console.log(`${coursesAndDurationArray[0]['title']}  -- Супер`);
}

if (coursesAndDurationArray[1]['monthDuration'] > 5) {
    console.log(`${coursesAndDurationArray[1]['title']}  -- Супер`);
}

if (coursesAndDurationArray[2]['monthDuration'] > 5) {
    console.log(`${coursesAndDurationArray[2]['title']}  -- Супер`);
}

if (coursesAndDurationArray[3]['monthDuration'] > 5) {
    console.log(`${coursesAndDurationArray[3]['title']}  -- Супер`);
}

if (coursesAndDurationArray[4]['monthDuration'] > 5) {
    console.log(`${coursesAndDurationArray[4]['title']}  -- Супер`);
}

if (coursesAndDurationArray[5]['monthDuration'] > 5) {
    console.log(`${coursesAndDurationArray[5]['title']}  -- Супер`);
}

