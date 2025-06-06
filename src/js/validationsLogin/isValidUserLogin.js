import { validateEmailLogin } from "./validateEmailLogin.js";
import { validatePasswordLogin } from "./validatePasswordLogin.js";

const isUserValidLogin = (user) => {
    const result = {
        isValid: true,
        errors: []
    };
    
    //validacion del correo ingresado en el Login
    const emailValidate = validateEmailLogin(user.correo);
    if( emailValidate.isValid === false){
        result.isValid = false;
        result.errors.push(emailValidate.errors);
    }

    //validacion de la contraseña
    const passwordValidate = validatePasswordLogin(user.password);
    if( passwordValidate.isValid === false){
        result.isValid = false;
        result.errors.push(passwordValidate.errors);
    }


}

export {isUserValidLogin};