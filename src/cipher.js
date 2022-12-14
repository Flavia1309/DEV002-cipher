//Agrego mi constante cipher que será mi alfabeto
const cipher = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U","V", "W", "X", "Y", "Z"];
console.log(cipher);

//Para que me devuelva solo letras Mayúsculas crearé una variable 
let mayúsculas = "A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z";
let X = mayúsculas.toUpperCase();
console.log(X);

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


export default cipher;
