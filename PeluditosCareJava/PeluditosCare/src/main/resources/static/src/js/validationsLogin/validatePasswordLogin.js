
const validatePasswordLogin = (password) => {
    const result = {
        isValid: true,
        errors: []
    };

    if (password === "") {
        result.isValid = false;
        result.errors.push("Debes ingresar una contraseña.");
    }

    return result;
}

export { validatePasswordLogin };