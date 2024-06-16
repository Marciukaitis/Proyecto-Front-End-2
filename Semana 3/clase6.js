/* -------------------------------------------------------------------------- */
/*                               WEB REACTIVA                                 */
/* -------------------------------------------------------------------------- */ 

// Controlar eventos

// Un evento es aquello que se desencadena por alguna acción del usuario
// o por algo que transcurre en el navegador

// onload: cuando el objeto window se termina de cargar en el objeto document
// onclick: cuando se hace clic en el elemento al cual se está aplicando
// ondblclick: cuando se hace doble clic
// onmouseover: cuando se pasa el mouse por encima de un elemento
// onkeydown: cuando se presiona determinada tecla
// onsubmit: cuando se envía un formulario

// Controlar eventos
// 1. Seleccionar el elemento que se estará "mirando"
// 2. Saber qué evento se estará "escuchando"
// 3. Qué acción o acciones de dispararán cuando el evento ocurra





/* -------------------------------------------------------------------------- */
/*                        [4] FUNCION: marcar favorito                        */
/* -------------------------------------------------------------------------- */

function marcarFavorito() {
    // seleccionar todos los "corazones";
    // seleccionar todos los elementos que tengan la clase fa-heart
    const botonesLike = document.querySelectorAll(".fa-heart");
    console.log(botonesLike);


    botonesLike.forEach(function(boton) {
        boton.addEventListener("click", function (evento) {

            console.log(evento);
            console.log(evento.target);
            console.log(evento.target.id);

            // recuperar el id del álbum al cual se marcó como favorito
            let albumId = evento.target.id;

            albumesFamosos.forEach( album => {
                if (albumId == album.id) {
                    console.log("Coincide " + album.id + " " + album.nombre);
                    console.log(album.like);
                    album.like = !album.like;
                    console.log(album.like);
                }
            })

            // Renderizar nuevamente los álbumes para que refleje los favoritos
            renderizarAlbumes(albumesFamosos);
            mostrarDatosEnPerfil(albumesFamosos);

            marcarFavorito();
        })
    })
}

marcarFavorito();



/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                         [5] FUNCION: Eliminar álbum                        */
/* -------------------------------------------------------------------------- */
// Debemos desarrollar la funcion de eliminar un album.
// Para esto le vamos a  preguntar al usuario cual quiere eliminar.

// Vamos a utilizar eventos:
// 1- "Escuchar" el evento para detectar cuando el usuario presiona la tecla f
// 2- Una vez detectada la tecla, pedir al usuario el nombre del album a eliminar
// 3- Buscar la posición del álbum buscado en el array (findIndex() por ejemplo)
// 4- Si la búsqueda da un resultado válido, borrar el objeto del array
// 5- Llamar a las funciones de renderizar y marcar favorito para que sean nuevamente aplicadas.

window.addEventListener("keydown", (e) => { 
    eliminarAlbum(e);
 })

function eliminarAlbum(e) {
    document.addEventListener('keydown', (e) => {
if ( e.key === "f") {
    const albumName= prompt ( "Ingrese el nombre del album que desea eliminar :")
 const albumAEliminar = albumesFamosos.nombre === albumName
    }  albumesFamosos.remove(albumAEliminar)
    
})
}
