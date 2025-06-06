const leerInputsForm = ( formulario )=>{
    const newOwnerRegister = {
        nombre : formulario.elements["ownerName"].value.trim().toLowerCase(),
        apellido : formulario.elements["ownerLastName"].value.trim().toLowerCase(),
        fecha : formulario.elements["ownerBirthDate"].value,
        correo : formulario.elements["ownerEmail"].value.trim().toLowerCase(),
        telefono : formulario.elements["ownerPhone"].value.trim(),
        contraseña : formulario.elements["ownerPassword"].value.trim(), 
        confContraseña : formulario.elements["confirmOwnerPassword"].value.trim(),
        direccion : formulario.elements["ownerAdress"].value.trim().toLowerCase(),
        ciudad : formulario.elements["ownerCity"].value.trim().toLowerCase(),
        cpostal : formulario.elements["ownerZipCode"].value.trim(),
        sobreDueño : formulario.elements["ownerAbout"].value.trim().toLowerCase(),
        nombreMascota : formulario.elements["petName"].value.trim().toLowerCase(),
        especieMascota: formulario.elements["petSpecies"].value,
        comportamientoMascota : formulario.elements["petAttitude"].value.trim().toLowerCase(),
        edadMascota : formulario.elements["petAge"].value,
        descripcionMascota : formulario.elements["petDescription"].value.trim().toLowerCase(),
        imagenMascota : formulario.elements["petPhoto"].files[0] || null,
        check: formulario.elements["ownerTerms"].checked
    }
    console.table(newOwnerRegister);
    return newOwnerRegister;
}
export { leerInputsForm };