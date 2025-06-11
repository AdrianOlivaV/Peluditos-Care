const validatePetPhoto = (file) => {
    const result = {
        isValid: true,
        errors: []
    };



    // Verifica que el tipo de archivo sea algun tipo de imagen
    if (!file.type.startsWith("image/")) {
        result.isValid = false;
        result.errors.push("El archivo seleccionado no es una imagen válida.");

    }

    return result;
};

export { validatePetPhoto };