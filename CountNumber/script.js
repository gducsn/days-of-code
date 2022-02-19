const h4Numero = document.querySelector(".nmrAdd");
const btnAdd = document.querySelector("#btnAdd");
const btnRemove = document.querySelector("#btnRemove");
const btnReset = document.querySelector("#btnReset");
let number = 0;

function add() {
    number += 1;
    h4Numero.innerHTML = number;
}

function remove() {
    let meno = parseInt(h4Numero.firstChild.data)
    let menoMeno = meno - 1;
    h4Numero.innerHTML = menoMeno;
}

function reset() {
    number = 0;
    h4Numero.firstChild.data = number;
}

btnAdd.addEventListener('click', add)
btnRemove.addEventListener('click', remove)
btnReset.addEventListener('click', reset)