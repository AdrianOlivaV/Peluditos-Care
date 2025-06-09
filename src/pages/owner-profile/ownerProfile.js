import insertMainHeader from "../../modules/header/header.js"
import insertMainFooter from "../../modules/footer/footer.js";

insertMainHeader(document.getElementById("header"));
insertMainFooter(document.getElementById("footer"))

//-----------------------------------------------------

// ---- Calificación con corazones ---- //
const hearts = document.querySelectorAll(".heart");
const ratingValue = document.getElementById("rating-value");

let currentRating = 0;

// Función para actualizar el estilo de los corazones
function updateHeartRating(rating) {
    hearts.forEach(heart => {
        const value = parseInt(heart.getAttribute("data-value"));
        if (value <= rating) {
            heart.classList.add("active");
        } else {
            heart.classList.remove("active");
        }
    });
    ratingValue.textContent = rating;
}

// Evento al hacer clic en cada corazón
hearts.forEach(heart => {
    heart.addEventListener("click", () => {
        const selectedRating = parseInt(heart.getAttribute("data-value"));
        currentRating = selectedRating;
        updateHeartRating(selectedRating);
        // Aquí se guarda el valor en localStorage, o mandarlo a un backend
        console.log("Nueva calificación:", currentRating);
    });
});

// Inicializa con un valor predefinido
updateHeartRating(0);