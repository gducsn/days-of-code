const tbody = document.querySelector("tbody");
const filterID = document.getElementById("filterID");
const filterCity = document.getElementById("filterCity");
const btnID = document.getElementById("btnID");
const btnCity = document.getElementById("btnCity");
const upSort = document.getElementById("upSort");
const downSort = document.getElementById("downSort");
const btnReset = document.getElementById("btnReset");


const response = {
    pagination: {
        pagelen: 3,
        currentPage: 1,
        totalPage: 2
    },
    data: [{
            id: 1,
            name: 'Giulia',
            surname: 'cognome',
            age: 20,
            username: 'username',
            location: {
                address: 'Via Roma 10',
                city: 'Roma'
            }
        },
        {
            id: 2,
            name: 'Elisa',
            surname: 'gatto',
            age: 27,
            username: 'elis',
            location: {
                address: 'Via Roma 10',
                city: 'Palermo'
            }
        },
        {
            id: 3,
            name: 'Michele',
            surname: 'bohboh',
            age: 23,
            username: 'bohbohboh',
            location: {
                address: 'Via Roma 10',
                city: 'Milano'
            }
        },
        {
            id: 4,
            name: 'Gabriele',
            surname: 'bilello',
            age: 25,
            username: 'gabriele',
            location: {
                address: 'Via Roma 10',
                city: 'Palermo'
            }
        },
        {
            id: 5,
            name: 'Francesco',
            surname: 'idea',
            age: 34,
            username: 'nessunaIdea',
            location: {
                address: 'Via Roma 10',
                city: 'Palermo'
            }
        },
        {
            id: 6,
            name: 'Luisa',
            surname: 'ddfdsf',
            age: 43,
            username: 'asdsadasd',
            location: {
                address: 'Via Roma 10',
                city: 'Catania'
            }
        },
    ]
};

let data = Object.values(response.data)
let array = [];




function addElements() {
    data.forEach(x => {
        let tRow = document.createElement("tr");
        tRow.innerHTML =
            `<td>${x.id}</td>
            <td>${x.name}</td>
            <td>${x.location.city}</td>
            <td>${x.age}</td>`;
        tbody.append(tRow)
        let idFunction = function () {
            let value = filterID.value;
            if (value != x.id) {
                tRow.innerHTML = "";
            }
            if (value == "") {
                tRow.innerHTML =
                    `<td>${x.id}</td>
            <td>${x.name}</td>
            <td>${x.location.city}</td>
            <td>${x.age}</td>`;
            }
        }
        btnID.addEventListener('click', idFunction, false)

        let cityFunction = function () {
            let value = filterCity.value;
            if (value != x.location.city) {
                tRow.innerHTML = "";
            }

        }
        btnCity.addEventListener('click', cityFunction, false)

        let resetFunction = function () {
            filterCity.value = "";
            filterID.value = "";
            tRow.innerHTML =
                `<td>${x.id}</td>
            <td>${x.name}</td>
            <td>${x.location.city}</td>
            <td>${x.age}</td>`
        }
        btnReset.addEventListener('click', resetFunction, false)
    })

}
addElements()











function sortElement() {
    upSort.addEventListener('click', x => {
        x.stopPropagation();
        x.preventDefault();
        tbody.innerHTML = "";
        let array = [];
        data.forEach(y => {
            array.push(y)
        })
        array.sort((a, b) => a.age - b.age)
        array.forEach(x => {

            let tRow2 = document.createElement("tr");
            tRow2.innerHTML =
                `
            <td>${x.id}</td>
            <td>${x.name}</td>
            <td>${x.location.city}</td>
            <td>${x.age}</td>`;
            tbody.append(tRow2)
        })

    })
    downSort.addEventListener('click', x => {
        x.stopPropagation();
        x.preventDefault();
        tbody.innerHTML = "";
        let array = [];
        data.forEach(y => {
            array.push(y)
        })
        array.sort((a, b) => a.age + b.age)
        array.forEach(x => {

            let tRow2 = document.createElement("tr");
            tRow2.innerHTML =
                `
            <td>${x.id}</td>
            <td>${x.name}</td>
            <td>${x.location.city}</td>
            <td>${x.age}</td>`;
            tbody.append(tRow2)
        })

    })
}

sortElement();