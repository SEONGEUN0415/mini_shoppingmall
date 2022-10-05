'use strict'

const blue__button = document.querySelector('.color__blue');
const yellow__button = document.querySelector('.color__yellow');
const pink__button = document.querySelector('.color__pink');
const category__blue = document.querySelector('.type__blue');
const category__yellow = document.querySelector('.type__yellow');
const category__pink = document.querySelector('.type__pink');

blue__button.addEventListener('click', ()=>{
    if(category__blue.style.display == 'none'){
        category__blue.style.display = 'block';
        category__yellow.style.display = 'none';
        category__pink.style.display = 'none';
    }
});

yellow__button.addEventListener('click', ()=>{
    if(category__yellow.style.display == 'none'){
        category__yellow.style.display = 'block';
        category__pink.style.display = 'none';
        category__blue.style.display = 'none';
    } 
});

pink__button.addEventListener('click', ()=>{
    if(category__pink.style.display == 'none'){
        category__pink.style.display = 'block';
        category__yellow.style.display = 'none';
        category__blue.style.display = 'none';

    } 
});