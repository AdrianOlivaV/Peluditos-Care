const validateDescription = (description) => {
    const result = {
        isValid: true,
        errors: []
    };

    if( description === "" ){
        result.isValid = false;
        alert("La descripción no debe de estar vacía");
    } else if (description.length < 5 ) {
        result.isValid = false;
        alert("Este campo debe de tener al menos 15 caracteres");
    } 

    return result;

}

export { validateDescription };