const validatePetPhoto = (picture) => {
    const result = {
        isValid: true,
        errors: []
    };

    // Validar que picture exista y sea string antes de usar startsWith
    if (!picture || typeof picture !== 'string' || !picture.startsWith("http")) {
        result.isValid = false;
        result.errors.push("La foto de la mascota debe ser una URL válida que comience con 'http'.");
    }

    return result;
};

export { validatePetPhoto };