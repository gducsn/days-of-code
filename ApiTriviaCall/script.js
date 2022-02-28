let dataTriva = [];

async function getTriva() {
    let fetchData = await fetch("https://opentdb.com/api.php?amount=10&type=multiple");
    let data = await fetchData.json();
    data.results.map(x => {
        dataTriva.push(x)

    })

}

getTriva()

const bodyMain = document.querySelector("body")
const main = document.querySelector("main")
const catQuestion = document.querySelector(".catQuestion");
const question = document.querySelector(".question");
const diffQuestion = document.querySelector(".diffQuestion");
const button = document.querySelector(".btn");
const answer1 = document.getElementById("1");
const answer2 = document.getElementById("2");
const answer3 = document.getElementById("3");
const answer4 = document.getElementById("4");
let allLi = document.querySelectorAll(".li");
const head = document.querySelector(".headTrivia");
const body = document.querySelector(".bodyTrivia");


let indexNumber = 0;



function headTrivia() {
    const h3Delete = document.querySelector(".question2");
    h3Delete.innerText = "";
    button.innerText = "Next Question"

    body.style.display = "initial";
    if (indexNumber + 1 > dataTriva.length) {
        indexNumber = 0;
    }
    catQuestion.innerHTML = dataTriva[indexNumber].category;
    question.innerHTML = dataTriva[indexNumber].question;
    diffQuestion.innerHTML = dataTriva[indexNumber].difficulty;

    let allQuestion = [
        dataTriva[indexNumber].correct_answer,
        dataTriva[indexNumber].incorrect_answers[0],
        dataTriva[indexNumber].incorrect_answers[1],
        dataTriva[indexNumber].incorrect_answers[2]
    ]

    const correct_answer = allQuestion[0];



    let nums = [0, 1, 2, 3],
        ranNums = [],
        i = nums.length,
        j = 0;

    while (i--) {
        j = Math.floor(Math.random() * (i + 1));
        ranNums.push(nums[j]);
        nums.splice(j, 1);
    }

    answer1.innerHTML = allQuestion[ranNums[0]];
    answer2.innerHTML = allQuestion[ranNums[1]];
    answer3.innerHTML = allQuestion[ranNums[2]];
    answer4.innerHTML = allQuestion[ranNums[3]];
    console.log(correct_answer)
    indexNumber++;

    allLi.forEach(x => {

        x.style.backgroundColor = "";
        x.style.color = "";
        let clear = function () {
            x.style.backgroundColor = "white";
            x.style.color = "black";
            x.style.hover = "inherit"
        }
        x.onclick = function () {
            if (x.innerHTML == correct_answer) {
                x.style.backgroundColor = "green";
                x.style.color = "white";
                setTimeout(headTrivia, 1500)

            } else {
                x.style.backgroundColor = "red";
                x.style.color = "white";
                setTimeout(clear, 700)
            }

        }
    })
}

body.style.display = "none";

function getStart() {
    const h3 = document.createElement("h3");
    const h4 = document.createElement("h4");
    h3.setAttribute("class", "question question2");
    h3.innerHTML = "Welcome!";
    const button = document.createElement("button");
    button.setAttribute("class", "btn btn-secondary btn-lg btn-block btn2");
    button.innerText = "Click to start!";
    main.append(h3);
    h3.append(button)

}
getStart()



const button2 = document.querySelector(".btn2");

button2.addEventListener('click', headTrivia, false)
button.addEventListener('click', headTrivia, false)