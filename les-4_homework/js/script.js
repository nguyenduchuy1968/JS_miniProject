console.log('------------TASK 1----------------------');
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function rectangleSquare(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return 'rectangleSquare is:' + a * b;
    } else {
        return 'Incorrect argument(s)';
    }
}
console.log(rectangleSquare(3, 4));


console.log('---------------TASK 2-------------------');
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function circleSquare(radius) {
    if (typeof radius === 'number') {
        return 'circleSquare is:' + radius**2*Math.PI;
    } else {
        return 'Incorrect argument(s)';
    }
}
console.log(circleSquare(2));


console.log('---------------TASK 3-------------------');
// - створити функцію яка обчислює та повертає об'єм циліндру висотою h, та радіутом r
function volumeOfCylinder(height, radius) {
    if (typeof height === 'number' && typeof radius === 'number') {
        return 'volumeOfCylinder is:' + radius**2*Math.PI*height;
    } else {
        return 'Incorrect argument(s)';
    }
}
console.log(volumeOfCylinder(3, 2 ));


console.log('----------------TASK 4------------------');
// - створити функцію яка приймає масив та виводить кожен його елемент
function showElemOfArr(arr) {
    for (const [i, value] of arr.entries()) {
        console.log(`index ${i} : ${value}`);
    }

    // for (const el of arr) {
    //     console.log(el);
    // }
}
showElemOfArr([1, 2, 3, 4, 6,]);


//'---------------TASK 5-------------------');
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function createParagraph(string) {
    document.write(`<p>${string}</p>`);
}
createParagraph('Hello World 1');


//'---------------TASK 6-------------------');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function createUlLi(text) {
    document.write(`<ul>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`</ul>`);
}
createUlLi('Hello World 2');


//'---------------TASK 7-------------------');
// - створити функцію яка створює ul з елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function createUl_Li(text, num) {
    if (typeof text === 'string' && typeof num === 'number') {
        document.write(`<ul>`);
        for (let i =1; i <= num; i++) {
            document.write(`<li>${text}</li>`);
        }
        document.write(`</ul>`);
    } else {
        document.write('Incorrect argument(s)');
    }

}
createUl_Li('Hello World 3', 5);


//'---------------TASK 8-------------------');
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function createList(arr) {
    document.write(`<ul>`);
    for (const el of arr) {
        document.write(`<li>${el}</li>`);
    }
    document.write(`</ul>`);
}
createList(['fdsfds', true, 5555, 'lm']);


console.log('---------------TASK 9-------------------');
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let userArr = [
    {id: 1, name: 'vasya', age: 31},
    {id: 2, name: 'petya', age: 30},
    {id: 3, name: 'kolya', age: 29},
    {id: 4, name: 'olya', age: 28}
];


function userBlock(objArr) {
    for (let i = 0; i < objArr.length; i++) {
        let block = {};
        block = objArr[i];
        console.log(block);
    }
}
userBlock(userArr);


console.log('---------------TASK 10-------------------');
// - створити функцію яка повертає найменьше число з масиву
function minNum(numArr) {
    for (const num of numArr) {
        if (num < numArr[0]) {
            numArr[0] = num;
        }
    }
    return numArr[0];
}
console.log(minNum([3,-52, 0, -100, 69]));


console.log('---------------TASK 11-------------------');
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sumOfNums(numArr) {
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
function swap(arr, index1, index2) {
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
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    for (let curr of currencyValues) {
        if (curr.currency === exchangeCurrency) {
            let res = sumUAH / curr.value;
            return Math.round(res) + ' ' + `${exchangeCurrency}`;
        }
    }
}

console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD')) ;
console.log(exchange(4200,[{currency:'USD',value:40},{currency:'EUR',value:42}],'EUR'));