//12.Proporcione un ejemplo concreto donde el anidamiento de callbacks se puede
//reescribir mejor con async/await haciendo el código más limpio y mantenible.

/*
    ANIDAMIENTO DE CALLBACKS
function paso1(callback) {
  setTimeout(() => {
    console.log("Paso 1 completado");
    callback("Resultado 1");
  }, 1000);
}

function paso2(resultado, callback) {
  setTimeout(() => {
    console.log("Paso 2 completado con:", resultado);
    callback("Resultado 2");
  }, 1000);
}

function paso3(resultado, callback) {
  setTimeout(() => {
    console.log("Paso 3 completado con:", resultado);
    callback("Proceso finalizado");
  }, 1000);
}

// Uso con callbacks anidados
paso1((res1) => {
  paso2(res1, (res2) => {
    paso3(res2, (final) => {
      console.log(final);
    });
  });
});
*/

//PROMESAS
function paso1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Paso 1 completado");
      resolve("Resultado 1");
    }, 1000);
  });
}

function paso2(resultado) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Paso 2 completado con:", resultado);
      resolve("Resultado 2");
    }, 1000);
  });
}

function paso3(resultado) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Paso 3 completado con:", resultado);
      resolve("Proceso finalizado");
    }, 1000);
  });
}

// Uso con async/await
async function ejecutarProceso() {
  try {
    const res1 = await paso1();
    const res2 = await paso2(res1);
    const final = await paso3(res2);
    console.log( final);
  } catch (error) {
    console.error("Error:", error);
  }
}

ejecutarProceso();