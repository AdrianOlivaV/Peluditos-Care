
const validatePasswordLogin = (password) => {
    const result = {
        isValid: true,
        errors: []
    };

    if (password === "") {
        result.isValid = false;
        result.errors.push("Debes ingresar una contraseña.");
        alert("Debes ingresar una contraseña");
    } else if (password.length < 8) {
        result.isValid = false;
        result.errors.push("Contraseña menor a 8 cacteres");
        alert("Tu contraseña es menor a 8 cacteres");
    }

    return result;
}

export { validatePasswordLogin };