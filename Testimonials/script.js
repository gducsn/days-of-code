let number = 1;
let array1 = [];
const h3Name = document.querySelector(".h3Element");
const h4Name = document.querySelector(".h4Element");
const btnAdd = document.querySelector(".addBtn");
const btnRemove = document.querySelector(".removeBtn");
const imgAvatar = document.querySelector(".imgAvatar");

let num2;
async function add() {
    await fetch("https://testimonialapi.toolcarton.com/api").then(x => x.json()).then(y => array1.push(y));
    let nmr;

    let nameID;
    let textID;
    let avatarID;
    array1.forEach(element => {
        nmr = element.length;

        nameID = element[number].name;
        textID = element[number].message;
        avatarID = element[number].avatar;
        console.log(nameID)

    });

    h3Name.innerHTML = nameID;
    h4Name.innerHTML = `<q>${textID}</q>`;
    imgAvatar.src = avatarID;
    if (number + 1 == nmr) {
        number = 0;
    } else {
        number++
    }
    console.log(number)


}
num2 = array1.length;


async function remove() {

    await fetch("https://testimonialapi.toolcarton.com/api").then(x => x.json()).then(y => array1.push(y));

    let nmr;
    let nameID;
    let textID;
    let avatarID;
    array1.forEach(element => {

        nmr = element.length;
        nameID = element[num2].name;
        textID = element[num2].message;
        avatarID = element[num2].avatar;
        console.log(nameID)

    });

    h3Name.innerHTML = nameID;
    h4Name.innerHTML = `<q>${textID}</q>`;
    imgAvatar.src = avatarID;
    if (num2 - 1 == -1) {
        num2 = 9;
    } else {
        num2--
    }

    console.log(num2)
}


btnAdd.addEventListener('click', add)
btnRemove.addEventListener('click', remove)