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

    // !!Importante: btoa es bueno para pruebas, más no en producción
    // Validación contra usuario guardado en localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (result.isValid) {
        const inputEmail = btoa(user.email);
        const inputPassword = btoa(user.password);

        if (!storedUser || inputEmail !== storedUser.email || inputPassword !== storedUser.password) {
            result.isValid = false;
            result.errors.push("Usuario o contraseña incorrectos.");
        }
        console.table("El correo es :" + inputEmail + 
                        "\n La contraseña es :" + inputPassword); //solo para probar
    }

    return result;
}


export { isUserValidLogin };