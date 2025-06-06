const leerInputsFormulario = ( formulario )=>{
    const newConsult = {
        nombre : formulario.elements["nombre"].value,
        apellido : formulario.elements["apellido"].value,
        correo : formulario.elements["correo"].value,
        telefono : formulario.elements["telefono"].value,
        motivo : formulario.elements["motivo"].value,
        descripcion : formulario.elements["descripcion"].value, 
        check: formulario.elements["terminos-condiciones"].checked
    }
    console.table(newConsult);
    return newConsult;
}
export { leerInputsFormulario };