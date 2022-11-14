//localStorage.clear ();
// ******************** VARIABLES GLOBALES ******************** //

let libros = [];

let verifUsuario = false;
let verifDatos = false;
let verifContrasenia = false;
let verifIniciarCompra = false;

let unidadesLibroAComprar = 0;
let itemsAgregados = 0;
let totalAPagar = 0;
let subtotalItem = 0;



// Obtener libros disponibles usando libros.json
const librosInLS = localStorage.getItem ("libros");

if (librosInLS === null) {
        
    fetch ("./libros.json")
        .then ( (response) => {

            return response.json();

        }).then ( (data) => {

            const infoLibros = data;
            localStorage.setItem ("libros", JSON.stringify (infoLibros));

            libros = JSON.parse (localStorage.getItem ("libros"));
            mostrarLibrosDisponibles ();
    });

} else {

    libros = JSON.parse (localStorage.getItem ("libros"));
    mostrarLibrosDisponibles ();
}



// ******************** FUNCIONES ******************** //

// Función mostrar libros disponibles en HOME
function mostrarLibrosDisponibles () {

    const listaLibros = document.getElementById ("lista-libros");

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
                                <h2 class = "h2-titulo-libro">${libro.titulo}</h2>`

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
}

// Función obtener usuario log in
function obtenerUsuarioLogIn () {

    let usuarioLogIn = [];

    const usuarioLogInLS = localStorage.getItem ("usuarioLogIn");

    if (usuarioLogInLS !== null) {
        usuarioLogIn = JSON.parse (usuarioLogInLS);
        verifUsuario = true;
        verifIniciarCompra = true;
    }

    if (verifUsuario === true) {

        // Mostrar saludo usuario
        const saludoUsuario = document.getElementById ("saludo-usuario");
        saludoUsuario.className = ("mostrar");
        saludoUsuario.innerText = `-- Hola ${usuarioLogIn.nombre} --`;
    }
                                         
    return usuarioLogIn;
}
obtenerUsuarioLogIn ();

// Función obtener carrito
function obtenerCarrito () {

    const carrito = JSON.parse(localStorage.getItem ("carrito")) || [];

    return carrito;
}
let carrito = obtenerCarrito ();

// Función obtener items agregados
function obtenerItems () {

    const items = JSON.parse(localStorage.getItem ("items")) || 0;

    return items;
}
let items = obtenerItems ();

// Mostrar items en contenedor carrito
const infoItems = document.getElementById ("info-carrito");
infoItems.innerText = `${items} productos`;

// Función obtener usuarios 
function obtenerUsuarios () {

    const usuarios = JSON.parse(localStorage.getItem ("usuarios")) || [];

    return usuarios;
}
let usuarios = obtenerUsuarios ();

// Función botón home
function regresarAListaLibros (){
    const seccionLibrosDisponibles = document.getElementById ("seccion-libros-disponibles");
    seccionLibrosDisponibles.className = "mostrar";

    // No mostrar
    const seccionDetalleLibro = document.getElementById ("seccion-detalle-libro");
    seccionDetalleLibro.className = "no-mostrar";

    const seccionLibrosAutor = document.getElementById ("seccion-libros-autor");
    seccionLibrosAutor.className = "no-mostrar";

    const seccionResultadoBusqueda = document.getElementById ("seccion-busqueda");
    seccionResultadoBusqueda.className = "no-mostrar";

    const seccionDetalleCarrito = document.getElementById ("seccion-detalle-carrito");
    seccionDetalleCarrito.className = "no-mostrar";

    const seccionIniciarSesion = document.getElementById ("seccion-iniciar-sesion");
    seccionIniciarSesion.className = "no-mostrar";

    const seccionRegistroUsuario = document.getElementById ("seccion-registro-usuario");
    seccionRegistroUsuario.className = "no-mostrar";

    const seccionFinalizarCompra = document.getElementById ("seccion-finalizar-compra");
    seccionFinalizarCompra.className = "no-mostrar";

    // Limpiar inputs inicio de sesión
    document.getElementById ("email-inicio-sesion").value = "";
    document.getElementById ("contrasenia-inicio-sesion").value = "";

    // Limpiar inputs registro de usuario
    document.getElementById ("nombre").value = "";
    document.getElementById ("apellido").value = "";
    document.getElementById ("email").value = "";
    document.getElementById ("contrasenia").value = "";
}

// Función registrar usuario
function registrarUsuario (){
    const seccionRegistroUsuario = document.getElementById ("seccion-registro-usuario");
    seccionRegistroUsuario.className = "mostrar";

    // No mostrar
    const seccionLibrosDisponibles = document.getElementById ("seccion-libros-disponibles");
    seccionLibrosDisponibles.className = "no-mostrar";

    const seccionDetalleLibro = document.getElementById ("seccion-detalle-libro");
    seccionDetalleLibro.className = "no-mostrar";

    const seccionLibrosAutor = document.getElementById ("seccion-libros-autor");
    seccionLibrosAutor.className = "no-mostrar";

    const seccionResultadoBusqueda = document.getElementById ("seccion-busqueda");
    seccionResultadoBusqueda.className = "no-mostrar";

    const seccionDetalleCarrito = document.getElementById ("seccion-detalle-carrito");
    seccionDetalleCarrito.className = "no-mostrar";

    const seccionIniciarSesion = document.getElementById ("seccion-iniciar-sesion");
    seccionIniciarSesion.className = "no-mostrar";

    const seccionFinalizarCompra = document.getElementById ("seccion-finalizar-compra");
    seccionFinalizarCompra.className = "no-mostrar";
}

// Función inciar sesión
function iniciarSesion (){

    const seccionIniciarSesion = document.getElementById ("seccion-iniciar-sesion");
    seccionIniciarSesion.className = "mostrar";

    // No mostrar
    const seccionLibrosDisponibles = document.getElementById ("seccion-libros-disponibles");
    seccionLibrosDisponibles.className = "no-mostrar";
    
    const seccionDetalleLibro = document.getElementById ("seccion-detalle-libro");
    seccionDetalleLibro.className = "no-mostrar";
    
    const seccionLibrosAutor = document.getElementById ("seccion-libros-autor");
    seccionLibrosAutor.className = "no-mostrar";
    
    const seccionResultadoBusqueda = document.getElementById ("seccion-busqueda");
    seccionResultadoBusqueda.className = "no-mostrar";
    
    const seccionDetalleCarrito = document.getElementById ("seccion-detalle-carrito");
    seccionDetalleCarrito.className = "no-mostrar";

    const seccionRegistroUsuario = document.getElementById ("seccion-registro-usuario");
    seccionRegistroUsuario.className = "no-mostrar";

    const seccionFinalizarCompra = document.getElementById ("seccion-finalizar-compra");
    seccionFinalizarCompra.className = "no-mostrar";
}

// Función notificar usuario que ya inició sesión
function alertUsuarioLog (){
    const usuarioLogInLS = localStorage.getItem ("usuarioLogIn");
    const usuarioLogIn = JSON.parse (usuarioLogInLS);

    Swal.fire ({
        text: `Ya iniciaste sesión como ${usuarioLogIn.email}`,
        padding: "2em",
        color: "#444",
        confirmButtonText: "OK",
        confirmButtonColor: "#227C9D",
    });  
}

// Función mostrar libro (por título) clickeado
function buscarLibroPorTitulo(titulo){

    return libros.find ((libro) => {

        if (libro.titulo === titulo){
            
            // Mostrar sección detalle libro
            const seccionFicha = document.getElementById ("seccion-detalle-libro");
            seccionFicha.className = "mostrar";

            // No mostrar
            const seccionLibrosDisponibles = document.getElementById ("seccion-libros-disponibles");
            seccionLibrosDisponibles.className = "no-mostrar";

            const seccionLibrosAutor = document.getElementById ("seccion-libros-autor");
            seccionLibrosAutor.className = "no-mostrar";

            const seccionResultadoBusqueda = document.getElementById ("seccion-busqueda");
            seccionResultadoBusqueda.className = "no-mostrar";

            const seccionDetalleCarrito = document.getElementById ("seccion-detalle-carrito");
            seccionDetalleCarrito.className = "no-mostrar";

            const seccionIniciarSesion = document.getElementById ("seccion-iniciar-sesion");
            seccionIniciarSesion.className = "no-mostrar";

            const seccionRegistroUsuario = document.getElementById ("seccion-registro-usuario");
            seccionRegistroUsuario.className = "no-mostrar";

            const seccionFinalizarCompra = document.getElementById ("seccion-finalizar-compra");
            seccionFinalizarCompra.className = "no-mostrar";

            // Información del libro
            const contenedor = document.getElementById ("contenedor-detalle-libro");
            contenedor.innerHTML = 

            `<div class = "contenedor-imagen-info">
                <div class = "libro-img">
                    <img src = "${libro.img}"/>
                </div>

                <div class = "precio-libro">
                    <h2 class = "h2-titulo-azul">${libro.titulo}</h2>
                    <p><strong>Autor: </strong>${libro.autor}</p>
                    <p><strong>Editorial: </strong>${libro.editorial}</p>
                    <label for= "cantidad-libro"><strong>Cant.</strong></label>
                    <input type = "number" id = "cantidad-libro" name = "cantidad-libro" value = "1" min = "1" onchange = valorInput() class = "input-cantidad-libro">
                    <p class = "precio">AR$ ${libro.precio}</p>
                    <div id= "botones" class = "contenedor-botones">
                        <button type = "button" class = "botones-accion" onclick = "regresarAListaLibros()">Home</button>
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

            // Crear botón comprar
            const botonAgregar = document.createElement ("button");
            botonAgregar.innerText = "Comprar"
            botonAgregar.setAttribute ("id", "boton-agregar-libro");
            botonAgregar.className = "botones-accion";

            // Evento botón comprar
            botonAgregar.addEventListener ("click", () => {
                
                // Chequear si hay suficientes libros en stock
                let unidadesLibroAComprar = parseInt (document.getElementById ("cantidad-libro").value);

                if (unidadesLibroAComprar > libro.stockLibro) {

                    // Borrar input
                    document.getElementById ("cantidad-libro").value = 1;

                    // Sweet Alert sin stock suficiente
                    Swal.fire ({
                        title: "¡ LO SENTIMOS !",
                        text: `Tenemos solamente ${libro.stockLibro} libros en stock.`,
                        padding: "2em",
                        color: "#444",
                        confirmButtonText: "Entendido",
                        confirmButtonColor: "#227C9D",
                    });   
                    
                } else {

                    // Borrar input
                    document.getElementById ("cantidad-libro").value = 1;

                    // Sumar items
                    items = items + unidadesLibroAComprar;

                    // Indicar número de items en carrito
                    const infoItems = document.getElementById ("info-carrito");
                    infoItems.innerText = `${items} productos`;
                    
                    // Sweet Alert item agregado a carrito
                    Swal.fire({
                        title: `${libro.titulo}`,
                        text: `Agregaste ${unidadesLibroAComprar} libro/s a tu carrito.`,
                        icon: "success",
                        confirmButtonText: "Seguir comprando",
                        confirmButtonColor: "#227C9D",
                        showCancelButton: true,
                        cancelButtonText: "Ver carrito",
                        cancelButtonColor: "#227C9D",
                      })
                      .then ((result) => {

                        if (!result.isConfirmed) {
                            irACarrito ();
                        }
                    
                      });

                    // Agregar item a array carrito
                    carrito.push ({
                        imagen: libro.img,
                        titulo: libro.titulo,
                        cantidad: unidadesLibroAComprar,
                        precio: libro.precio,
                    });

                    // Guardar array carrito en localStorage
                    localStorage.setItem ("carrito", JSON.stringify (carrito));

                    // Guardar cantidad items agregados en localStorage
                    localStorage.setItem ("items", JSON.stringify (items));

                    // Disminuir stock 
                    libro.stockLibro = libro.stockLibro - unidadesLibroAComprar;

                    // Guardar array libros en localStorage
                    localStorage.setItem ("libros", JSON.stringify (libros));
                }
            })

            botones.append (botonAgregar);
        }
    }) 
}

