let dataTriva = [];

async function getTriva() {
    let fetchData = await fetch("https://opentdb.com/api.php?amount=10&type=multiple");
    let data = await fetchData.json();
    data.results.map(x => {
        dataTriva.push(x)
    })
}

getTriva()

const catQuestion = document.querySelector(".catQuestion");
const question = document.querySelector(".question");
const diffQuestion = document.querySelector(".diffQuestion");
const button = document.querySelector(".btn");
const answer1 = document.getElementById("1");
const answer2 = document.getElementById("2");
const answer3 = document.getElementById("3");
const answer4 = document.getElementById("4");
let allLi = document.querySelectorAll(".li")


let indexNumber = 0;

function headTrivia() {
    if (indexNumber + 1 > dataTriva.length) {
        indexNumber = 0;
    }
    catQuestion.innerHTML = dataTriva[indexNumber].category;
    question.innerHTML = dataTriva[indexNumber].question;
    diffQuestion.innerHTML = dataTriva[indexNumber].difficulty;

    answer1.innerHTML = dataTriva[indexNumber].correct_answer;
    answer2.innerHTML = dataTriva[indexNumber].incorrect_answers[0];
    answer3.innerHTML = dataTriva[indexNumber].incorrect_answers[1];
    answer4.innerHTML = dataTriva[indexNumber].incorrect_answers[2];
    indexNumber++;




    allLi.forEach(x => {
        x.style.backgroundColor = "";
        x.style.color = "";
        x.onclick = function () {
            if (x.innerHTML == answer1.innerHTML) {
                x.style.backgroundColor = "green";
                x.style.color = "white";
                setTimeout(headTrivia, 2000)

            }

        }
    })
}




button.addEventListener('click', headTrivia, false)