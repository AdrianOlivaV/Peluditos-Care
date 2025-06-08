import { validateOwnerName } from "./validateOwnerName.js"
import { validateOwnerLastName } from "./validateOwnerLastName.js";
import { validateOwnerBirthDate } from "./validateOwnerBirthDate.js";
import { validateOwnerEmail } from "./validateOwnerEmail.js";
import { validateOwnerTel } from "./validateOwnerTel.js";
import { validateOwnerPassword } from "./validateOwnerPassword.js";
import { validateExtraFields } from "./ValidateExtraFields.js";
import { validatePetPhoto } from "./validatePetPhoto.js";

/**
 * 
 * @param {*} user 
 */

const isNewRegisterValid = (user) => {
    const result = {
        isValid: true,
        errors: []
    };

    //validacion del nombre
    const nameValidation = validateOwnerName(user.nombre);
    if (nameValidation.isValid === false) {
        result.isValid = false;
        result.errors.push(...nameValidation.errors);
    }
    //validacion del apellido
    const lastNameValidation = validateOwnerLastName(user.apellido);
    if (lastNameValidation.isValid === false) {
        result.isValid = false;
        result.errors.push(...lastNameValidation.errors);
    }
    //validacion de edad
    const birthDateValidation = validateOwnerBirthDate(user.fecha);
    if (birthDateValidation.isValid === false) {
        result.isValid = false;
        result.errors.push(...birthDateValidation.errors);
    }
    //validacion de correo
    const ownerEmailValidation = validateOwnerEmail(user.correo);
    if (ownerEmailValidation.isValid === false) {
        result.isValid = false;
        result.errors.push(...ownerEmailValidation.errors);
    }
    //validacion de Telefono
    const ownerTelValidation = validateOwnerTel(user.telefono);
    if (ownerTelValidation.isValid === false) {
        result.isValid = false;
        result.errors.push(...ownerEmailValidation.errors);
    }
    // Validación de contraseña
    const passwordValidation = validateOwnerPassword(user.contraseña, user.confContraseña);
    if (passwordValidation.isValid === false) {
        result.isValid = false;
        result.errors.push(...passwordValidation.errors);
    }
    // Validación del resto de campos
    const extraFieldsValidation = validateExtraFields(user);
    if (!extraFieldsValidation.isValid) {
        result.isValid = false;
        result.errors.push(...passwordValidation.errors);
    }
    // Validación de foto de la mascota
    const petPhotoValidation = validatePetPhoto(user.imagenMascota);
    if (!petPhotoValidation.isValid) {
        result.isValid = false;
        result.errors.push(...petPhotoValidation.errors);
    }

};

export { isNewRegisterValid };