// Función sacar valor input (cantidad libros a comprar)
function valorInput (){
    unidadesLibroAComprar = parseInt (document.getElementById ("cantidad-libro").value);  
}

// Función mostrar libros por autor clickeado
function buscarLibrosPorAutor(nombreAutor){

    const librosPorAutor = libros.filter ((libro) => libro.autor === nombreAutor);

    // Mostrar sección libros por autor
    const seccionLibrosAutor = document.getElementById ("seccion-libros-autor");
    seccionLibrosAutor.className = "mostrar";

    // No mostrar
    const seccionLibrosDisponibles = document.getElementById ("seccion-libros-disponibles");
    seccionLibrosDisponibles.className = "no-mostrar";

    const seccionFicha = document.getElementById ("seccion-detalle-libro");
    seccionFicha.className = "no-mostrar";

    const seccionBusqueda = document.getElementById ("seccion-busqueda");
    seccionBusqueda.className = "no-mostrar";

    const seccionDetalleCarrito = document.getElementById ("seccion-detalle-carrito");
    seccionDetalleCarrito.className = "no-mostrar";

    const seccionIniciarSesion = document.getElementById ("seccion-iniciar-sesion");
    seccionIniciarSesion.className = "no-mostrar";

    const seccionRegistroUsuario = document.getElementById ("seccion-registro-usuario");
    seccionRegistroUsuario.className = "no-mostrar";

    const seccionFinalizarCompra = document.getElementById ("seccion-finalizar-compra");
    seccionFinalizarCompra.className = "no-mostrar";

    // Grid con libros del autor clickeado
    const listaLibrosPorAutor = document.getElementById ("libros-por-autor");
    listaLibrosPorAutor.innerHTML = "";

    for (const libro of librosPorAutor){

        let div = document.createElement ("div");
        div.className = "contenedor-por-libro";

        let li = document.createElement ("li");
        li.className = "libro";

        let linkLibro = document.createElement ("a");
        linkLibro.className = "estilo-link-libros";
        linkLibro.onclick = function () { buscarLibroPorTitulo(libro.titulo) };
        linkLibro.innerHTML = `<img src = "${libro.img}"/>
                            <h2 class = "h2-titulo-libro">${libro.titulo}</h2>`

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

// Función mostrar resultado por búsqueda
function mostrarResultadoBusqueda (id){

    const divSinResultado = document.getElementById ("sin-resultado");
    divSinResultado.className = "no-mostrar";

    for (const libro of libros) {
        if (libro.id === id) {

            // Grid con resultados búsqueda
            const listaResultadoBusqueda = document.getElementById ("libros-por-busqueda");

            let div = document.createElement ("div");
            div.className = "contenedor-por-libro";

            let li = document.createElement ("li");
            li.className = "libro";

            let linkLibro = document.createElement ("a");
            linkLibro.className = "estilo-link-libros";
            linkLibro.onclick = function () { buscarLibroPorTitulo(libro.titulo) };
            linkLibro.innerHTML = `<img src = "${libro.img}"/>
                                <h2 class = "h2-titulo-libro">${libro.titulo}</h2>`

            let linkAutor = document.createElement ("a");
            linkAutor.className = "estilo-link-libros";               
            linkAutor.onclick = function () { buscarLibrosPorAutor(libro.autor) };          
            linkAutor.innerHTML = `<p class = "autor-libro">${libro.autor}</p>`

            li.append(linkLibro);
            li.append(linkAutor);
            div.append (li);
            listaResultadoBusqueda.append(div);
        }
    }
}

// Función ir a carrito de compras
function irACarrito (){

    if (items === 0){

        // Sweet Alert el carrito está vacío
        Swal.fire ({
            text: `El carrito está vacío`,
            padding: "2em",
            color: "#444",
            showConfirmButton: false,
            timer: 1000
        }); 

    } else {

        totalAPagar = 0;

        // Mostrar sección detalle carrito
        const seccionDetalleCarrito = document.getElementById ("seccion-detalle-carrito");
        seccionDetalleCarrito.className = "mostrar";

        // Vaciar div contenedor detalle carrito
        const contenedorDetalleCarrito = document.getElementById ("contenedor-detalle-carrito");
        contenedorDetalleCarrito.innerHTML = `<h3 class = "h3-estilo">DETALLE COMPRA</h3>`;

        // No mostrar
        const seccionLibrosDisponibles = document.getElementById ("seccion-libros-disponibles");
        seccionLibrosDisponibles.className = "no-mostrar";

        const seccionFicha = document.getElementById ("seccion-detalle-libro");
        seccionFicha.className = "no-mostrar";

        const seccionLibrosAutor = document.getElementById ("seccion-libros-autor");
        seccionLibrosAutor.className = "no-mostrar";

        const seccionBusqueda = document.getElementById ("seccion-busqueda");
        seccionBusqueda.className = "no-mostrar";

        const seccionIniciarSesion = document.getElementById ("seccion-iniciar-sesion");
        seccionIniciarSesion.className = "no-mostrar";

        const seccionRegistroUsuario = document.getElementById ("seccion-registro-usuario");
        seccionRegistroUsuario.className = "no-mostrar";

        const seccionFinalizarCompra = document.getElementById ("seccion-finalizar-compra");
        seccionFinalizarCompra.className = "no-mostrar";

        for (const item of carrito){

            subtotalItem = parseInt (item.cantidad * item.precio);
            totalAPagar = totalAPagar + subtotalItem;
    
            const div = document.createElement ("div");
            div.className = "detalle-compra-por-libro";
            div.innerHTML = `<img src = "${item.imagen}" class = "img-carrito"/>
                            <p class = "p-carrito">${item.titulo}<p>
                            <a class = "estilo-link-libros boton-eliminar" onclick = "eliminarItemCarrito('${item.titulo}', '${item.cantidad}')"><i class="fa-solid fa-x fa-2xs"></i></a>
                            <p class = "p-carrito">${item.cantidad} unidad/es </p>
                            <p>$${subtotalItem}`;
    
            contenedorDetalleCarrito.append (div);
        }
    
        const pTotalAPagar = document.getElementById ("div-total-pagar");
        pTotalAPagar.innerHTML = `<p class = "p-total"><strong>TOTAL A PAGAR </strong></p>
                                    <p>$${totalAPagar}</p>`;
    
        seccionDetalleCarrito.append (contenedorDetalleCarrito);
        seccionDetalleCarrito.append (pTotalAPagar);
    
        // Variable botón 
        const botonesCarrito = document.getElementById ("botones-carrito");
    
        botonesCarrito.before (contenedorDetalleCarrito);
        botonesCarrito.before (pTotalAPagar);
    }
}

// Función eliminar item del carrito
function eliminarItemCarrito(titulo, unidades){

    // Buscar titulo en array libros
    for (const libro of libros) {

        if (libro.titulo === titulo) {
                
            // Agregar stock de vuelta
            libro.stockLibro = libro.stockLibro + parseInt (unidades);

            // Guardar array libros en localStorage
            localStorage.setItem ("libros", JSON.stringify (libros));

            // Modificar cantidad items navbar y guardar en localStorage
            items = items - unidades;
            localStorage.setItem ("items", JSON.stringify (items));

            // Mostrar items actualizados en contenedor carrito
            const infoItems = document.getElementById ("info-carrito");
            infoItems.innerText = `${items} productos`;

            // Encontrar índice de libro a eliminar
            for (const libroCarrito of carrito) {

                if (libroCarrito.titulo === titulo){

                    const index = carrito.indexOf (libroCarrito);
                    carrito.splice (index, 1);
                }
            }
        
            // Guardar array carrito en localStorage
            localStorage.setItem ("carrito", JSON.stringify (carrito));

            // Renderizar sección detalle carrito
            irACarrito ();

            // Mostrar sección libros disponobles si no hay items en el carrito
            if (items === 0) {
                regresarAListaLibros ();
            }   
        }
    }
}

// Función iniciar compra
function iniciarCompra (){

    // Mostrar sección detalle carrito
    const seccionDetalleCarrito = document.getElementById ("seccion-detalle-carrito");
    seccionDetalleCarrito.className = "mostrar";

    // Mostrar sección formulario finalizar compra
    const seccionFinalizarCompra = document.getElementById ("seccion-finalizar-compra");
    seccionFinalizarCompra.className = "mostrar";

    // No mostrar
    const seccionLibrosDisponibles = document.getElementById ("seccion-libros-disponibles");
    seccionLibrosDisponibles.className = "no-mostrar";

    const seccionDetalleLibro = document.getElementById ("seccion-detalle-libro");
    seccionDetalleLibro.className = "no-mostrar";

    const seccionLibrosAutor = document.getElementById ("seccion-libros-autor");
    seccionLibrosAutor.className = "no-mostrar";

    const seccionResultadoBusqueda = document.getElementById ("seccion-busqueda");
    seccionResultadoBusqueda.className = "no-mostrar";

    const seccionIniciarSesion = document.getElementById ("seccion-iniciar-sesion");
    seccionIniciarSesion.className = "no-mostrar";

    const seccionRegistroUsuario = document.getElementById ("seccion-registro-usuario");
    seccionRegistroUsuario.className = "no-mostrar";

    // Limpiar inputs inicio de sesión
    document.getElementById ("email-inicio-sesion").value = "";
    document.getElementById ("contrasenia-inicio-sesion").value = "";

    // Limpiar inputs registro de usuario
    document.getElementById ("nombre").value = "";
    document.getElementById ("apellido").value = "";
    document.getElementById ("email").value = "";
    document.getElementById ("contrasenia").value = "";
}



// ******************** EVENTOS ******************** //

// Evento click en link ingresar - nav
const ingresar = document.getElementById ("a-ingresar");
ingresar.addEventListener ("click", () => {

    if (verifUsuario === false){

        // Llamar función iniciar sesión que lleva al formulario
        iniciarSesion ();

    } else {

        // Llamar función para notificar que el usuario ya inició sesión
        alertUsuarioLog ();
    }
})

// Evento click en link crear cuenta - nav
const crearCuenta = document.getElementById ("a-crear-cuenta");
crearCuenta.addEventListener ("click", () => {

    if (verifUsuario === false){

        // Llamar función registrar usuario que lleva al formulario
        registrarUsuario ();

    } else {

        // Llamar función para notificar que el usuario ya inició sesión
        alertUsuarioLog ();
    }  
})

// Evento click en link salir - nav
const salir = document.getElementById ("a-cerrar-sesion");
salir.addEventListener ("click", () => {

    if (verifUsuario === true){

        // Sweet Alert notificar cierre de sesión
        Swal.fire ({
            text: `Acabas de cerrar sesión, nos vemos pronto.`,
            padding: "2em",
            color: "#444",
            showConfirmButton: false,
            timer: 2000
        });  

        // Remover key usuarioLogIn del localStorage
        localStorage.removeItem ("usuarioLogIn");

        // Cambiar valor de la variable verifUsuario a false
        verifUsuario = false;

        // Cambiar valor de la variable verifIniciarCompra a false
        verifIniciarCompra = false;

        // No mostrar saludo usuario
        const saludoUsuario = document.getElementById ("saludo-usuario");
        saludoUsuario.className = ("no-mostrar");

        // No mostrar sección finalizar compra
        const seccionFinalizarCompra = document.getElementById ("seccion-finalizar-compra");
        seccionFinalizarCompra.className = "no-mostrar";

        // Mostrar libros disponibles HOME
        regresarAListaLibros ();
    }  
})

// Evento click botón crear cuenta del formulario registro usuario
const botonCrearCuenta = document.getElementById ("crear-cuenta");
botonCrearCuenta.addEventListener ("click", (event) => {

    // Detener el evento
    event.preventDefault ();

    // Obtener los datos del input
    const nombre = document.getElementById ("nombre").value;
    const apellido = document.getElementById ("apellido").value;
    const email = document.getElementById ("email").value;
    const contrasenia = document.getElementById ("contrasenia").value;

    // Verificar si los 4 campos están completos 
    if (nombre === "" || apellido === "" || email === "" || contrasenia === ""){

        // Sweet Alert si no se han completado todos los inputs
        Swal.fire ({
            text: `Por favor, complete todos los campos.`,
            padding: "2em",
            color: "#444",
            confirmButtonText: "OK",
            confirmButtonColor: "#227C9D",
        });  

        verifDatos = true;

    } else {

        // Verificar si el formato de email es válido
        if (!email.includes("@") || !email.includes(".com")) {

            // Sweet Alert si el email es inválido
            Swal.fire ({
                text: `Por favor, ingrese una dirección de email válida.`,
                padding: "2em",
                color: "#444",
                confirmButtonText: "OK",
                confirmButtonColor: "#227C9D",
            }); 

            verifDatos = true;

        } else {
            
            // Verificar si el email ya ha sido registrado
            for (const usuario of usuarios) {

                if (usuario.email === email){

                    Swal.fire ({
                        text: `El email ingresado ya existe.`,
                        padding: "2em",
                        color: "#444",
                        confirmButtonText: "OK",
                        confirmButtonColor: "#227C9D",
                    }); 

                    verifDatos = true;
                }
            } 
        } 
    }

    // Pushear si todos los datos están ingresados correctamente 
    if (verifDatos === false) {

        // Cargar datos al array de usuarios
        usuarios.push (new Usuarios (nombre, apellido, email, contrasenia));

        // Cargar array al localStorage
        localStorage.setItem ("usuarios", JSON.stringify(usuarios));

        // Limpiar inputs
        document.getElementById ("nombre").value = "";
        document.getElementById ("apellido").value = "";
        document.getElementById ("email").value = "";
        document.getElementById ("contrasenia").value = "";

        // Sweet Alert se creó cuenta exitosamente
        Swal.fire ({
            text: `Usuario creado exitosamente. Por favor, inicie sesión`,
            padding: "2em",
            color: "#444",
            confirmButtonText: "OK",
            confirmButtonColor: "#227C9D",
        }); 

        // Llamar a función iniciar sesión
        iniciarSesion ();

    } else {
        verifDatos = false;
    }
})

// Evento click en link inicia sesión del formulario resgistro usuario
const linkIniciaSesion = document.getElementById ("a-iniciar-sesion");
linkIniciaSesion.addEventListener ("click", () => {

    // Limpiar inputs registro de usuario
    document.getElementById ("nombre").value = "";
    document.getElementById ("apellido").value = "";
    document.getElementById ("email").value = "";
    document.getElementById ("contrasenia").value = "";

    // Llamar función iniciar sesión que lleva al formulario
    iniciarSesion();
})

// Evento click botón acceder del formulario de iniciar sesión
const botonAcceder = document.getElementById ("acceder");
botonAcceder.addEventListener ("click", (event) => {

    // Detener el evento
    event.preventDefault ();

    // Obtener los datos del input
    const email = document.getElementById ("email-inicio-sesion").value;
    const contrasenia = document.getElementById ("contrasenia-inicio-sesion").value;

    // Verificar si los 2 campos están completos 
    if (email === "" || contrasenia === "" ){

        // Sweet Alert si no se han completado todos los inputs
        Swal.fire ({
            text: `Por favor, complete todos los campos.`,
            padding: "2em",
            color: "#444",
            confirmButtonText: "OK",
            confirmButtonColor: "#227C9D",
        });  

    } else {

        // Verificar si el usuario ingresado esta guardado en localStorage
        for (const usuario of usuarios) {

            if (usuario.email === email) {

                if (usuario.contrasenia === contrasenia) {

                    // Limpiar inputs
                    document.getElementById ("email-inicio-sesion").value = "";
                    document.getElementById ("contrasenia-inicio-sesion").value = "";

                    // Variable boolean true para saber si paso por el if de contraseña
                    verifContrasenia = true;

                    // Variable boolean true para saber si inició sesión
                    verifUsuario = true;

                    // Variable boolean true para sepa que el usuario ya está registrado
                    verifContrasenia = true;

                    // Mostrar saludo usuario
                    const saludoUsuario = document.getElementById ("saludo-usuario");
                    saludoUsuario.className = ("mostrar");
                    saludoUsuario.innerText = `-- Hola ${usuario.nombre} --`;

                    // Guardar datos usuario logueado en variable usuarioLogIn
                    const usuarioLogIn = usuario;

                    // Cargar usuario al localStorage
                    localStorage.setItem ("usuarioLogIn", JSON.stringify(usuarioLogIn));

                    // Verificar si se hizo click en botón iniciar compra
                    if (verifIniciarCompra === false){

                        // Mostrar libros disponibles HOME
                        regresarAListaLibros ();

                    } else {

                        // Mostrar carrito de compras y detalle de compra
                        irACarrito ();
                        iniciarCompra ();
                    }
                    
                } else {

                    // Sweet Alert contraseña incorrecta
                    Swal.fire ({
                        text: `Contraseña incorrecta`,
                        padding: "2em",
                        color: "#444",
                        confirmButtonText: "OK",
                        confirmButtonColor: "#227C9D",
                    });  

                    // Variable boolean true para saber si paso por el if de contraseña
                    verifContrasenia = true;

                    // Limpiar inputs
                    document.getElementById ("email-inicio-sesion").value = "";
                    document.getElementById ("contrasenia-inicio-sesion").value = "";    
                }
            }
        }

        // Verificar si la contraseña no es incorrecta (false) - 
        if (verifContrasenia === false){
                    
            //Sweet Alert no se encontró usuario
            Swal.fire ({
                text: `El email no se encuentra registrado en nuestra web. Por favor regístrate como nuevo cliente.`,
                padding: "2em",
                color: "#444",
                confirmButtonText: "OK",
                confirmButtonColor: "#227C9D",
            }); 

            // Limpiar inputs
            document.getElementById ("email-inicio-sesion").value = "";
            document.getElementById ("contrasenia-inicio-sesion").value = "";

        } else {

            verifContrasenia = false;

        }
    }
})

// Evento click en link regístrate del formulario iniciar sesión
const linkRegistrate = document.getElementById ("a-registrate");
linkRegistrate.addEventListener ("click", () => {

    // Limpiar inputs inicio sesión
    document.getElementById ("email-inicio-sesion").value = "";
    document.getElementById ("contrasenia-inicio-sesion").value = "";
    
    // Llamar función registrar usuario que lleva al formulario
    registrarUsuario ();
})

// Evento click en botón buscar
const botonBuscar = document.getElementById ("boton-buscar");

botonBuscar.addEventListener ("click", () => {

    let verifSinResultados = 0;
    let arrayVerifId = [];

    // Limpiar sección 
    const listaResultadoBusqueda = document.getElementById ("libros-por-busqueda");
    listaResultadoBusqueda.innerHTML = "";

    // Mostrar sección búsqueda
    const seccionBusqueda = document.getElementById ("seccion-busqueda");
    seccionBusqueda.className = "mostrar";

    // No mostrar
    const seccionLibrosDisponibles = document.getElementById ("seccion-libros-disponibles");
    seccionLibrosDisponibles.className = "no-mostrar";

    const seccionDetalleLibro = document.getElementById ("seccion-detalle-libro");
    seccionDetalleLibro.className = "no-mostrar";

    const seccionLibrosAutor = document.getElementById ("seccion-libros-autor");
    seccionLibrosAutor.className = "no-mostrar";

    const seccionDetalleCarrito = document.getElementById ("seccion-detalle-carrito");
    seccionDetalleCarrito.className = "no-mostrar";

    const seccionIniciarSesion = document.getElementById ("seccion-iniciar-sesion");
    seccionIniciarSesion.className = "no-mostrar";

    const seccionRegistroUsuario = document.getElementById ("seccion-registro-usuario");
    seccionRegistroUsuario.className = "no-mostrar";

    const seccionFinalizarCompra = document.getElementById ("seccion-finalizar-compra");
    seccionFinalizarCompra.className = "no-mostrar";

    // Obtener value input box
    const inputBuscarBox = document.getElementById ("buscar-box");
    const arrayBuscarValue = inputBuscarBox.value.toUpperCase().split(" ");

    inputBuscarBox.value = "";
    inputBuscarBox.placeholder = "Ingresar título, autor, editorial o palabra clave";
    
    // Obtener value option
    const inputBuscarPor = document.getElementById ("buscar-por");
    const buscarPor = inputBuscarPor.value;

    // Condicional si el formulario tiene algún value
    if (arrayBuscarValue){

        // Resultado búsqueda por "todos"
        if (buscarPor === "todos"){

            for (const palabra of arrayBuscarValue){

                libros.filter ((libro) => {

                    if (libro.titulo.includes (palabra) || libro.autor.toUpperCase().includes (palabra) || libro.editorial.toUpperCase().includes (palabra)) {
                        verifSinResultados = 1;

                        if (!arrayVerifId.includes (libro.id)){
                            arrayVerifId.push (libro.id);
                            mostrarResultadoBusqueda (libro.id);
                        }   
                    }  
                }) 
            }    
        }

        // Resultado búsqueda por "título"
        if (buscarPor === "titulo"){

            for (const palabra of arrayBuscarValue){

                libros.filter ((libro) => {

                    if (libro.titulo.includes (palabra)) {
                        verifSinResultados = 1;

                        if (!arrayVerifId.includes (libro.id)){
                            arrayVerifId.push (libro.id);
                            mostrarResultadoBusqueda (libro.id);
                        }   
                    }  
                }) 
            }    
        }

        // Resultado búsqueda por "autor"
        if (buscarPor === "autor"){

            for (const palabra of arrayBuscarValue){

                libros.filter ((libro) => {

                    if (libro.autor.toUpperCase().includes (palabra)) {
                        
                        verifSinResultados = 1;

                        if (!arrayVerifId.includes (libro.id)){
                            arrayVerifId.push (libro.id);
                            mostrarResultadoBusqueda (libro.id);
                        }   
                    }  
                }) 
            }    
        }

        // Resultado búsqueda por "editorial"
        if (buscarPor === "editorial"){

            for (const palabra of arrayBuscarValue){

                libros.filter ((libro) => {

                    if (libro.editorial.toUpperCase().includes (palabra)) {
                        
                        verifSinResultados = 1;

                        if (!arrayVerifId.includes (libro.id)){
                            arrayVerifId.push (libro.id);
                            mostrarResultadoBusqueda (libro.id);
                        }   
                    }  
                }) 
            }    
        }

        // Sin resultados
        if (verifSinResultados === 0){
            const divSinResultado = document.getElementById ("sin-resultado");
            divSinResultado.className = "mostrar";
            divSinResultado.innerHTML = "";
            divSinResultado.innerHTML = `<p class = "sin-resultado">Lo sentimos, no pudimos encontrar lo que estás buscando. Intenta otra búsqueda.</p>`
        }
    }
})

// Evento click en carrito de compras 
const iconoCarrito = document.getElementById ("icono-carrito");

iconoCarrito.addEventListener ("click", () => {
    
    irACarrito ();
    
})

// Evento click en iniciar compra
const botonIniciarCompra = document.getElementById ("boton-iniciar-compra");
botonIniciarCompra.addEventListener ("click", () => {

    // Verificar si la persona inicio sesión - SINTAXIS AVANZADA
    (verifUsuario === false) ? iniciarSesion() : iniciarCompra();
    verifIniciarCompra = true;

})

// Evento click botón finalizar compra
const finalizarCompra = document.getElementById ("finalizar-compra");
finalizarCompra.addEventListener ("click", (event) => {
    
    // Detener el evento
    event.preventDefault ();

    // Obtener los datos del input
    const nombre = document.getElementById ("nombre-finalizar-compra").value;
    const domicilio = document.getElementById ("domicilio-finalizar-compra").value;
    const telefono = document.getElementById ("telefono-finalizar-compra").value;
    const pais = document.getElementById ("pais-finalizar-compra").value;
    const provincia = document.getElementById ("provincia-finalizar-compra").value;
    const localidad = document.getElementById ("localidad-finalizar-compra").value;
    const codigoPostal = document.getElementById ("codigo-finalizar-compra").value;


    // Verificar si los campos están completos 
    if (nombre === "" || domicilio === "" || telefono === "" || pais === "" || provincia === "" || localidad === ""){

        // Sweet Alert si no se han completado todos los inputs
        Swal.fire ({
            text: `Por favor, complete todos los campos.`,
            padding: "2em",
            color: "#444",
            confirmButtonText: "OK",
            confirmButtonColor: "#227C9D",
        });  

    } else {

        // Sweet Alert detallando la info
        Swal.fire({
            title: `<h2 class = "h2-titulo-centrado" style = "margin: 10px;">Datos de Envío</h2>`, 
            html: `<p class = "p-alert"><b>Nombre:</b> ${nombre} </p>
                    <p class = "p-alert"><b>Domicilio:</b> ${domicilio} </p>
                    <p class = "p-alert"><b>Teléfono:</b> ${telefono} </p>
                    <p class = "p-alert"><b>País:</b> ${pais} --- <b>Provincia:</b> ${provincia} </p>
                    <p class = "p-alert"><b>Localidad:</b> ${localidad} --- <b>Código postal:</b> ${codigoPostal}</p>`, 
            
            confirmButtonText: "Confirmar", 
            confirmButtonColor: "#227C9D",
            showCancelButton: true,
            cancelButtonText: "Modificar",
            cancelButtonColor: "#227C9D",
        })
        .then ((result) => {

            if (result.isConfirmed) {

                // Limpiar inputs
                document.getElementById ("nombre-finalizar-compra").value = "";
                document.getElementById ("domicilio-finalizar-compra").value = "";
                document.getElementById ("telefono-finalizar-compra").value = "";
                document.getElementById ("pais-finalizar-compra").value = "";
                document.getElementById ("provincia-finalizar-compra").value = "";
                document.getElementById ("localidad-finalizar-compra").value = "";
                document.getElementById ("codigo-finalizar-compra").value = "";
                
                Swal.fire ({
                    title: `<h2 class = "h2-titulo-centrado" style = "margin: 0px;">¡Excelente!</h2>`,
                    text: `Confirmamos tu compra, gracias por elegirnos.`,
                    padding: "2em",
                    color: "#444",
                    confirmButtonText: "OK",
                    confirmButtonColor: "#227C9D",
                });

                // Remover key carrito del localStorage
                localStorage.removeItem ("carrito");

                // Función obtenerCarrito para vaciar variable carrito
                carrito = obtenerCarrito ();

                // Remover key items (cantidad) del localStorage
                localStorage.removeItem ("items");

                // Llamar a función obtenerItems ()
                items = obtenerItems ();

                // Mostrar items en contenedor carrito
                const infoItems = document.getElementById ("info-carrito");
                infoItems.innerText = `${items} productos`;

                // Mostrar libros disponibles HOME
                regresarAListaLibros ();
            }
        });
    }
})