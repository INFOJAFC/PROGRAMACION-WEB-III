function contarVo(texto) {  //FUNCION
  let resultado = { a: 0, e: 0, i: 0, o: 0, u: 0 };  //objeto
  texto = texto.toLowerCase();
  for (let i = 0; i < texto.length; i++) {
    let letra = texto[i]; 
    if (letra == "a") resultado.a=resultado.a+1;
    else if (letra == "e") resultado.e++;
    else if (letra == "i") resultado.i++;
    else if (letra == "o") resultado.o++;
    else if (letra == "u") resultado.u++;
  }
  return resultado;
}
let obj=contarVo("contadorDeVocales")
console.log(obj);