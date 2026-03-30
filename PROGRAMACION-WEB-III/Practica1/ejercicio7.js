/*
Almacenar el resto de los elementos de un arreglo sin tomar en cuenta los dos primeros
elementos de un arreglo, mediante desestructuración.
*/

const num=[1,2,3,4,5,6,7,8]
const[n1,n2,...resto]=num
console.log(resto);
