'use strict';

// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт
// в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

const submitBtn = document.getElementById('btn');
const userInfo = document.forms['userInfo'];
submitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    const div = document.createElement('div');
    div.innerText = `Your name : ${userInfo.name.value} and  your surname : ${userInfo.surname.value}`;
    document.body.append(div);
})

console.log('--------------------------------------------------');

// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
// ==========================

const numberDiv = document.getElementById('numberDiv');

window.onload = function () {
    let newValue = (!localStorage.getItem('number')) ? localStorage.setItem('number', numberDiv.innerText.toString()) : JSON.parse(localStorage.getItem('number'));

    newValue += 1;
    localStorage.setItem('number', newValue);
    numberDiv.innerText = localStorage.getItem('number');
};

