const validateExtraFields = (user) => {
    const result = {
        isValid: true,
        errors: []
    };

    // Dirección
    if (!user.address || user.address.length < 3) {
        result.isValid = false;
        result.errors.push("La dirección debe tener al menos 3 caracteres.");
    }

    // Ciudad
    if (!user.city || user.city.length < 3) {
        result.isValid = false;
        result.errors.push("La ciudad debe tener al menos 3 caracteres.");
    } else if (!/^[a-zA-Z0-9\s]+$/.test(user.city)) {
        result.isValid = false;
        result.errors.push("La ciudad no debe contener caracteres especiales.");
    }

    // Código Postal
    if (!/^\d{4,6}$/.test(user.zipCode)) {
        result.isValid = false;
        result.errors.push("El código postal debe ser numérico y tener entre 4 y 6 dígitos.");
    }

    // Sobre el cuidador
    if (!user.about || user.about.length < 10) {
        result.isValid = false;
        result.errors.push("Describe un poco más sobre ti (mínimo 10 caracteres).");
    }

    return result;
};

export { validateExtraFields };
