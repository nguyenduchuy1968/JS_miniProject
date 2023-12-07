'use strick';

// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

const strLength = str => str.length;  // the other resolution : const strLength = str => str.split('').length;

console.log('String length is : '  + strLength ('hello world'));
console.log('String length is : '  + strLength ('lorem ipsum'));
console.log('String length is : '  + strLength ('javascript is cool'));
console.log('--------------------------------------------------------------------------------');


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
const toUpper = str => str.toUpperCase();

console.log(toUpper('hello world'));
console.log(toUpper('lorem ipsum'));
console.log(toUpper('javascript is cool'));
console.log('--------------------------------------------------------------------------------');


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
const toLower = str => str.toLowerCase();

console.log(toLower('HELLO WORLD'));
console.log(toLower('LOREM IPSUM'));
console.log(toLower('JAVASCRIPT IS COOL'));
console.log('----------------------------------------------------------------------------------');


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   ';
const cleanSpace = str => str.replaceAll(' ', '');

console.log(cleanSpace(str));
console.log('-----------------------------------------------------------------------------------');


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str2 = 'Ревуть воли як ясла повні';
const stringToArray = str => str.split(',');

console.log(stringToArray(str2));
console.log('------------------------------------------------------------------------------------');


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
const arr = [10,8,-7,55,987,-1011,0,1050,0];
const newArr = arr.map(item => item.toString());
console.log(newArr);
console.log('-------------------------------------------------------------------------------------');


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let nums = [11, 21, 3];
let notAllNum = [33, 'Hello', 55, 66];

// Check is the array contains only numbers:
function checkNumArray(array) {
    return array.every(element => {
        return typeof element === 'number';
    });
}

function sortNums(nums, direction) {
    if (checkNumArray(nums) && direction === 'ascending') {
        return nums.sort((num1, num2) => num1 - num2);
    } else if (checkNumArray(nums) && direction === 'descending') {
        return nums.sort((num1, num2) => num2 - num1);
    } else {
        return 'Incorrect array or direction';
    }
}

console.log(sortNums(nums, 'descending'));
console.log(sortNums(notAllNum, 'ascending'));
console.log('---------------------------------------------------------------------------');


// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
const sortedArr = coursesAndDurationArray.sort((course1, course2) =>
    course2.monthDuration - course1.monthDuration);
console.log('Відсортуваний масив по monthDuration :');
console.log(sortedArr);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
const filteredArr = coursesAndDurationArray.filter(course => course.monthDuration >5);
console.log('Курси з тривалістю більше 5 місяців :');
console.log(filteredArr);

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
const mapArr = coursesAndDurationArray.map((course, index) => {
    return {id: index, title: course.title, monthDuration: course.monthDuration};
});
console.log(' map типу {id,title,monthDuration} :');
console.log(mapArr);
console.log('----------------------------------------------------------------------------------');


//     описати колоду карт (від 6 до туза без джокерів)
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

const cardSuits = ['spade', 'diamond','heart', 'clubs'];
const values = ['6', '7', '8', '9', '10', 'ace','jack','queen','king'];

let playingCards = [];

for (const cardSuit of cardSuits) {
    for (const value of values) {
        let card = {value: value, suit: cardSuit};
        playingCards.push(card);
    }
}

console.log(playingCards);
console.log('----------------------------------------------------------------------------------');


// - знайти піковий туз
const aceOFSpade = playingCards.filter(card => card.value === 'ace' && card.suit === 'spade' );
console.log('Ace of Spade :');
console.log(aceOFSpade);
console.log('----------------------------------------------------------------------------------');

// - всі шістки
const cardsValueEqual6 = playingCards.filter(card => card.value === '6');
console.log('cards Value Equal 6 :');
console.log(cardsValueEqual6);
console.log('----------------------------------------------------------------------------------');

// - всі червоні карти
const redCards = playingCards.filter(card => card.suit === 'diamond' || card.suit === 'heart' );
console.log('Red cards:');
console.log(redCards);
console.log('----------------------------------------------------------------------------------');

// - всі буби
const diamondCards = playingCards.filter(card => card.suit === 'diamond');
console.log('Diamond cards:');
console.log(diamondCards);
console.log('----------------------------------------------------------------------------------');

// - всі трефи від 9 та більше
const clubsCards = playingCards.filter(card => card.suit === 'clubs' && card.value >= '9');
console.log('Clubs cards biger 9:');
console.log(clubsCards);
console.log('----------------------------------------------------------------------------------');
//

//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// 'spade', 'diamond','heart', 'clubs'
const cardArrBySuit = {
        spades:[],
        diamonds:[],
        hearts:[],
        clubs:[]
        }
const sortedCards = playingCards.reduce((acc, card) => {
    if (card.suit === 'spade') {
        cardArrBySuit.spades.push(card);
    } else if (card.suit === 'diamond') {
        cardArrBySuit.diamonds.push(card);
    }  else if (card.suit === 'heart') {
        cardArrBySuit.hearts.push(card);
    } else {
        cardArrBySuit.clubs.push(card);
    }
}, cardArrBySuit);
console.log('Sorted cards By Suit :')
console.log(cardArrBySuit);

console.log('----------------------------------------------------------------------------------');


//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

const sassArr = coursesArray.filter(course =>course.modules.includes('sass'));
console.log('об\'єкті, в який в modules є sass :')
console.log(sassArr);


// --написати пошук всіх об'єктів, в який в modules є docker
const dockerArr = coursesArray.filter(course =>course.modules.includes('docker'));
console.log('об\'єкті, в який в modules є docker :')
console.log(dockerArr);