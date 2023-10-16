const entrada = entrada
const menu = document.querySelector('.menu')
const menutema = document.querySelector('.menutema')
const corpo = document.querySelector('.corpo')
const sessao1 = document.querySelector('.sessao1')
const btnmenu = document.querySelector('.btnmenu')
const sessao2 = document.querySelector('.sessao2')

function abrirmenu() {
    menu.style.right = '0.5rem'
}

function fecharmenu() {
    menu.style.right = '-7rem'
}

function btntema() {
    menutema.style.right = '0.5rem'
}

function temaescuro() {
    menutema.style.right = '-5rem'
    corpo.style.background = '#232323'
    sessao1.style.background = '#575757'
    btnmenu.style.background = '#232323'
    menu.style.background = '#232323'
    menutema.style.background = '#232323'
    sessao2.style.color = '#fff'
    entrada.style.color = '#fff'
}

function temaclaro() {
    menutema.style.right = '-5rem'
    corpo.style.background = '#ffffff'
    sessao1.style.background = '#c8c8c8ff'
    btnmenu.style.background = '#ffffff'
    menu.style.background = '#ffffff'
    menutema.style.background = '#ffffff'
    sessao2.style.color = '#000'
    entrada.style.color = '#000'
}

// Função para pegar os caracteres sem sobrescrever
function caracter(caracter1) {
    let caracter2 = entrada.innerHTML
    let caracter3 = caracter2 + caracter1
    entrada.innerHTML = caracter3
}

function limpar() {
    entrada.innerHTML = ' '
}

function apagar() {
    apagado = entrada.innerHTML
    entrada.innerHTML = apagado.substring(0, apagado.length -1)
}

function calcular() {
    let entrada = entrada.innerHTML
    if (entrada) {
        entrada.innerHTML = eval(entrada)
    }
    else {
        entrada.innerHTML('')
    }
}
