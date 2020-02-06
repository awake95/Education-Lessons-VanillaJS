
let books = document.querySelectorAll('.books');
    book = document.querySelectorAll('.book');


books[0].insertBefore(book[1], book[0]),
books[0].insertBefore(book[4], book[2]);
books[0].insertBefore(book[3], book[2]);
books[0].insertBefore(book[5], book[2]);

let body = document.querySelector('body');
body.setAttribute('style', 'background-image: url(./image/you-dont-know-js.jpg)');

let bookTitleChange = document.querySelectorAll('h2')[2];
bookTitleChange.innerHTML = '<a href="https://github.com/azat-io/you-dont-know-js-ru/blob/master/es6%20%26%20beyond/README.md#you-dont-know-js-es6--beyond" target="_blank">Книга 3. this и Прототипы Объектов</a>';

let delAdv = document.querySelector('.adv');
delAdv.remove('.adv');

    bookUl = document.querySelectorAll('ul');
    charapter = document.querySelectorAll('li');
    
    bookUl[1].appendChild(charapter[8], charapter[14]);

    bookUl[1].insertBefore(charapter[14], charapter[13]);
    bookUl[1].insertBefore(charapter[8], charapter[16]);
    bookUl[1].insertBefore(charapter[12], charapter[10]);
    bookUl[1].insertBefore(charapter[14], charapter[11]);
    bookUl[1].insertBefore(charapter[14], charapter[10]);


    bookUl[4].insertBefore(charapter[45], charapter[38]);
    bookUl[4].insertBefore(charapter[39], charapter[38]);
    bookUl[4].insertBefore(charapter[40], charapter[38]);
    bookUl[4].insertBefore(charapter[41], charapter[44]);

    let newElem = document.createElement('li')
    newElem.textContent = 'Глава 8: За пределами ES6';
    bookUl[5].appendChild(newElem);
    bookUl[5].insertBefore(newElem, charapter[56]);
