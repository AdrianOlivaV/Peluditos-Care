
const readInputsLogin = ( formularioLogin )=>{
    const newSesion = {
        email : formularioLogin.elements["email"].value,
        password : formularioLogin.elements["password"].value
    }
    return newSesion;
}

export { readInputsLogin };