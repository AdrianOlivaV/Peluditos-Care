const validateCaregiverCertificate = (file) => {
    const result = {
        isValid: true,
        errors: []
    };

    if (!file) {
        result.isValid = false;
        result.errors.push("El certificado es obligatorio.");
        return result;
    }

    // Validar tipo (por ejemplo, solo PDF)
    if (file.type !== "application/pdf") {
        result.isValid = false;
        result.errors.push("El certificado debe ser un archivo PDF.");
    }

    return result;
};

export { validateCaregiverCertificate };

