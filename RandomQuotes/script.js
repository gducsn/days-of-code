const body = document.querySelector("body");
const main = document.querySelector("main");
const div = document.querySelector(".textContainer");
const button = document.querySelector("#generateBtn");
const h3 = document.querySelector(".h3Element");
const h2 = document.querySelector(".h2Element");

function generateQuote() {

    async function download() {
        let fetchPost = await fetch("/RandomQuotes/quotes.json");
        let fetchData = await fetchPost.json()
        const keys = Object.values(fetchData)
        const prop = keys[Math.floor(Math.random() * keys.length)]
        h3.innerHTML = `<q> ${prop.text} `;
        h2.innerHTML = prop.author;

    }

    download();

    function removeElements(h3Element) {
        for (let i = 1; i < h3Element.length; i++) {
            h3Element[i].parentNode.removeChild(h3Element[i]);
        }
    }
    removeElements(document.querySelectorAll('h3'));
}

button.addEventListener('click', generateQuote);