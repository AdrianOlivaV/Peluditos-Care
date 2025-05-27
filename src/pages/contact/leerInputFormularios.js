const leerInputsFormulario = ( formulario )=>{
    const newUser = {
        name : formulario.elements["nombre"].value,
        
        firstName: formulario.elements["apellido"].value,
        celNumber: formulario.elements["telefono"].value,
        date:formulario.elements["motivo"].value,
        description:formulario.elements["descripcion"].value,
               
        checkbox: formulario.elements["terminos-condiciones"].checked
    }
    console.table(newUser);
    return newUser;
}
export { leerInputsFormulario };