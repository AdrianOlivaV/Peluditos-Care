const validateServicePhotos = (files) => {
    const result = {
        isValid: true,
        errors: []
    };

    for (let file of files) {
        if (!file.type.startsWith("image/")) {
            result.isValid = false;
            result.errors.push("Todos los archivos deben ser imágenes.");
            break;
        }
    }

    return result;
};
export{validateServicePhotos};