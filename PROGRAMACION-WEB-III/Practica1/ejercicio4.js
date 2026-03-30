/* Crear una función que reciba un arreglo de números y devuelva el número mayor y el
menor, en un objeto.
let obj = miFuncion([3,1,5,4,2])
console.log(obj) // { mayor: 5, menor: 1 }
*/

function miFuncion(arr) {
  let mayor = arr[0];
  let menor = arr[0];
  for (let i = 1; i < arr.length; i++) {
    let num = arr[i];
    if (num > mayor) {
      mayor = num;
    }
    if (num < menor) {
      menor = num;
    }
  }
  return { mayor: mayor, menor: menor };
}
let obj = miFuncion([3, 1, 5, 4, 2,7]);
console.log(obj); 
