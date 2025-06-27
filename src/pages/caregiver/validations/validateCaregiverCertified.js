const validateCaregiverCertified = (file) => {
    const result = {
        isValid: true,
        errors: []
    };

    if (!file) {
        result.isValid = false;
        result.errors.push("Debes subir un certificado o carta de recomendación.");
        return result;  // Salir para evitar validar tipo sin archivo
    }

    const allowedTypes = [
        "image/",  // Cualquier tipo de imagen
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ];

    const isValidType = allowedTypes.some(type => file.type.startsWith(type));

    if (!isValidType) {
        result.isValid = false;
        result.errors.push("El archivo debe ser una imagen, PDF o documento de Word.");
    }

    return result;
};

export { validateCaregiverCertified };
