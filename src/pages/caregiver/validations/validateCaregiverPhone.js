const validateCaregiverPhone = (telefono) => {
    const result = {
        isValid: true,
        errors: []
    };

    // El campo está vacío
    if (!telefono) {
        result.isValid = false;
        result.errors.push("Debes ingresar un número de teléfono.");
        return result;
    }

    // No es numérico o contiene caracteres especiales
    if (!/^\d+$/.test(telefono)) {
        result.isValid = false;
        result.errors.push("El número de teléfono solo debe contener dígitos (sin letras ni símbolos).");
    }

    // No tiene 10 dígitos
    if (telefono.length !== 10) {
        result.isValid = false;
        result.errors.push("El número de teléfono debe tener exactamente 10 dígitos.");
    }

    return result;
};

export { validateCaregiverPhone };
