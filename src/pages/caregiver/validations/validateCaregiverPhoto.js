const validateCertificatePhoto = (file) => {
    const result = {
        isValid: true,
        errors: []
    };

    // Verifica que se haya seleccionado un archivo
    if (!file) {
        result.isValid = false;
        result.errors.push("Debes subir una foto de tu mascota.");
        return result;
    }

    // Verifica que el archivo sea una imagen
    if (!file.type.startsWith("image/")) {
        result.isValid = false;
        result.errors.push("El archivo seleccionado no es una imagen válida.");
    }

    return result;
};

export { validateCertificatePhoto };
