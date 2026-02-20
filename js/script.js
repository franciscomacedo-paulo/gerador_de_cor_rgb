"use strict"
/*
 * PEGANDO OS ELEMENTOS HTML 
*/
const rangeR = document.getElementById('r')
const rangeG = document.getElementById('g')
const rangeB = document.getElementById('b')

const btn_apply = document.querySelector('#btn_apply')
const btn_copy = document.querySelector('#copy')

const mostrar_cor_selecionada = document.querySelector('.mostrar_cor_selecionada')

let codigo_final = document.getElementById('codigo_final')


// Funcao que gera as cores
function gerarColor(){
    const valoresrgb = `rgb(${rangeR.value} ${rangeG.value} ${rangeB.value})`
    codigo_final.value = valoresrgb
    mostrar_cor_selecionada.style.backgroundColor = valoresrgb
    console.log(codigo_final)
}


// FUNCIONALIDADE DO BUTTON APLICAR COR
btn_apply.addEventListener('click',gerarColor)
/*
 * FUNCIONALIDADE DO BOTAO DE COPIAR 
*/
btn_copy.addEventListener('click', () => {
    navigator.clipboard.writeText(codigo_final.value);
    alert("Código copiado")
});

