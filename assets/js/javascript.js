/*
Case Sensitive 
Por Tag: getElementByTagName
Por Id: getElementById
Por Classe: getElementsByClassName
Por Nome: getElementsByName
Por Seletor: querySelector
*/

/*
var= um perimetro
let= 
const
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
//let nomeOk = false
//let emailOk = false
//let assuntoOk = false
//let mapa = document.querySelector('#mapa')


function validanome() {
    let txt = document.querySelector('#txtnome')
    if(nome.value.length < 3) {
        alert('nome invalido')
        txt.innerHTML = 'nome inválido'
        txt.getElementsByClassName.color = 'red'


    } else {
        txt.innerHTML = 'Nome válido'
        txt.style.color = 'green'
    }

}