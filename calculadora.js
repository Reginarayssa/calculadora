var display = document.querySelector('#display');
var resultado = document.querySelector('#resultado');

function adicionarVisor(number) {
    display.value += number;
}

function adicionarOperador(operador) {
    const ultimoCaractere = display.value.slice(-1);
    if (!['+', '-', '*', '/'].includes(ultimoCaractere)) {
        display.value += operador;
    }
}

function igual() {
    try {
        resultado.innerHTML = eval(display.value);
    } catch {
        resultado.innerHTML = 'Erro';
    }
}

function limparVisor() {
    display.value = '';
    resultado.innerHTML = '';
}
