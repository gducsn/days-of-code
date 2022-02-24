let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

/* buttons.map(button => {
    button.addEventListener('click', (e) => {

        switch (e.target.innerText) {
            case 'AC':
                display.innerText = '';
                break;
            case '=':
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
                break;
            default:
                display.innerText += e.target.innerText;

        }
    });
});
*/

display.innerText = 0;

buttons.map(button => {
    button.addEventListener('click', (x) => {

        if (x.target.innerText == '=') {
            display.innerText = eval(display.innerText)
        } else if (x.target.innerText == 'AC') {
            display.innerText = 0;
        } else if (display.innerText == 0) {
            display.innerText = x.target.innerText;
        } else {
            display.innerText += x.target.innerText;
        }
    })

})