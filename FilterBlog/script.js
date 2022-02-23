const input = document.querySelector("#btnSearch");
let nature = document.querySelectorAll(".nature")
let city = document.querySelectorAll(".city")
let people = document.querySelectorAll(".people")
const containerImg = document.querySelector(".containerImg")


function querySelector() {
    let search = input.value.toLowerCase();

    if (search == "nature") {
        city.forEach(element => {
            element.classList.add("hide")

        });
        people.forEach(element => {
            element.classList.add("hide")
        });

    }
    if (search == "city") {
        nature.forEach(element => {
            element.classList.add("hide")
        });
        people.forEach(element => {
            element.classList.add("hide")
        });

    }
    if (search == "people") {
        nature.forEach(element => {
            element.classList.add("hide")
        });
        city.forEach(element => {
            element.classList.add("hide")
        });

    }
    if (search == "") {

        nature.forEach(element => {
            element.classList.remove("hide")
        });
        city.forEach(element => {
            element.classList.remove("hide")
        });
        people.forEach(element => {
            element.classList.remove("hide")
        });
    }
}

input.onkeyup = querySelector;