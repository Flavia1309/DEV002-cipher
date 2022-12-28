/*Agrego mi a mi constante cipher una funcion con offset que es el numero de desplazamientos y string que es mi abecedario*/
const cipher = {
  encode: function (offset, string) {

    if (typeof offset !== "number" || typeof string !== "string") {
      throw new TypeError("Error de parámetros");
    }

    let resultado = "";
    for (let i = 0; i < string.length; i++) {
      let encriptar = string.charCodeAt(i);
      let codEnc;
      if (encriptar >= 65 || encriptar <= 90) {
        codEnc = String.fromCharCode(((encriptar - 65 + offset) % 26) + 65 );
        resultado = resultado + codEnc
      }
    }
    return resultado;

  },

  decode: function (offset, string) {
    if (typeof offset !== "number" || typeof string !== "string") {
      throw new TypeError();
    }
    let resultado = "";
    for (let i = 0; i < string.length; i++) {
      let desencriptar = string.charCodeAt(i);
      let codDesenc;
      if (desencriptar >= 65 || desencriptar <= 90) {
        codDesenc = String.fromCharCode(((desencriptar - 90 - offset) % 26) + 90 );
        resultado = resultado + codDesenc;
      }
    } 
    return resultado;
  }

};


export default cipher;

