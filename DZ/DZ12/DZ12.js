// 1
const setUrlBtn = document.querySelector('#setUrl');
const visitUrlBtn = document.querySelector('#visitUrl');
let url = '';

setUrlBtn.addEventListener('click', () => {
    url = prompt('Enter URL');
});

visitUrlBtn.addEventListener('click', () => {
    if(!url){
        alert('Please set URL first');
    } else {
        window.open(url);
    }
});


// 2
const buttons = document.querySelector('.task2');

buttons.addEventListener('click', (event) => {
    alert(event.target.textContent);
});


// 3
const input = document.querySelector('input[type="text"]');
const addBtn = document.querySelector('#addBtn');
const ul = document.querySelector('#toDoList');

addBtn.addEventListener('click', () => {
    if(input.value){
        ul.insertAdjacentHTML('beforeend', `<li>${input.value}</li>`);
        input.value = '';
    }
});