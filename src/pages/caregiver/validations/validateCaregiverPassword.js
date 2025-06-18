const validateCaregiverPassword = (password, confirmPassword) => {
    const result = {
        isValid: true,
        errors: []
    };

    const trimmedPassword = password.trim();
    const trimmedConfirm = confirmPassword.trim();

    if (trimmedPassword.length < 8) {
        result.isValid = false;
        result.errors.push("La contraseña debe tener al menos 8 caracteres.");
    }

    if (trimmedPassword !== trimmedConfirm) {
        result.isValid = false;
        result.errors.push("Las contraseñas no coinciden.");
    }

    return result;
};

export { validateCaregiverPassword };
