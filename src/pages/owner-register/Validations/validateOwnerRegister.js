import {validateOwnerName} from "./validateOwnerName.js"


/**
 * 
 * @param {*} user 
 */

const isNewRegisterValid = (user) => {
    const result = {
        isValid: true,
        errors: []
    };

        //validacion del nombre
    const nameValidation = validateOwnerName(user.nombre);
    if( nameValidation.isValid === false){
        result.isValid = false;
        result.errors.push(nameValidation.errors);
    }   

};

export {isNewRegisterValid };