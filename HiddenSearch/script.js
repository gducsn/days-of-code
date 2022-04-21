const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');
const srca = document.querySelector('.srca');


btn.addEventListener('click', x => {
    search.classList.toggle('active');
    input.focus()

})