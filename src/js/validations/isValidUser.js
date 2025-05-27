import { validateName } from "./validateName.js";

/**
 * 
 * @param {*} user 
 */

const isUserValid = (user) => {
    const result = {
        isValid: true,
        errors: []
    };

    const nameValidation = validateName(user.nombre);

     /* 
    Validar todos los atributos del usuario 
    */
    if( nameValidation.isValid === false){
        result.isValid = false;
        result.errors.push(nameValidation.errors);
    }
}

export {isUserValid};
