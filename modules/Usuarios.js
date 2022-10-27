class Usuarios{
    constructor (nombre, apellido, email, contrasenia){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.contrasenia = contrasenia;
    }
}


// ****** REGISTRAR USUARIO NUEVO ****** //
// let arrayUsuarios = [];
// let nombreUsuario = "";
// let apellidoUsuario = "";
// let emailUsuario = "";
// let contraseniaUsuario = "";

// nombreUsuario = prompt ("Ingresar nombre");

// while (nombreUsuario === "" || !isNaN(nombreUsuario)){
//     nombreUsuario = prompt ("Dato inválido, ingresar nombre");
// }

// apellidoUsuario = prompt ("Ingresar apellido");

// while (apellidoUsuario === "" || !isNaN(apellidoUsuario)){
//     apellidoUsuario = prompt ("Dato inválido, ingresar apellido");
// }

// emailUsuario =  prompt ("Ingresar correo electrónico");

// while (emailUsuario === "" || !emailUsuario.includes("@") || !emailUsuario.includes(".com")){
//     emailUsuario = prompt ("Correo inválido, ingresar correo electrónico");
// }

// contraseniaUsuario = prompt ("Crear contraseña");

// while (contraseniaUsuario === "" || contraseniaUsuario.length < 8){
//     contraseniaUsuario = prompt ("Contraseña inválida, debe de tener al menos 8 caracteres");
// }

// arrayUsuarios.push (new Usuarios (nombreUsuario, apellidoUsuario, emailUsuario, contraseniaUsuario));


// ****** INGRESO USUARIO ****** //
// emailUsuario = prompt ("Dirección de correo electrónico");
// contraseniaUsuario = prompt ("Contraseña");

// const usuarioElegido = arrayUsuarios.filter (usuario => {
//     if (usuario.email ===  emailUsuario && usuario.contrasenia === contraseniaUsuario){
//         alert ("Bienvenido " + usuario.nombre);
//         return true;
//     } else {
//         alert ("La dirección de correo electrónico o la contraseña que ingresaste no coinciden con nuestros registros. Revisa su ortografía y vuelva a intentarlo.");
//     }
// })