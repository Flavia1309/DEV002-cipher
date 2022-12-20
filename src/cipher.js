/*Agrego mi a mi constante cipher una funcion con offset que es el numero de desplazamientos y string que es mi abecedario*/
const cipher = {
  encode: function (offset, string) {
    console.log(typeof offset)
    if (typeof offset !== "string" || typeof string !== "string"){
     // throw new TypeError();
    }
    let resultado = "";
    for (let i = 0; i < string.length; i++) {
      let encriptar = string.charCodeAt(i);
      let desencriptar;
      if (encriptar < 65 || desencriptar > 90) {
        desencriptar = String.fromCharCode(encriptar);
        resultado += desencriptar;
      } else {
        let mensajeEncriptado = (encriptar - 65 + offset) % 26 + 65;
        desencriptar = String.fromCharCode(mensajeEncriptado);
        resultado = resultado + desencriptar;
      }
    }
    return resultado;
  },

  decode: function(offset, string) {
    console.log(typeof offset)
    if (typeof offset !== "string" || typeof string !== "string") {
      //throw new TypeError();
    }
    let resultado = "";
    for (let i = 0; i < string.length; i++) {
      let encriptar = string.charCodeAt(i);
      let desencriptar;
      if(encriptar < 65 || encriptar > 90){
        desencriptar = String.fromCharCode(encriptar);
        resultado += desencriptar;
        
      } else {
        let mensajeEncriptado = (encriptar - 90 - offset) % 26 + 90;
        desencriptar = String.fromCharCode(mensajeEncriptado);
        resultado = resultado + desencriptar;
      
      }
    }
    return resultado;
  }

};


export default cipher;

  