/*
Crear una función que determine si una cadena es palíndromo (se lee igual al derecho y
al revés).
let band = miFuncion(“oruro”)
console.log(band) // true
let band = miFuncion(“hola”)
console.log(band) // false
*/

function miFuncion(cadena) {
  for (let i = 0; i < cadena.length / 2; i++) {
    let izquierda = cadena[i];                        
    let derecha = cadena[cadena.length - 1 - i];      
    if (izquierda !== derecha) {
      return false;
    }
  }
  return true;
}
let band1 = miFuncion("reconocer");
console.log(band1); 
let band2 = miFuncion("ana");
console.log(band2);