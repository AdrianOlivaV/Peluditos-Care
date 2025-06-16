import { validateEmailLogin } from "./validateEmailLogin.js";
import { validatePasswordLogin } from "./validatePasswordLogin.js";

const isUserValidLogin = (user) => {
    const result = {
        isValid: true,
        errors: []
    };

    //validacion del correo ingresado en el Login
    const emailValidate = validateEmailLogin(user.email);
    if (emailValidate.isValid === false) {
        result.isValid = false;
        result.errors.push(emailValidate.errors);
    }

    //validacion de la contraseña
    const passwordValidate = validatePasswordLogin(user.password);
    if (passwordValidate.isValid === false) {
        result.isValid = false;
        result.errors.push(passwordValidate.errors);
    }

    // Validación contra usuario
    const userDB = {
        email: "usuario@ejemplo.com",
        password: "12345678"
    };

    if (result.isValid) {
        if (user.correo !== userDB.correo || user.password !== userDB.password) {
            result.isValid = false;
            result.errors.push("Usuario o contraseña incorrectos.");
        }
    }

    return result;

    return email === userDB.email && password === userDB.password;
}


export { isUserValidLogin };