// This module exports  reusable functions to others


//This function for creating HTML elements (div, p , a , button...) with possibility of adding classes and innerText to them
export const createHtmlElement = function (htmlEl = 'div', className = '', elText = '') {
    const element = document.createElement(htmlEl);
    element.className = className;
    element.innerText = elText;
    return element;
}

//This function has 5 arguments :
//    - url (url) for fetching and getting data (dataArr: userInfo, posts, comments...) from database
//    - func (async function) for manipulation the dataArr and show them.
//    - styleClassName - name of CSS className (it is array , for styling) of the Div which will be dynamically created in async function (func)
//      (which was described above) .This is need to style div for showing of information on the different ways
//    - toDiv - <div> where the future data will be located
export const wrapperFunc = async function (url, func, styleClassName_1 = '', styleClassName_2 = '', toDiv, field_1, field_2, linkNextPage) {
    try {
        const fetchData = await fetch(url);
        const dataArr = await fetchData.json();
        func(dataArr, styleClassName_1 , styleClassName_2 , toDiv , field_1, field_2 , linkNextPage );
    } catch (err) {
        alert('Something went  wrong. Please check internet connection or the url is incorrect !');
    }
}


//This function uses recursion to access to tha data and show them
export const showPosts = function (obj, styleClassName_1, styleClassName_2, toDiv) {

    const mainDiv = document.getElementById(toDiv);
    const outerDiv = createHtmlElement('div', styleClassName_2, '');

    for (const [key, value] of Object.entries(obj)) {
        if (key && (typeof value === "object" && value !== null)) {
            showPosts(value, styleClassName_1, styleClassName_2, toDiv);
        } else {
            if (key) {
            const p = createHtmlElement('p', '', `${key}: ${value}`);
            firstWordStyle(p, 'first-word'); // transforms the first word of paragraph to bold style
            const innerDiv = createHtmlElement('div', styleClassName_1, '');
            innerDiv.appendChild(p);
            outerDiv.appendChild(innerDiv);
            mainDiv.appendChild(outerDiv);
            }
        }
    }
}


export const showInfo = function (obj, styleClassName_1, styleClassName_2, toDiv) {
    const mainDiv = document.getElementById(toDiv);
    const outerDiv = createHtmlElement('div', styleClassName_2, '');
    const infoArr = objToArr(obj); // convert object to array

    for (const el of infoArr) {
        if (el[0] === "0:" || el[0] === "0") {
            continue;
        }
        if (el[1] === undefined) el[1] = ''
        const p = createHtmlElement('p', '', `${el[0]}: ${el[1]}`);
        firstWordStyle(p, 'first-word'); // transforms the first word of paragraph to bold style
        const innerDiv = createHtmlElement('div', styleClassName_1, '');
        innerDiv.appendChild(p);
        outerDiv.appendChild(innerDiv);
    }
    mainDiv.appendChild(outerDiv);
}


//This function convert object to array
const infoArr = [];
const objToArr = function (obj) {
    for (const [key, value] of Object.entries(obj)) {
        if (key && (typeof value === "object" && value !== null)) {
            infoArr.push([`${key}`.toUpperCase()]);
            objToArr(value);
        } else {
            infoArr.push([key, value]);
        }
    }
    return infoArr;
}


// This function transforms the first word of paragraph to bold style
export const firstWordStyle = function(element, className) {
    const index = element.innerText.indexOf(':');
    element.innerHTML = `<span class="${className}">` +element.innerText.slice(0, index) + '</span>' +
        element.innerText.slice(index);
}
