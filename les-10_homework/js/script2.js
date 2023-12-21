'use strict';

window.onload = function () {
    let div = document.createElement('div');
    let dateTime = `${localStorage.getItem('dateNow')}  ${localStorage.getItem('timeNow')}`;
    let p = document.createElement('p');
    p.innerText = dateTime;
    div.append(p);
    document.body.append(div);
}