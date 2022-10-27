// accedo a la info en localStorage y la guardo en variable libros 
const libros = JSON.parse (localStorage.getItem ("libros"));

// variables globales
let unidadesLibroAComprar = 0;

// mostrar libros disponibles //
const listaLibros = document.getElementById ("lista-libros");
let contId = 1;

for (const libro of libros){

    if (libro.stockLibro > 0){

        let div = document.createElement ("div");
        div.className = "contenedor-por-libro";

        let li = document.createElement ("li");
        li.className = "libro";

        let linkLibro = document.createElement ("a");
        linkLibro.className = "estilo-link-libros";
        linkLibro.onclick = function () { buscarLibroPorTitulo(libro.titulo) };
        linkLibro.innerHTML = `<img src = "${libro.img}"/>
                            <h2>${libro.titulo}</h2>`

        let linkAutor = document.createElement ("a");
        linkAutor.className = "estilo-link-libros";
        linkAutor.onclick = function () { buscarLibrosPorAutor(libro.autor) };    
        linkAutor.innerHTML = `<p class = "autor-libro">${libro.autor}</p>`
        
        li.append(linkLibro);
        li.append(linkAutor);
        div.append (li);
        listaLibros.append(div);  
    }
}


// función botón volver
function regresarAListaLibros (){
    const lista = document.getElementById ("seccion-libros-disponibles");
    lista.className = "mostrar";

    const contenedor = document.getElementById ("seccion-detalle-libro");
    contenedor.className = "no-mostrar";

    const alerta = document.getElementById ("alerta");
    alerta.className = "alerta-no-mostrar";
    alerta.innerText = "";
}

// función mostrar info libro clickeado
function buscarLibroPorTitulo(titulo){

    const librosAutor = document.getElementById ("seccion-libros-autor");
    librosAutor.className = "no-mostrar";

    return libros.find ((libro) => {

        if (libro.titulo === titulo){
            
            // muestro detalle libro
            const lista = document.getElementById ("seccion-libros-disponibles");
            lista.className = "no-mostrar";

            const seccionFicha = document.getElementById ("seccion-detalle-libro");
            seccionFicha.className = "mostrar";

            const contenedor = document.getElementById ("contenedor-detalle-libro");

            contenedor.innerHTML = 

            `<div class = "contenedor-carrito">
                <div class = "libro-img">
                    <img src = "${libro.img}"/>
                </div>

                <div class = "precio-libro">
                    <h2 class = "h2-titulo-azul">${libro.titulo}</h2>
                    <p><strong>Autor: </strong>${libro.autor}</p>
                    <p><strong>Editorial: </strong>${libro.editorial}</p>
                    <label for= "cantidad-libro"><strong>Cant.</strong></label>
                    <input type = "number" id = "cantidad-libro" name = "cantidad-libro" min="1" onchange = valorInput() class = "input-cantidad-libro">
                    <p class = "precio">AR$ ${libro.precio}</p>
                    <div id= "botones" class = "contenedor-botones">
                        <button id = "volver" class = "botones-accion" onclick = regresarAListaLibros()>Volver</button>
                    </div>
                </div>
            </div>
            
            <div class = "detalle-libro">
                <div class = "sipnosis">
                    <h3 class = "h3-estilo">Sipnosis</h3>
                    <p>${libro.sipnosis}</p>
                </div>

                <div class = "ficha">
                    <h3 class = "h3-estilo">Ficha Técnica</h3>
                    <p><strong>Fecha de Publicación: </strong>${libro.fechaPublicacion}</p>
                    <p><strong>Formato: </strong>${libro.formato}</p>
                    <p><strong>Idioma: </strong>${libro.idioma}</p>
                    <p><strong>Cantidad de páginas: </strong>${libro.cantidadPaginas}</p>
                    <p><strong>ISBN: </strong>${libro.isbn}</p>
                    <p><strong>Rango de edad: </strong>${libro.rangoEdad}</p>
                </div>
            </div>`

            const botones = document.getElementById ("botones");
            const alerta = document.getElementById ("alerta");

            // crear botón comprar
            const botonAgregar = document.createElement ("button");
            botonAgregar.innerText = "Comprar"
            botonAgregar.setAttribute ("id", "boton-agregar-libro");
            botonAgregar.className = "botones-accion";

            // evento botón
            botonAgregar.addEventListener ("click", () => {

                if (unidadesLibroAComprar === 0){

                    // confirmar si se agregó valor al input
                    console.log ("Elija cantidad");
            
                } else {
            
                    // chequear si hay suficientes libros en stock
                    if (unidadesLibroAComprar > libro.stockLibro) {

                        // borro input
                        document.getElementById ("cantidad-libro").value = "";
                        alerta.className = "alertas-mostrar";
                        alerta.innerText = `Lo sentimos, tenemos ${libro.stockLibro} libros en stock`
                        
                    } else {

                        // borro input
                        document.getElementById ("cantidad-libro").value = "";

                        // borro alertas
                        alerta.className = "alertas-no-mostrar";
                        alerta.innerText = "";
            
                        //agregar a carrito

                        //disminuir stock 
                        libro.stockLibro = libro.stockLibro - unidadesLibroAComprar;

                        //almacenar en el localStorage
                        localStorage.setItem ("libros", JSON.stringify (libros));
                  
                        console.log (`se agregó a carrito, compró ${unidadesLibroAComprar} libros, quedan ${libro.stockLibro} libros en stock`);
    
                    }    
                }    
            });

            botones.append (botonAgregar);
            seccionFicha.append(alerta);
        }
    }) 
}


