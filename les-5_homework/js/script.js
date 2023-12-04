// ********************************* ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ! *****************************

console.log('------------TASK 1----------------------');
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
const rectangleSquare = (a, b) => 'rectangleSquare is:  ' + a * b;
console.log(rectangleSquare(4, 6));


console.log('---------------TASK 2-------------------');
// - створити функцію яка обчислює та повертає площу кола з радіусом r
const circleSquare = (radius) => 'circleSquare is: ' + radius**2*Math.PI;
console.log(circleSquare(3));


console.log('---------------TASK 3-------------------');
// - створити функцію яка обчислює та повертає ллощу циліндру висотою h, та радіутом r
const plazaOfCylinder = (height, radius) => 'plazaOfCylinder is:' + 2 * Math.PI * radius * (height + radius)
console.log(plazaOfCylinder(5, 2 ));


console.log('----------------TASK 4------------------');
// - створити функцію яка приймає масив та виводить кожен його елемент
const showElemOfArr = (arr) => {
    for (const [i, value] of arr.entries()) {
        console.log(`index ${i} : ${value}`);
    }

    // for (const el of arr) {
    //     console.log(el);
    // }
}
showElemOfArr([10, 2, 30, 4, 6,]);

//'---------------TASK 5-------------------');
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
const createParagraph = (string) => document.write(`<p>${string}</p>`);

createParagraph('Hello World 1');


//'---------------TASK 6-------------------');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
const createUlLi = (text) =>
    document.write(`<ul>
                        <li>${text}</li>
                        <li>${text}</li>
                        <li>${text}</li>
                    </ul>`);

createUlLi('Hello World 2');


//'---------------TASK 7-------------------');
// - створити функцію яка створює ul з елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
const createUl_Li = (text, num) => {
    document.write(`<ul>`);
    for (let i =1; i <= num; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}
createUl_Li('Hello World 3', 3);


//'---------------TASK 8-------------------');
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const createList = (arr) => {
    document.write(`<ul>`);
    for (const el of arr) {
        document.write(`<li>${el}</li>`);
    }
    document.write(`</ul>`);
}
createList(['Good', 'morning', 5, 12, 2023, true]);


console.log('---------------TASK 9-------------------');
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let userArr = [
    {id: 1, name: 'vasya', age: 31},
    {id: 2, name: 'petya', age: 30},
    {id: 3, name: 'kolya', age: 29},
    {id: 4, name: 'olya', age: 28}
];

const userBlock = (objArr) => {
    for (const obj of objArr) {
        document.write(`<div>* ${obj.id} , ${obj.name} , ${obj.age}</div>`);
    }
}
userBlock(userArr);


console.log('---------------TASK 10-------------------');
// - створити функцію яка повертає найменьше число з масиву
function minNum(numArr) {
    let minNum = numArr[0];
    for (const num of numArr) {
        if (num < minNum) {
            minNum = num;
        }
    }
    return minNum;
}
console.log(minNum([-63,152, 0, -300, 69]));


console.log('---------------TASK 11-------------------');
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
const sumOfNums = (numArr) => {
    let sum = 0;
    for (const num of numArr) {
        sum += num;
    }
    return sum;
}
console.log(sumOfNums([65, -95, 1583, -55]));


console.log('---------------TASK 12-------------------');
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
const swap = (arr, index1, index2) => {
    let tempNum;
    tempNum =arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tempNum;
    return arr;
}
console.log(swap([11,22,33,44],0,3));


console.log('---------------TASK 13-------------------');
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    for (const curr of currencyValues) {
        if (curr.currency === exchangeCurrency) {
            let res = sumUAH / curr.value;
            return res.toFixed(2) + ' ' + `${exchangeCurrency}`;
        }
    }
}
console.log(exchange(15000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD')) ;
console.log(exchange(4300,[{currency:'USD',value:40},{currency:'EUR',value:42}],'EUR'));



