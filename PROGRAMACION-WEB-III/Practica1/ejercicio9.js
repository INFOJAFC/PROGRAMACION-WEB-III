//9. Crear una promesa que devuelva un mensaje de éxito después de 3 segundos.

function promesaExito() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Operación completada con éxito después de 3 segundos");
    }, 3000);
  });
}
promesaExito()
  .then(mensaje => console.log(mensaje))
  .catch(error => console.error(error));