// función mostrar libros por autor clickeado
function buscarLibrosPorAutor(nombreAutor){

    const librosPorAutor = libros.filter ((libro) => libro.autor === nombreAutor);

    const lista = document.getElementById ("seccion-libros-disponibles");
    lista.className = "no-mostrar";

    const seccionFicha = document.getElementById ("seccion-detalle-libro");
    seccionFicha.className = "no-mostrar";

    const librosAutor = document.getElementById ("seccion-libros-autor");
    librosAutor.className = "mostrar";

    const listaLibrosPorAutor = document.getElementById ("libros-por-autor");

    listaLibrosPorAutor.innerHTML = "";

    for (const libro of librosPorAutor){

        if (libro.stockLibro > 0){

            let div = document.createElement ("div");
            div.className = "contenedor-por-libro";

            let li = document.createElement ("li");
            li.className = "libro";

            let linkLibro = document.createElement ("a");
            linkLibro.className = "estilo-link-libros";
            linkLibro.onclick = function () { buscarLibroPorTitulo(libro.titulo) };
            linkLibro.innerHTML = `<img src = "${libro.img}"/>
                            <h2>${libro.titulo}</h2>`

            let linkAutor = document.createElement ("a");
            linkAutor.className = "estilo-link-libros";               
            linkAutor.onclick = function () { buscarLibrosPorAutor(libro.autor) };          
            linkAutor.innerHTML = `<p class = "autor-libro">${libro.autor}</p>`

            li.append(linkLibro);
            li.append(linkAutor);
            div.append (li);
            listaLibrosPorAutor.append(div);       
        }        
    }

    // crear div botones
    let divBoton = document.createElement ("div");
    divBoton.className = "contenedor-botones-autor";
    divBoton.getAttribute ("id", "botones" );

    // crear botón volver
    let boton = document.createElement ("button");
    boton.className = "botones-accion";
    boton.innerText = "Volver";
    boton.addEventListener ("click", () => {
        librosAutor.className = "no-mostrar";
        boton.className = "botones-accion no-mostrar";
        regresarAListaLibros();
    })

    divBoton.append (boton);
    librosAutor.append (divBoton);
}

// función sacar valor input (cantidad libros)
function valorInput (){
    unidadesLibroAComprar = parseInt (document.getElementById ("cantidad-libro").value);  
    console.log (unidadesLibroAComprar);
}





            
// // ****** VENDER LIBRO POR TITULO ****** //
// let verifVentaLibro = true;

// while (verifVentaLibro === true){

//     let elegido = prompt ("Elegir libro que desea comprar. SALIR para pagar.");
//     let libroElegido = elegido.toUpperCase ();

//     if (libroElegido !== "SALIR"){

//         const libroAVender = arrayLibros.find (libro =>{
//             if (libro.titulo === libroElegido){
//                 return true;
//             } else {
//                 return false;
//             }    
//         })

//         // llamar al MÉTODO para vender libro

//         if (libroAVender){
//             verifVentaLibro = false;
//             libroAVender.venderLibro();
//         } else {
//             alert ("No se encontró el libro que está buscando.");
//         }

//     } else {

//         verifVentaLibro = false;
//         if (cantidadCompraLibro > 0){
//             alert ("Total a pagar $" + totalCarrito + "\n¡Gracias por tu compra!");
//         }
        
//     }  
// }




// ****** AGREGAR STOCK POR ID ****** //
let verifId = true;
let idLibroElegido;
let buscarLibroPorId;
let indiceLibroElegido;
// let cantidadEnStock;


// idLibroElegido = parseInt (prompt ("Elegir ID del libro que desea aumentar stock."));

// while (verifId === true){

//     buscarLibroPorId = arrayLibros.find (libro => {
//         if (libro.id === idLibroElegido){
//             return true;
//         } 
//     })

//     if (buscarLibroPorId){
//         cantidadEnStock = buscarLibroPorId.stockLibro;
//         verifId = false;
//         alert ("Elegiste " + buscarLibroPorId.titulo + "\nCantidad en stock: " + cantidadEnStock);
        
//     } else {
//         idLibroElegido = parseInt (prompt ("No se encontró ID, ingresar ID válida."));;
//     }
// }

// indiceLibroElegido = arrayLibros.map (libro => libro.id).indexOf(idLibroElegido);
// let cantidadAAgregar = parseInt (prompt ("¿Cuántos libros desea agregar?"));

// while (isNaN(cantidadAAgregar) || (cantidadAAgregar === 0)){
//     cantidadAAgregar = parseInt (prompt ("Ingrese cantidad válida. ¿Cuántos libros desea agregar?"));
// }

// arrayLibros[indiceLibroElegido].agregarStockLibro(cantidadAAgregar);



