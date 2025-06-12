const validateCaregiverPassword = (password, confirmPassword) => {
    const result = {
        isValid: true,
        errors: []
    };

    if (!password) {
        result.isValid = false;
        result.errors.push("Debes ingresar una contraseña.");
    } else {
        if (password.length < 8) {
            result.isValid = false;
            result.errors.push("La contraseña debe tener al menos 8 caracteres.");
        }

        const secureRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/;
        if (!secureRegex.test(password)) {
            result.isValid = false;
            result.errors.push("La contraseña debe incluir mayúsculas, minúsculas, números y un carácter especial.");
        }
    }

    if (!confirmPassword) {
        result.isValid = false;
        result.errors.push("Debes confirmar la contraseña.");
    } else if (password !== confirmPassword) {
        result.isValid = false;
        result.errors.push("Las contraseñas no coinciden.");
    }

    return result;
};

export { validateCaregiverPassword };
