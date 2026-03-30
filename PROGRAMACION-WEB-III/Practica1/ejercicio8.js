//  8. Realizar un código para ejecutar una función callback después 2 segundos
/*
console.log("ANTES")
setTimeout(()=>{
    console.log("EJECUTANDO DESPUES DE 2 SEGUNDOS...")
},2000)
console.log("DESPUES")
*/


function Callback() {
  console.log("Ejecutando después de 2 segundos...");
}
setTimeout(Callback, 2000);