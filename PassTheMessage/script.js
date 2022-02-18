const div = document.querySelector(".divElement")
const input = document.querySelector('input');
const textArea = document.querySelector("#textElement")
const button = document.querySelector("#inputElement");

function writeMess() {

    let h5Element = document.querySelector("h5")
    h5Element.innerHTML = textArea.value;
    h5Element.style.cssText = `
    margin-top: 10px;
    padding: 0px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-weight: 400;
    font-size: 12px;
    color: black;
    
  `;
    // h5Element.setAttribute("class", "h5Element")
    div.append(h5Element)

}



button.addEventListener('click', writeMess);
button.addEventListener('click', x => {
    x.preventDefault();
    textArea.value = "";
})