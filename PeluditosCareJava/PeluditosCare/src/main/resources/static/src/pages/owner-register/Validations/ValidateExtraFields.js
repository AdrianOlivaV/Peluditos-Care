const validateExtraFields = (user) => {
    const result = {
        isValid: true,
        errors: []
    };
    // Dirección
    if (!user.street || user.street.length < 3) {
        result.isValid = false;
        result.errors.push("La dirección debe tener al menos 3 caracteres.");

    }

    // Ciudad
    if (!user.city || user.city.length < 3) {
        result.isValid = false;
        result.errors.push("La ciudad debe tener al menos 3 caracteres.");

    }else if (!/^[a-zA-Z0-9]+$/.test(user.city)) {
        result.isValid = false;
        result.errors.push("Ciudad no debe contener caracteres especiales");

    }

    // Código Postal
    if (!/^\d{4,6}$/.test(user.zip_code)) {
        result.isValid = false;
        result.errors.push("El código postal debe ser numérico de 4 a 6 dígitos.");

    }else if (!/^[a-zA-Z0-9]+$/.test(user.zip_code)) {
        result.isValid = false;
        result.errors.push("El código postal no debe contener caracteres especiales");

    }

    // Sobre el dueño
    if (!user.about_me || user.about_me.length < 10) {
        result.isValid = false;
        result.errors.push("Describe un poco más sobre ti (mínimo 10 caracteres).");

    }

    const pet = user.pets[0];

    // Pet Name
     if (!pet.name || pet.name.length < 2) {
        result.isValid = false;
        result.errors.push("El nombre de la mascota debe tener al menos 2 caracteres.");

    }else if (!/^[a-zA-Z0-9]+$/.test(pet.name)) {
        result.isValid = false;
        result.errors.push("El nombre de la mascota no debe contener caracteres especiales");

    } 

    // Pet Attitude
     if (!pet.behavior || pet.behavior.length < 3) {
        result.isValid = false;
        result.errors.push("El comportamiento de la mascota debe tener al menos 3 caracteres.");

    }else if (!/^[a-zA-Z0-9]+$/.test(pet.behavior)) {
        result.isValid = false;
        result.errors.push("El comportamiento no debe contener caracteres especiales");

    }

    // Edad Mascota
    if (isNaN(pet.age) || pet.age < 0) {
        result.isValid = false;
        result.errors.push("La edad de la mascota debe ser un número positivo.");

    }

    // Descripción Mascota
    if (!pet.description || pet.description.length < 10) {
        result.isValid = false;
        result.errors.push("Describe mejor a tu mascota (mínimo 10 caracteres).");

    } 

    return result;
};

export { validateExtraFields };