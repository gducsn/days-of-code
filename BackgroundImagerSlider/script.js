const div = document.querySelector('.containerImg');
const img = document.querySelector('.imgElement');
const btnAdd = document.querySelector('#addBtn');
const btnRemove = document.querySelector('#removeBtn');
let number = 0;
const imgArr = ['img/00.jpg', 'img/01.jpg', 'img/02.jpg', 'img/03.jpg']

function add() {
    if (number + 1 == imgArr.length) {
        number = 0;
    } else {
        number++;
    }
    img.src = imgArr[number];

}
let nmr = imgArr.length;

function remove() {
    if (nmr - 1 == -1) {
        nmr = 3;
    } else {
        nmr--
    }
    img.src = imgArr[nmr];
}

btnAdd.addEventListener('click', add)
btnRemove.addEventListener('click', remove)