//14. Proporcione un ejemplo para convertir una promesa en un callback.

/*
//----PROMESA-------
function obtenerDatos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(" Datos obtenidos correctamente");
    }, 2000);
  });
}

obtenerDatos()
  .then(resultado => console.log(resultado))
  .catch(error => console.error(error));
*/

//----CONVERTIDO A CALLBACK-------
function obtenerDatosConCallback(callback) {
  obtenerDatos()
    .then(resultado => callback(null, resultado)) 
    .catch(error => callback(error, null));       
}

// Uso con callback
obtenerDatosConCallback((error, resultado) => {
  if (error) {
    console.error("Error:", error);
  } else {
    console.log("Resultado con callback:", resultado);
  }
});