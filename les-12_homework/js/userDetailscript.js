'use strict';

let url = new URL(location.href);
let idUser = url.searchParams.get('id');
url = `https://jsonplaceholder.typicode.com/users/${idUser}`;
document.location = url;