import { validateName } from "./validateName.js";
import { validateLastName } from "./validateLastname.js";
import { validateTelephone } from "./validateTel.js";
import { validateDescription } from "./validateDescription.js";
import { validateTermsAndConditions } from "./validateCheck.js";
import { validateEmail } from "./validateEmail.js";

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
    const nameValidation = validateName(user.name);
    if( nameValidation.isValid === false){
        result.isValid = false;
        result.errors.push(nameValidation.errors);
    }   

    //validacion del apellido
    const lastNameValidate = validateLastName(user.lastName);
    if( lastNameValidate.isValid === false){
        result.isValid = false;
        result.errors.push(lastNameValidate.errors);
    }

    //validacion del correo
    const emailValidate = validateEmail(user.mail);
    if( emailValidate.isValid === false){
        result.isValid = false;
        result.errors.push(emailValidate.errors);
    }

    //validacion del numero
    const telephoneValidate = validateTelephone(user.telephone);
    if( telephoneValidate.isValid === false){
        result.isValid = false;
        result.errors.push(telephoneValidate.errors);
    }

    //validacion de la descripcion 
    const descriptionValidate = validateDescription(user.description);
    if( descriptionValidate.isValid === false){
        result.isValid = false;
        result.errors.push(validateDescription.errors);
    }

    //validacion del check
    const check = validateTermsAndConditions(user.check);
    if(check.isUserValid === false){
        result.isValid = false;
        result.errors.push(validateTermsAndConditions.errors)
    }

}

export {isUserValid};