function invertir(cad) {
  let invertida = "";
  for (let i = cad.length - 1; i >= 0; i--) {
    invertida += cad[i];
  }
  return invertida;
}
let obj = invertir("invertirPalabra");
console.log(obj);


