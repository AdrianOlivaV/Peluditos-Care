const validateExtraFields = (user) => {
    const result = {
        isValid: true,
        errors: []
    };

    // Validar calle
    if (!user.calle || user.calle.length < 3) {
        result.isValid = false;
        result.errors.push("La calle debe tener al menos 3 caracteres.");
    }

    // Validar número (puede ser numérico o alfanumérico pero no vacío)
    if (!user.numero || user.numero.length === 0) {
        result.isValid = false;
        result.errors.push("El número de domicilio es obligatorio.");
    }

    // Validar código postal (debe ser numérico y tener 5 dígitos)
    if (!/^\d{5}$/.test(user.cp)) {
        result.isValid = false;
        result.errors.push("El código postal debe tener 5 dígitos numéricos.");
    }

    // Validar municipio
    if (!user.municipio || user.municipio.length < 3) {
        result.isValid = false;
        result.errors.push("El municipio debe tener al menos 3 caracteres.");
    }

    // Validar descripción sobre ti (opcional, pero si está debe tener mínimo 10 caracteres)
    if (user.sobreTi && user.sobreTi.length > 0 && user.sobreTi.length < 10) {
        result.isValid = false;
        result.errors.push("La descripción sobre ti debe tener al menos 10 caracteres si decides escribir algo.");
    }

    // Validar términos y condiciones
    if (!user.terminos) {
        result.isValid = false;
        result.errors.push("Debes aceptar los términos y condiciones.");
    }

    return result;
};

export { validateExtraFields };
