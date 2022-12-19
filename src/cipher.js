/*Agrego mi a mi constante cipher una funcion con offset que es el numero de desplazamientos y string que es mi abecedario*/
const cipher = {
  encode: function(offset, string) {
    console.log(typeof offset)
    if (typeof offset !== "string" || typeof string !== "string"){
     // throw new TypeError();
    }
    let resultado = "";
    for (let i = 0; i < string.length; i++) {
      let encriptado = string.charCodeAt(i);
      let desencriptar;
      if (encriptado < 65 || desencriptar > 90){
        desencriptar = String.fromCharCode(encriptado);
        resultado += desencriptar;
      } else {
        let mensajeEncriptado = (encriptado - 65 + offset) % 26 + 65;
        desencriptar = String.fromCharCode(mensajeEncriptado);
        resultado = resultado + desencriptar;
      }
    }
    return resultado;
  },

  decode: function(offset, string) {
    if(typeof offset !== "string" || typeof string !== "string"){
     // throw new TypeError();
    }
    let resultado = "";
    for (let i = 0; i < string.length; i++) {
      let encriptado = string.charCodeAt(i);
      let desencriptar;
      if(encriptado < 65 || encriptado > 90){
        desencriptar = String.fromCharCode(encriptado);
        resultado += desencriptar;
      } else {
        let mensajeEncriptado = (encriptado - 90 - offset) % 26 + 90;
        desencriptar = String.fromCharCode(mensajeEncriptado);
        resultado = resultado + desencriptar;
      }
    }
    return resultado;
  }
};


export default cipher

  
  /*alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  encode:function(numeroPosiciones, mensaje) {

    //VALIDANDO QUE EL # DE LETRAS A AVANZAR SEA DE TIPO NÚMERO Y SINO QUE ARROJE UN ERROR

    if (isNaN(numeroPosiciones)) {
      throw new TypeError("Desplazamiento", "cipher.js");
    }
    //VALIDANDO QUE LO QUE INGRESA SEA UNA CADENA DE TEXTO

    if (typeof mensaje != "string") {
      throw new TypeError("clave", "cipher.js");
    }

    let resultado = "";
    let posicionAnterior = 0;
    let posicionActual = 0;
    /*posicionAnterior;
    posicionActual;*/

    /*const posicionesAnteriores = array.from(mensaje);
    let largo = this.alfabeto.length;

    //Garantizar que el número de letras a avanzar este dentro del arreglo

    numeroPosiciones = ((numeroPosiciones % largo) + largo) % alfabeto;

    //recorre la letra inicial para encontrar la posicion en que se encuentra la letra con la cual se va a codificar
    for (let i = 0; i < posicionAnterior.length; i++) {
      posicionActual = posicionAnterior[i];

      posicionAnterior = this.alfabeto.indexOf(posicionActual);
      if (posicionAnterior == -1) {
        resultado = resultado + posicionActual;

      } else {
        posicionActual = (posicionAnterior + numeroPosiciones) % largo;
      }
      posicionAnterior = this.alfabeto[posicionActual];
      resultado = resultado + posicionAnterior;
    }
    return resultado;
  }
};


















//Cree esta constante para que vea la longitud de mi string mensaje



//let encode = (x + n) % 26;





/*Para que me devuelva solo letras Mayúsculas crearé una variable 
let mayúsculas = "A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z";
let x = mayúsculas.toUpperCase();
console.log(x);
 
//Creo una variable llamada string para sacar mi código Ascii, que es el que da el número en que se encuentra ubicada cada una de mis letras
let string = "A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z";
string.charCodeAt()
console.log(string);
 
 
/*Y luego con un if y un else para avisarle al usuario que solo acepte letras mayúsculas
if ( mensaje == cipher ); {
  return 
}else {
  return "Solo se admiten letras mayúculas"
};*/




