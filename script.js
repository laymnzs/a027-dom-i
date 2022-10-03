const frutas = ["Laranja", "Limão", "Uva"];

let fruta1 = document.getElementById("fruta-1");
fruta1.innerHTML += frutas[0];

let fruta2 = document.getElementById("fruta-2");
fruta2.innerHTML += frutas[1];

let fruta3 = document.getElementById("fruta-3");
fruta3.innerHTML += frutas[2];

let mostrarFruta = document.getElementById("nomeDeMaisUmaFruta");

function mostarNaTela() {
    console.log(mostrarFruta.value);
}


function trocarElemento() {
    frutas.push(document.getElementById("nomeDeMaisUmaFruta").value);
    let fruta4 = document.getElementById("fruta-4");
    fruta4.innerHTML +=frutas[3];
}