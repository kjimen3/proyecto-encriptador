let textoAEncriptar = "";
let textoDesencriptado = "";
let textoADesencriptar = "";
let textoEncriptado = "";

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function encriptarTexto(){
    textoAEncriptar = (document.getElementById('mensaje').value);
    textoDesencriptado = textoAEncriptar.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat')
    let contenedorTexto = document.getElementById('textoAcopiar');
    
    eliminarImagen();
    asignarTextoElemento('.contenedor-parrafos-busqueda', textoDesencriptado);
    aparecerBotonCopiar();
}

function eliminarImagen(){
    let imgAEliminar = document.getElementById('imagen-de-busqueda')
    imgAEliminar.style.display = "none";
}

function aparecerBotonCopiar(){
    let botonCopiar = document.getElementById('boton-tres');
    botonCopiar.removeAttribute('hidden');
    console.log(botonCopiar);
}

function desencriptarTexto(){
    textoADesencriptar = (document.getElementById('mensaje').value);
    textoEncriptado = textoAEncriptar.replace('enter',/e/g).replace('imes',/i/g).replace('ai',/a/g).replace('ober',/o/g).replace('ufat',/u/g)
    eliminarImagen();
    asignarTextoElemento('.contenedor-parrafos-busqueda', textoEncriptado);
}

function copiarTexto(){
    let texto = document.getElementById("textoAcopiar").innerText;
    let botonTres = document.getElementById("boton-tres");
    
    let textoCopia = document.createElement("textarea");
    textoCopia.value = texto;
    
    document.body.appendChild(textoCopia);
    textoCopia.select();
    document.execCommand("copy");
    document.body.removeChild(textoCopia);
    alert('Texto copiado exitosamente')
    botonTres.hidden = false;
}

function resizeDiv(element) {
    element.style.height = "auto";
    element.style.height = (element.scrollHeight + 5) + "px";
  }