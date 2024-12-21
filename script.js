const buttons = document.querySelectorAll('button');
const display = document.getElementById('display');
let item = '';

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (event) => {
        if (event.target.innerHTML == '=') {
            item = eval(item);
            display.value = item;
        }
        else if (event.target.innerHTML == 'AC') {
            item = '';
            display.value = item;
        }
        else if (event.target.innerHTML == 'x') {
            item += '*';
            display.value = item;
        }
        else if (event.target.innerHTML == '÷') {
            item += '/';
            display.value = item;
        }
        else {
            item += event.target.innerHTML;
            display.value = item;
        }
    })
})


