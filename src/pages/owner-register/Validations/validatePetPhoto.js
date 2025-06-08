const validatePetPhoto = (file) => {
    const result = {
        isValid: true,
        errors: []
    };



    // Verifica el tipo de archivo
    if (!file.type.startsWith("image/")) {
        result.isValid = false;
        result.errors.push("El archivo seleccionado no es una imagen válida.");
        alert("El archivo seleccionado no es una imagen válida.");
    }

    return result;
};

export { validatePetPhoto };