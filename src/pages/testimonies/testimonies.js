import insertMainHeader from "../../modules/header/header.js";
import footer from "../../modules/footer/footer.js";
import testimoniesList from './testimoniesList.js';
import { validateTestimonyFields } from "../../js/validationsTestimonies/validateTestimonyFields.js";

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

// Botón Agregar desde el formulario
const btnAgregar = document.getElementById("agregar-testimonio");

btnAgregar.addEventListener("click", () => {
   const modal = new bootstrap.Modal(document.getElementById('modalFormulario'));
   document.getElementById("formularioTestimonio").reset();
   document.getElementById("alertaErrores").classList.add("d-none");
   modal.show();
});

const formulario = document.getElementById("formularioTestimonio");
formulario.addEventListener("submit", (e) => {
   e.preventDefault();

   const testimonio = {
      name: document.getElementById("nombre").value.trim(),
      location: document.getElementById("ubicacion").value.trim(),
      comment: document.getElementById("comentario").value.trim(),
      type_service: document.getElementById("tipoServicio").value.trim(),
      img: document.getElementById("imagenURL").value.trim()
   };

   const alerta = document.getElementById("alertaErrores");
   const validacion = validateTestimonyFields(testimonio);

   if (!validacion.isValid) {
      alerta.innerHTML = validacion.errors.join("<br>");
      alerta.classList.remove("d-none");
      return;
   }

   alerta.classList.add("d-none");
   agregarPublicacion(testimonio);
   bootstrap.Modal.getInstance(document.getElementById('modalFormulario')).hide();
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
