//OPCION 1, menos eficiente

//let titulo = document.querySelector('h1');
//titulo.innerHTML = ('Juego numero secreto');

//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'indica un numero del 1 al 10'
//-------------
let intentos = 0;
let numeroSecreto = 0;
let limiteNsecreto = 10;
let listaNumerosSecretos = [];

//OPCION 2, mas resumida
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
//funcion           (elemento, texto)
//asignarTextoElemento('h1', 'Juego del número secreto');
//asignarTextoElemento('p', `Indica un numero del 1 al ${limiteNsecreto}`);

function verificarIntento() {
    //                                      HTML_inputId().valor
    let numeroDeUsuario = Number(document.getElementById('valorUsuario').value);
    //console.log(typeof(numeroDeUsuario));
    //console.log(numeroSecreto);
    //console.log(numeroDeUsuario);
    //console.log(numeroDeUsuario === numeroSecreto);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${intentos == 1 ? 'vez':'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');//deshabilita el disable del botton "nuevo juego" del html
    } else {
        if (numeroDeUsuario > numeroSecreto){
        asignarTextoElemento('p', 'el numero secreto es menor');
        } else {
        asignarTextoElemento('p', 'el numero secreto es mayor');
        }
        intentos++;
        limpiarInput();
    }
    return;
}
function limpiarInput () {
    //let valorInput = document.querySelector('#valorUsuario');
    //valorInput.value = '';
    document.querySelector('#valorUsuario').value = ''; // resumida
    return;
}
//----------------------
//OPCION 1
/*
function generaNumeroSecreto() {
    let numeroSecreto = Math.floor(Math.random()*10)+1;
    return numeroSecreto
}
*/
//OPCION 2
function generaNumeroSecreto(){
    //return Math.floor(Math.random()*limiteNsecreto)+1;
    let numeroGenerado = Math.floor(Math.random()*limiteNsecreto)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSecretos);
    //Si ya se sorteo todos los numeros
    if (listaNumerosSecretos.length == limiteNsecreto){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    }else{
        //si el numero generado esta incluido en la lista
        if (listaNumerosSecretos.includes(numeroGenerado)){
            return generaNumeroSecreto();
        }else {
            listaNumerosSecretos.push(numeroGenerado);//incluye en la ultima posicion del array el numero generado
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('h2', 'Dedicado para Angela, TE AMO. IDG333')
    asignarTextoElemento('p', `Indica el número del 1 al ${limiteNsecreto}`);
    numeroSecreto = generaNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() { //reinicia las condiciones
    //limpiar input
    limpiarInput();

    //iniciar msj
    //generar numero aleatorio
    //inicializar el número de intentos
    condicionesIniciales();

    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}
condicionesIniciales(); //inicializa las condiciones
