const validateCaregiverName = (nombre) => {
    const result = {
        isValid: true,
        errors: []
    };

    // Eliminar espacios al inicio y fin
    const trimmedName = nombre.trim();

    if (trimmedName.length < 3) {
        result.isValid = false;
        result.errors.push("El nombre debe tener al menos 3 caracteres");
    } else if (trimmedName.length > 20) {
        result.isValid = false;
        result.errors.push("El nombre no debe tener más de 20 caracteres");
    } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(trimmedName)) {
        result.isValid = false;
        result.errors.push("El nombre solo debe contener letras y espacios, sin caracteres especiales");
    }

    return result;
};

export { validateCaregiverName };
