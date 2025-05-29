const validateDescripction = (descripcion) => {
    const result = {
        isValid: true,
        errors: []
    };

    if( descripcion === "" ){
        result.isValid = false;
        alert("La descripción no debe de estar vacía");
    } else if (descripcion.length < 5 ) {
        result.isValid = false;
        alert("Este campo debe de tener al menos 15 caracteres");
    } 

    return result;

}

export { validateDescripction };