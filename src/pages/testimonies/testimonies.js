import insertMainHeader from "../../modules/header/header.js";
import footer from "../../modules/footer/footer.js";
import testimoniesList from './testimoniesList.js';

insertMainHeader(document.getElementById("header"));
footer(document.getElementById("footer"));

// ======================================================================================

//Mostrar las tarjetas de los testimonios
function mostrarPublicaciones() {
   const contenedor = document.getElementById("testimoniesCard");
   contenedor.innerHTML = "";

   testimoniesList.forEach((pub, index) => {
      const card = document.createElement("div");
      card.className = "col-md-3 mb-4";
      card.innerHTML = `
         <div class="card h-100">
            <img src="${pub.img}" class="card-img-top" alt="${pub.name}">
            <div class="card-body">
               <h5 class="card-title">${pub.name}</h5>
               <h6 class="card-subtitle mb-2 text-muted">${pub.type_service}</h6>
               <p class="card-text">${pub.comment}</p>
            </div>
            <div class="card-footer text-center d-flex justify-content-center gap-2">
               <button class="btn btn-sm btn-danger btn-borrar">Eliminar</button>
               <button class="btn btn-sm btn-primary btn-editar">Editar</button>
            </div>
         </div>
      `;

      // Botón Eliminar
      const btnEliminar = card.querySelector(".btn-borrar");

      btnEliminar.addEventListener("click", () => {
         borrarPublicacion(index);
      });

      // Botón Editar
      const btnEditar = card.querySelector(".btn-editar");

      btnEditar.addEventListener("click", () => {
         editarPublicacion(index);
      });

      // Añade la tarjeta card al final del testimoniesCard, para que se muestre en la página.
      contenedor.appendChild(card);
   });
}

// Añade una nueva publicación
function agregarPublicacion(objeto) {
   testimoniesList.push(objeto);
   mostrarPublicaciones();
}

// Borra la tarjeta del testimonio
function borrarPublicacion(index) {
   testimoniesList.splice(index, 1);
   mostrarPublicaciones();
}

// Edita la publicación
function editarPublicacion(index) {
   const pub = testimoniesList[index]; // Testimonio a editar 
   const nuevoNombre = prompt("Editar nombre:", pub.name);
   const nuevoComentario = prompt("Editar comentario:", pub.comment);
   const nuevoTipo = prompt("Editar tipo de servicio:", pub.type_service);

   // Valida que los compos no se cancelen en el promt y así evitar errores en la edición
   if (nuevoNombre && nuevoComentario && nuevoTipo) {
      testimoniesList[index] = {
         ...pub, // copia todo lo que ya tenía el objeto 
         name: nuevoNombre,
         comment: nuevoComentario,
         type_service: nuevoTipo
      };
      mostrarPublicaciones(); // Vuelve a mostrar las tarjetas
   }
}

// Botón Agregar
const btnAgreagr = document.getElementById("agregar-testimonio");

btnAgreagr.addEventListener("click", () => {
   const nuevoTestimonio = {
      name: 'Prueba',
      location: 'CDMX, Iztapalapa',
      comment: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      type_service: 'Baño',
      img: 'https://petsmileusa.com/cdn/shop/articles/healthy-pet-activities.png?v=1619548965'
   };
   agregarPublicacion(nuevoTestimonio);
});

// Botón Borrar Todo

const btnEliminarTodo = document.getElementById("eliminar-todo");

btnEliminarTodo.addEventListener("click", () => {
   if (confirm('¿Seguro que deseas borrar todos los testimonios?')) {
      testimoniesList.length = 0;
      mostrarPublicaciones();
   }
});

// Mostrar al cargar
document.addEventListener('DOMContentLoaded', mostrarPublicaciones);
