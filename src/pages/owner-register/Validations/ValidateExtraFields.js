const validateExtraFields = (user) => {
    const result = {
        isValid: true,
        errors: []
    };

    // Dirección
    if (!user.direccion || user.direccion.length < 3) {
        result.isValid = false;
        result.errors.push("La dirección debe tener al menos 3 caracteres.");
/*         alert("La dirección debe tener al menos 3 caracteres."); */
    }

    // Ciudad
    if (!user.ciudad || user.ciudad.length < 3) {
        result.isValid = false;
        result.errors.push("La ciudad debe tener al menos 3 caracteres.");
/*         alert("La ciudad debe tener al menos 3 caracteres."); */
    }else if (!/^[a-zA-Z0-9]+$/.test(user.ciudad)) {
        result.isValid = false;
        result.errors.push("Ciudad no debe contener caracteres especiales");
/*         alert("Ciudad no debe contener caracteres especiales"); */
    }

    // Código Postal
    if (!/^\d{4,6}$/.test(user.cpostal)) {
        result.isValid = false;
        result.errors.push("El código postal debe ser numérico de 4 a 6 dígitos.");
/*         alert("El código postal debe ser numérico de 4 a 6 dígitos."); */
    }else if (!/^[a-zA-Z0-9]+$/.test(user.cpostal)) {
        result.isValid = false;
        result.errors.push("El código postal no debe contener caracteres especiales");
/*         alert("El código postal no debe contener caracteres especiales"); */
    }

    // Sobre el dueño
    if (!user.sobreDueño || user.sobreDueño.length < 10) {
        result.isValid = false;
        result.errors.push("Describe un poco más sobre ti (mínimo 10 caracteres).");
/*         alert("Describe un poco más sobre ti (mínimo 10 caracteres)."); */
    }/* else if (!/^[a-zA-Z0-9]+$/.test(user.sobreDueño)) {
        result.isValid = false;
        result.errors.push("Tu descripción no debe contener caracteres especiales");
/*         alert("Tu descripción no debe contener caracteres especiales"); 
    } */

    // Pet Name
    if (!user.nombreMascota || user.nombreMascota.length < 2) {
        result.isValid = false;
        result.errors.push("El nombre de la mascota debe tener al menos 2 caracteres.");
/*         alert("El nombre de la mascota debe tener al menos 2 caracteres."); */
    }else if (!/^[a-zA-Z0-9]+$/.test(user.nombreMascota)) {
        result.isValid = false;
        result.errors.push("El nombre de la mascota no debe contener caracteres especiales");
/*         alert("El nombre de la mascota no debe contener caracteres especiales"); */
    }

    // Pet Attitude
    if (!user.comportamientoMascota || user.comportamientoMascota.length < 3) {
        result.isValid = false;
        result.errors.push("El comportamiento de la mascota debe tener al menos 3 caracteres.");
/*         alert("El comportamiento de la mascota debe tener al menos 3 caracteres."); */
    }else if (!/^[a-zA-Z0-9]+$/.test(user.comportamientoMascota)) {
        result.isValid = false;
        result.errors.push("El comportamiento no debe contener caracteres especiales");
/*         alert("El comportamiento no debe contener caracteres especiales"); */
    }

    // Edad Mascota
    if (isNaN(user.edadMascota) || user.edadMascota < 0) {
        result.isValid = false;
        result.errors.push("La edad de la mascota debe ser un número positivo.");
/*         alert("La edad de la mascota debe ser un número positivo."); */
    }

    // Descripción Mascota
    if (!user.descripcionMascota || user.descripcionMascota.length < 10) {
        result.isValid = false;
        result.errors.push("Describe mejor a tu mascota (mínimo 10 caracteres).");
/*         alert("Describe mejor a tu mascota (mínimo 10 caracteres)."); */
    }/* else if (!/^[a-zA-Z0-9]+$/.test(user.descripcionMascota)) {
        result.isValid = false;
        result.errors.push("La descripción de tu mascota no debe contener caracteres especiales");
/*         alert("La descripción de tu mascota no debe contener caracteres especiales"); 
    } */

    return result;
};

export { validateExtraFields };