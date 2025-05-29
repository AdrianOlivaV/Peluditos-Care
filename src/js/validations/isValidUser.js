import { validateName } from "./validateName.js";
import { validateLastName } from "./validateLastname.js";
import { validateTelefono } from "./validateTel.js";
import { validateDescripction } from "./validateDescription.js";
import { validateTerminosCondiciones } from "./validateCheck.js";

/**
 * 
 * @param {*} user 
 */

const isUserValid = (user) => {
    const result = {
        isValid: true,
        errors: []
    };
    //validacion del nombre
    const nameValidation = validateName(user.nombre);
    if( nameValidation.isValid === false){
        result.isValid = false;
        result.errors.push(nameValidation.errors);
    }   

    //validacion del apellido
    const lastNameValidate = validateLastName(user.apellido);
    if( lastNameValidate.isValid === false){
        result.isValid = false;
        result.errors.push(lastNameValidate.errors);
    }

    //validacion del numero
    const telefonoValidate = validateTelefono(user.telefono);
    if( telefonoValidate.isValid === false){
        result.isValid = false;
        result.errors.push(telefonoValidate.errors);
    }

    //validacion de la descripcion 
    const validarDescripcion = validateDescripction(user.descripcion);
    if( validateDescripction.isValid === false){
        result.isValid = false;
        result.errors.push(validateDescripction.errors);
    }

    //validacion del check
    const check = validateTerminosCondiciones(user.check);
    if(validateTerminosCondiciones.isUserValid === false){
        result.isValid = false;
        result.errors.push(validateTerminosCondiciones.errors)
    }

}

export {isUserValid};