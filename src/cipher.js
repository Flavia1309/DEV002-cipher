/*Agrego mi a mi constante cipher una funcion con offset que es el numero de desplazamientos y string que es mi abecedario*/
const cipher = {
  encode: function (offset, string) {
    if (typeof offset !== "number" || typeof string !== "string"){
      throw new TypeError();
      console.log(TypeError);
    }
    let resultado = "";
  for(let i = 0; i < string.length; i++) {
    let encriptar = string.charCodeAt(i);
if (encriptar >= 65 || encriptar <= 90) {
  resultado += String.fromCharCode(((encriptar - 65 + (offset)) % 26) + 65);
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
    if (desencriptar > 65 || desencriptar < 90) {
      resultado += String.fromCharCode(desencriptar);
    }
  }
  return resultado;
}

};


export default cipher;

