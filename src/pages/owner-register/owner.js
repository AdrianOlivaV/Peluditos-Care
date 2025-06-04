import insertMainHeader from "../../modules/header/header.js";
import footer from "../../modules/footer/footer.js";

insertMainHeader(document.getElementById("header"));
footer(document.getElementById("footer"));


document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.formulario-owner');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('¡Formulario enviado con éxito!');
        form.reset();
    });
});
