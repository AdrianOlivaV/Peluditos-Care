import {insertMainHeader as menu} from "../../modules/header/header.js";
menu(document.getElementById("header"));

import{insertMainFooter as footer} from "../../modules/footer/footer.js";
footer(document.getElementById("footer"));


import {leerInputsFormulario as formulario} from "./leerInputFormularios.js"
formulario(document.getElementById("formulario"));
