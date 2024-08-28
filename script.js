let display = document.getElementById('display');

function appendNumber(number) {
    display.value += number;
}

function appendOperation(operation) {
    display.value += ` ${operation} `;
}

function appendDot() {
    if (!display.value.includes('.')) {
        display.value += '.';
    }
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}
