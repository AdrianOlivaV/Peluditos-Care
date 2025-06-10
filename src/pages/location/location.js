<<<<<<< HEAD
import insertMainHeader from '../../modules/header/header.js';
import insertMainFooter from '../../modules/footer/footer.js';

insertMainHeader(document.getElementById("header"));
insertMainFooter(document.getElementById("footer"));

document.addEventListener("DOMContentLoaded", () => {
    const headerContainer = document.getElementById("header");
    if (headerContainer) {
        insertMainHeader(headerContainer);
    } else {
        console.warn('Elemento con id="header" no encontrado en el DOM.');
    }

    const footerContainer = document.getElementById("footer");
    if (footerContainer) {
        insertMainFooter(footerContainer);
    } else {
        console.warn('Elemento con id="footer" no encontrado en el DOM.');
    }
});
=======
import insertMainHeader from "../../modules/header/header.js";
import footer from "../../modules/footer/footer.js";

insertMainHeader(document.getElementById("header"));
footer(document.getElementById("footer"));
>>>>>>> 288111b50d71af35848c59f1baaf9565451facdd
