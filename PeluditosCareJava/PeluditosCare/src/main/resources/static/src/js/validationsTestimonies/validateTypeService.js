
const validateTypeService = (type) => {
    const result = { isValid: true, errors: [] };

    // Lista de opciones válidas
    const validTypes = 
    ["Paseo Matutino",
        "Paseo Nocturno",
        "Hospedaje",
        "Guarderia",
        "Visitas a domicilio",
        "Baño"
    ];

    if (!type.trim()) {
        result.isValid = false;
        result.errors.push("El tipo de servicio es obligatorio.");
    } else if (!validTypes.includes(type)) {
        result.isValid = false;
        result.errors.push("Selecciona un tipo de servicio válido.");
    }

    return result;
};

export { validateTypeService };

