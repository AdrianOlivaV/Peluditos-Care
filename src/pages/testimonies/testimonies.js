import insertMainHeader from "../../modules/header/header.js";
import footer from "../../modules/footer/footer.js";
import testimoniesList from './testimoniesList.js';
import { validateTestimonyFields } from "../../js/validationsTestimonies/validateTestimonyFields.js";

insertMainHeader(document.getElementById("header"));
footer(document.getElementById("footer"));

// ======================================================================================

//Mostrar las tarjetas de los testimonios
function showPublications() {
   const container = document.getElementById("testimoniesCard");
   container.innerHTML = "";

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
               <button class="btn btn-sm btn-primary btn-edit">Editar</button>
               <button class="btn btn-sm btn-danger btn-delete">Eliminar</button>
            </div>
         </div>
      `;

      // Botón Eliminar
      const btnDelete = card.querySelector(".btn-delete");

      btnDelete.addEventListener("click", () => {
         deletePublication(index);
      });

      // Botón Editar
      const btnEditar = card.querySelector(".btn-edit");

      btnEditar.addEventListener("click", () => {
         editPublication(index);
      });

      // Añade la tarjeta card al final del testimoniesCard, para que se muestre en la página.
      container.appendChild(card);
   });
}

// Añade una nueva publicación
function addPublication(objeto) {
   testimoniesList.push(objeto);
   showPublications();
}

// Borra la tarjeta del testimonio
function deletePublication(index) {
   testimoniesList.splice(index, 1);
   showPublications();
}

// Edita la publicación
function editPublication(index) {
   const pub = testimoniesList[index]; // Testimonio a editar 
   const newName = prompt("Editar nombre:", pub.name);
   const newComment = prompt("Editar comentario:", pub.comment);
   const newType = prompt("Editar tipo de servicio:", pub.type_service);

   // Valida que los compos no se cancelen en el promt y así evitar errores en la edición
   if (newName && newComment && newType) {
      testimoniesList[index] = {
         ...pub, // copia todo lo que ya tenía el objeto 
         name: newName,
         comment: newComment,
         type_service: newType
      };
      showPublications(); // Vuelve a mostrar las tarjetas
   }
}

// Botón Agregar desde el formulario
const btnAdd = document.getElementById("add-testimonie");

btnAdd.addEventListener("click", () => {
   const modal = new bootstrap.Modal(document.getElementById('modalForm'));
   document.getElementById("formTestimonie").reset();
   document.getElementById("alertaErrores").classList.add("d-none");
   modal.show();
});

const form = document.getElementById("formTestimonie");
form.addEventListener("submit", (e) => {
   e.preventDefault();

   const testimonie = {
      name: document.getElementById("name").value.trim(),
      location: document.getElementById("location").value.trim(),
      comment: document.getElementById("comment").value.trim(),
      type_service: document.getElementById("typeService").value.trim(),
      img: document.getElementById("imgURL").value.trim()
   };

   const alerta = document.getElementById("alertaErrores");
   const validacion = validateTestimonyFields(testimonie);

   if (!validacion.isValid) {
      alerta.innerHTML = validacion.errors.join("<br>");
      alerta.classList.remove("d-none");
      return;
   }

   alerta.classList.add("d-none");
   addPublication(testimonie);
   bootstrap.Modal.getInstance(document.getElementById('modalForm')).hide();
});




// Botón Borrar Todo

const btnDeleteAll = document.getElementById("delete-all");

btnDeleteAll.addEventListener("click", () => {
   if (confirm('¿Seguro que deseas borrar todos los testimonios?')) {
      testimoniesList.length = 0;
      showPublications();
   }
});

// Mostrar al cargar
document.addEventListener('DOMContentLoaded', showPublications);
