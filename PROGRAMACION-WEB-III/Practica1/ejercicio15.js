//15. Proporcione un ejemplo para convertir un callback en una promesa.

/*
--------CALLBACK---------
function leerArchivo(nombreArchivo, callback) {
  setTimeout(() => {
    if (nombreArchivo === "datos.txt") {
      callback(null, "Contenido del archivo");
    } else {
      callback("Archivo no encontrado", null);
    }
  }, 1000);
}
leerArchivo("datos.txt", (error, contenido) => {
  if (error) {
    console.error(error);
  } else {
    console.log("Contenido:", contenido);
  }
});
*/


/*
//--------CONVERTIDO A PROMESA------
function leerArchivoPromesa(nombreArchivo) {
  return new Promise((resolve, reject) => {
    leerArchivo(nombreArchivo, (error, contenido) => {
      if (error) {
        reject(error);   // si hay error, rechazamos la promesa
      } else {
        resolve(contenido); // si todo va bien, resolvemos la promesa
      }
    });
  });
}
leerArchivoPromesa("datos.txt")
  .then(contenido => console.log("Contenido:", contenido))
  .catch(error => console.error(error));
*/


//USO CON async/await
async function ejecutar() {
  try {
    const contenido = await leerArchivoPromesa("datos.txt");
    console.log("Contenido:", contenido);
  } catch (error) {
    console.error("Error:", error);
  }
}

ejecutar();