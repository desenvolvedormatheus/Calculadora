const entrada = document.querySelector('.entrada')
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


// Fun��o para pegar os caracteres sem sobrescrever
function caracter(caracter1) {
    var caracter2 = document.querySelector('.entrada').innerHTML
    document.querySelector('.entrada').innerHTML = caracter2 + caracter1
}

function limpar() {
    document.querySelector('.entrada').innerHTML = ' '
}

function apagar() {
    apagado = document.querySelector('.entrada').innerHTML
    document.querySelector('.entrada').innerHTML = apagado.substring(0, apagado.length -1)
}

function calcular() {
    var entrada = document.querySelector('.entrada').innerHTML
    if (entrada) {
        document.querySelector('.entrada').innerHTML = eval(entrada)
    }
    else {
        document.querySelector('.entrada').innerHTML('')
    }
}
