const tbody = document.querySelector("tbody");
const filterID = document.getElementById("filterID");
const filterCity = document.getElementById("filterCity");
const btnID = document.getElementById("btnID");
const btnCity = document.querySelector("#btnCity")


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


function addElements() {

    data.forEach(x => {
        let tRow = document.createElement("tr");
        tRow.innerHTML =
            `
            <td>${x.id}</td>
            <td>${x.name}</td>
            <td>${x.location.city}</td>
            <td>${x.age}</td>`;
        tbody.append(tRow)

        btnCity.addEventListener('click', (e) => {

            e.stopPropagation();
            e.preventDefault();
            let value = filterCity.value;
            if (value !== x.location.city) {
                tRow.innerHTML = "";
            }
            if (value == "") {
                tRow.innerHTML =
                    `
                <td>${x.id}</td>
                <td>${x.name}</td>
                <td>${x.location.city}</td>
                <td>${x.age}</td>`;

            }

        })

        btnID.addEventListener('click', (event) => {
            event.stopPropagation();
            event.preventDefault();
            let value = filterID.value;
            if (value != x.id) {
                tRow.innerHTML = "";
            }
            if (value == "") {
                tRow.innerHTML =
                    `
                <td>${x.id}</td>
                <td>${x.name}</td>
                <td>${x.location.city}</td>
                <td>${x.age}</td>`;

            }

        })


    });


}

addElements()