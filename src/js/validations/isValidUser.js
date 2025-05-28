import { validateName } from "./validateName.js";
import { validateLastName } from "./validateLastname.js";

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

}

export {isUserValid};