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

function populateTable() {
    let data = Object.values(response.data)
    data.forEach(x => {
        let tableRow = document.createElement("tr");
        tableRow.innerHTML = `<td class="id">${x.id}</td>
        <td class="name">${x.name}</td>
        <td class="city">${x.location.city}</td>
        <td class="age">${x.age}</td>`;
        tbody.append(tableRow)
    })
};
populateTable();
btnReset.addEventListener('click', x => {
    tbody.innerHTML = "";
    filterCity.value = "";
    filterID.value = "";
    populateTable();
}, false)

btnCity.addEventListener('click', (x) => {
    let value = filterCity.value;
    let city = document.getElementsByClassName("city");
    let values = Object.values(city);
    values.forEach(x => {
        if (value != x.textContent) {
            x.parentElement.remove();
        }
    })
}, false)


btnID.addEventListener('click', (x) => {

    let value = filterID.value;
    let id = document.getElementsByClassName("id");
    let values = Object.values(id);
    values.forEach(x => {
        if (value != x.textContent) {
            x.parentElement.remove();
        }
    })

}, false)

upSort.addEventListener('click', x => {
    tbody.innerHTML = "";
    let data = Object.values(response.data)
    let array = [];
    data.forEach(y => {
        array.push(y)
    })
    array.sort((a, b) => a.age - b.age)
    array.forEach(x => {

        let tRow2 = document.createElement("tr");
        tRow2.innerHTML =
            `<td class="id">${x.id}</td>
        <td class="name">${x.name}</td>
        <td class="city">${x.location.city}</td>
        <td class="age">${x.age}</td>`;
        tbody.append(tRow2)
    })

}, false)

downSort.addEventListener('click', x => {
    let data = Object.values(response.data)
    tbody.innerHTML = "";
    let array = [];
    data.forEach(y => {
        array.push(y)
    })
    array.sort((a, b) => a.age + b.age)
    array.forEach(x => {
        let tRow2 = document.createElement("tr");
        tRow2.innerHTML =
            `<td class="id">${x.id}</td>
        <td class="name">${x.name}</td>
        <td class="city">${x.location.city}</td>
        <td class="age">${x.age}</td>`;
        tbody.append(tRow2)
    })

}, false)


function resetAll() {
    let valueId = filterID.value;
    let valueCity = filterCity.value;
    if (valueId == "" || valueCity == "") {
        tbody.innerHTML = "";
        populateTable()
    }

}

filterCity.addEventListener('keyup', x => {
    let value = x.target.value;
    if (value.length == 0) {
        resetAll()
    }
})

filterID.addEventListener('keyup', x => {
    let value = x.target.value;
    if (value.length == 0) {
        resetAll()
    }
})