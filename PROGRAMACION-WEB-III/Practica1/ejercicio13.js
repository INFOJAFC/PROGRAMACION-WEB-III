//13. Proporcione un ejemplo concreto donde el anidamiento de promesas se puede
//reescribir mejor con async/await haciendo el código más limpio y mantenible

/*function obtenerUsuario() {
  return new Promise(resolve => {
    setTimeout(() => resolve({ id: 1, nombre: "Jorge" }), 1000);
  });
}

function obtenerPublicaciones(usuarioId) {
  return new Promise(resolve => {
    setTimeout(() => resolve([{ id: 101, titulo: "Mi primera publicación" }]), 1000);
  });
}

function obtenerComentarios(publicacionId) {
  return new Promise(resolve => {
    setTimeout(() => resolve(["Buen post", "Muy interesante"]), 1000);
  });
}

// Encadenamiento de promesas
obtenerUsuario()
  .then(usuario => {
    console.log("Usuario:", usuario);
    return obtenerPublicaciones(usuario.id);
  })
  .then(publicaciones => {
    console.log("Publicaciones:", publicaciones);
    return obtenerComentarios(publicaciones[0].id);
  })
  .then(comentarios => {
    console.log("Comentarios:", comentarios);
  })
  .catch(error => console.error("Error:", error));
*/


async function ejecutarProceso() {
  try {
    const usuario = await obtenerUsuario();
    console.log("Usuario:", usuario);

    const publicaciones = await obtenerPublicaciones(usuario.id);
    console.log("Publicaciones:", publicaciones);

    const comentarios = await obtenerComentarios(publicaciones[0].id);
    console.log("Comentarios:", comentarios);
  } catch (error) {
    console.error("Error:", error);
  }
}

ejecutarProceso();