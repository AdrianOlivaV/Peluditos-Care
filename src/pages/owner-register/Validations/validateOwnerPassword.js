const validateOwnerPassword = (password, confirmPassword) => {
    const result = {
        isValid: true,
        errors: []
    };

    if (password.length < 8) {
        result.isValid = false;
        result.errors.push("La contraseña debe tener al menos 8 caracteres.");

    } 
     if (password !== confirmPassword) {
        result.isValid = false;
        result.errors.push("Las contraseñas no coinciden.");

    }

    return result;
};

export { validateOwnerPassword };