
const leerInputsLogin = ( formularioLogin )=>{
    const newSesion = {
        correo : formularioLogin.elements["email"].value,
        password : formularioLogin.elements["password"].value
    }
    console.table(newSesion);
    return newSesion;
}

export { leerInputsLogin };