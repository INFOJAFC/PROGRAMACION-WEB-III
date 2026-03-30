//11. Proporcione un ejemplo concreto de encadenamiento de promesas

function paso1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Paso 1 completado");
      resolve("Resultado del paso 1");
    }, 1000);
  });
}

function paso2(resultadoAnterior) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Paso 2 completado con:", resultadoAnterior);
      resolve("Resultado del paso 2");
    }, 1000);
  });
}

function paso3(resultadoAnterior) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Paso 3 completado con:", resultadoAnterior);
      resolve("Proceso finalizado");
    }, 1000);
  });
}

// Encadenamiento de promesas
paso1()
  .then(res1 => paso2(res1))
  .then(res2 => paso3(res2))
  .then(final => console.log("🎉", final))
  .catch(error => console.error("Error:", error));