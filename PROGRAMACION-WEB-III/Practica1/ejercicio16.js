//16. Proporcione un ejemplo para migrar una función con promesas a async/await.

/*
PROMESAS
function obtenerUsuario() {
  return new Promise(resolve => {
    setTimeout(() => resolve({ id: 1, nombre: "Jorge" }), 1000);
  });
}   
function obtenerPublicaciones(usuarioId) {
  return new Promise(resolve => {
    setTimeout(() => resolve([{ id: 101, titulo: "Mi primera publicación" }]), 1000);
  });
}
obtenerUsuario()
  .then(usuario => {
    console.log("Usuario:", usuario);
    return obtenerPublicaciones(usuario.id);
  })
  .then(publicaciones => {
    console.log("Publicaciones:", publicaciones);
  })
  .catch(error => console.error("Error:", error));
*/

//MIGRADO A ASYNC/AWAIT
async function ejecutarProceso() {
  try {
    const usuario = await obtenerUsuario();
    console.log("Usuario:", usuario);

    const publicaciones = await obtenerPublicaciones(usuario.id);
    console.log("Publicaciones:", publicaciones);
  } catch (error) {
    console.error("Error:", error);
  }
}

ejecutarProceso();