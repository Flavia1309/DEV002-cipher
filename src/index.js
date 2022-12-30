import cipher from './cipher.js';


document.getElementById("btnEncriptar").addEventListener("click", (e) => {
    e.preventDefault();
    const offset = document.getElementById("offset").value
    const mensaje = document.getElementById("mensajeOriginal").value
    const resultado = cipher.encode(parseInt (offset), mensaje)

    document.getElementById("mensajeResultado").value = resultado;

})

document.getElementById("btnDesencriptar").addEventListener("click", (e) => {
    e.preventDefault();
    const offset = document.getElementById("offset").value
    const mensaje = document.getElementById("mensajeResultado").value
    const resultado = cipher.decode(parseInt (offset), mensaje)

    document.getElementById("mensajeFinal").value = resultado;

})

    

/* agrego un sonido de click para los eventos del boton para que ejecute una acción
// btnEncriptar.addEventListener("click", resultado);
//Realizo la funcion para mi boton de desencriptado
// let btnDesencriptar = document.getElementById("btnDesencriptar");
// agrego un sonido de click pra los eventos del boton para que ejecute la acción
// btnDesencriptar.addEventListener("click", resultado);

//Realizo un string con los carácteres permitido, incluye un espacio entre frases
// let alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// //Ahora verifico si mi letra está dentro del string con una función
// function verificarCodigo (e) {
//     if(e.key === 'Backspace') return;
//     if(e.key === '') return;
//     if(alfabeto.includes(e.key)) {
//         return;
//     } else {
//         e.preventDefault();
//     }
// }
// function cifrado(e) {
// // Obtener el valor de mi cifrado y usar parseint 
//    let key = parseInt(key.value);
// // obtener el valor del elemento resultado
//    resultadoFinal = resultado.value;
//    let resultado 
//    }
//    let resultadoFinal;
//    if(e.target.id == "btnEncriptar") {
// //llamo al método dentro de la funcion cipher para encriptar
//    resultadoFinal = cipher.endode(key, resultado);
//    }
//    if(e.target.id == "btndesencriptar") {
// //llama al método dentro de cipher para desencriptar
//    resultadoFinal = cipher.decode(key, resultado);
//    }
// //Muestra el valor del tes¿xto encriptado y desencriptado
//    resultadoFinal,innerHTML = resultado;

// function cleanImput(){
//     location.reload();
// }*/