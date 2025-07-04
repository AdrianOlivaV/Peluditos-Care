import insertMainHeader from '../../modules/header/header.js';
import insertMainFooter from '../../modules/footer/footer.js';


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