// ****** VER STOCK POR ID ****** //
// idLibroElegido = parseInt (prompt ("Elegir ID del libro que desea ver stock."));

// while (verifId === true){

//     buscarLibroPorId = arrayLibros.find (libro => {
//         if (libro.id === idLibroElegido){
//             return true;
//         } 
//     })

//     if (buscarLibroPorId){
//         verifId = false;   
//     } else {
//         idLibroElegido = parseInt (prompt ("No se encontró ID, ingresar ID válida."));;
//     }
// }

// indiceLibroElegido = arrayLibros.map (libro => libro.id).indexOf(idLibroElegido);
// arrayLibros[indiceLibroElegido].verStockLibro();



// ****** CAMBIAR PRECIO POR ID ****** //
// let precioActual;
// let precioACambiar;

// idLibroElegido = parseInt (prompt ("Elegir ID del libro que desea cambiar de precio."));

// while (verifId === true){

//     buscarLibroPorId = arrayLibros.find (libro => {
//         if (libro.id === idLibroElegido){
//             return true;
//         } 
//     })

//     if (buscarLibroPorId){
//         precioActual = buscarLibroPorId.precio;
//         verifId = false;
//         alert ("Elegiste " + buscarLibroPorId.titulo + "\nPrecio Actual: $" + precioActual);
        
//     } else {
//         idLibroElegido = parseInt (prompt ("No se encontró ID, ingresar ID válida."));;
//     }
// }

// indiceLibroElegido = arrayLibros.map (libro => libro.id).indexOf(idLibroElegido);
// precioACambiar = parseInt (prompt ("Ingrese nuevo precio."));

// while (isNaN(precioACambiar) || (precioACambiar === 0)){
//     precioACambiar = parseInt (prompt ("Ingrese precio válido."));
// }

// arrayLibros[indiceLibroElegido].cambiarPrecioLibro (precioACambiar);



// ****** BUSCAR POR FORMATO ****** //
// let arrayBuscarPorFormato;

// buscarPor = prompt ("Escriba el formato deseado:\n* Tapa dura\n* Rústica");
// let buscarPorFormatoElegido = buscarPor.toUpperCase();


// arrayBuscarPorFormato = arrayLibros.filter ((libro) => {
//     if (libro.formato.toUpperCase() === buscarPorFormatoElegido){
//         cont++;
//         return libro.formato.toUpperCase() == buscarPorFormatoElegido;
//     }
// });

// alert ("Se encontraron " + cont + " libro/s con el formato seleccionado - " + buscarPorFormatoElegido);

// // llamar al MÉTODO para mostrar FICHAS TECNICAS por formato elegido
// arrayBuscarPorFormato.forEach ((libro) => {
//     libro.mostrarFichaTecnica();
// })



// ****** BUSCAR POR RANGO DE PRECIO ****** //
// let arrayBuscarPorRangoPrecio;
// let cont = 0;

// buscarPor = prompt ("Elija rango de precio, escriba una letra:\na) 500 - 1000\nb) 1000 - 2000\nc) 2000 - 3000\nd) 3000 - 4000\ne) 4000 - 5000\nf) más de 5000");

// switch (buscarPor){

//     case "a":
//     case "A":
//         arrayBuscarPorRangoPrecio = arrayLibros.filter ((libro)=>{
//             if (libro.precio >= 500 && libro.precio <= 1000){
//                 cont++;
//                 return true;
//             }
//         });
//         break;

//     case "b":
//     case "B":
//         arrayBuscarPorRangoPrecio = arrayLibros.filter ((libro)=>{
//             if (libro.precio > 1000 && libro.precio <= 2000){
//                 cont++;
//                 return true;
//             }
//         });
//         break;

//     case "c":
//     case "C":
//         arrayBuscarPorRangoPrecio = arrayLibros.filter ((libro)=>{
//             if (libro.precio > 2000 && libro.precio <= 3000){
//                 cont++;
//                 return true;
//             }
//         });
//         break;

//     case "d":
//     case "D":
//         arrayBuscarPorRangoPrecio = arrayLibros.filter ((libro)=>{
//             if (libro.precio > 3000 && libro.precio <= 4000){
//                 cont++;
//                 return true;
//             }
//         });
//         break;

//     case "e":
//     case "E":
//         arrayBuscarPorRangoPrecio = arrayLibros.filter ((libro)=>{
//             if (libro.precio > 4000 && libro.precio <= 5000){
//                 cont++;
//                 return true;
//             }
//         });
//         break;
    
//     case "f":
//     case "F":
//         arrayBuscarPorRangoPrecio = arrayLibros.filter ((libro)=>{
//             if (libro.precio > 5000){
//                 cont++;
//                 return true;
//             }
//         });
//         break;
// }

// alert ("Se encontraron " + cont + " libro/s en el rango de precio seleccionado.");

// // llamar al MÉTODO para mostrar FICHAS TECNICAS por rango de precio
// arrayBuscarPorRangoPrecio.forEach ((libro) => {
//     libro.mostrarFichaTecnica();
// })



// ****** CLASE USUARIO ****** //

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