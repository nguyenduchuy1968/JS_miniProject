'use strict';

// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)

const usersUrl = 'https://jsonplaceholder.typicode.com/userss';

function getUserInfo(arr) {
    const ulUser = document.createElement('ul');
    let orderNumber = 1;
    arr.map(user => {
        const liUser = document.createElement('li');
        const a = document.createElement('a');
        a.href = `user-details.html?id=${user.id}`;
        a.innerText = `${orderNumber} -  id: ${user.id},  name: ${user.name}`;
        liUser.appendChild(a);
        ulUser.appendChild(liUser);
        document.body.appendChild(ulUser);
        orderNumber += 1;
    })
}

fetch(usersUrl)
.then(response => {
    console.log(response);
    if (!(response.status === 200)) {
        throw new Error(alert('User not found !'));
    }
    return response.json();
    })
.then(data => {
    getUserInfo(data)})
.catch(error => alert('Something is wrong !'));