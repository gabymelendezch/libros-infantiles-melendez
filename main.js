//localStorage.clear ();

// variables globales
let contId = 1;
let unidadesLibroAComprar = 0;
let itemsAgregados = 0;
let totalAPagar = 0;
let subtotalItem = 0;
// guardar verifusuario en localStorage ??
let verifUsuario = false;
let librosJSON = [];

// accedo a los libros guardados en libros.json
// fetch ("/libros.json")
//     .then ( (response) => {
//         return response.json();
//     }).then ( (libros) => {
//         console.log (libros);
//         librosJSON = libros;

//         // MOSTRAR en HOME los libros disponibles //
//         const listaLibros = document.getElementById ("lista-libros");

//         for (const libro of librosJSON){

//             if (libro.stockLibro > 0){

//                 let div = document.createElement ("div");
//                 div.className = "contenedor-por-libro";

//                 let li = document.createElement ("li");
//                 li.className = "libro";

//                 let linkLibro = document.createElement ("a");
//                 linkLibro.className = "estilo-link-libros";
//                 linkLibro.onclick = function () { buscarLibroPorTitulo(libro.titulo) };
//                 linkLibro.innerHTML = `<img src = "${libro.img}"/>
//                                     <h2>${libro.titulo}</h2>`

//                 let linkAutor = document.createElement ("a");
//                 linkAutor.className = "estilo-link-libros";
//                 linkAutor.onclick = function () { buscarLibrosPorAutor(libro.autor) };    
//                 linkAutor.innerHTML = `<p class = "autor-libro">${libro.autor}</p>`
                
//                 li.append(linkLibro);
//                 li.append(linkAutor);
//                 div.append (li);
//                 listaLibros.append(div);  
//             }
//         }
// });


// accedo a los libros (array) en localStorage y los guardo en variable libros 
const libros = JSON.parse (localStorage.getItem ("libros"));


// MOSTRAR en HOME los libros disponibles //
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


// *************** FUNCIONES *************** //

// FUNCION registrar usuario
function registrarUsuario (){
    const seccionRegistroUsuario = document.getElementById ("seccion-registro-usuario");
    seccionRegistroUsuario.className = "mostrar";
}

// FUNCION inciar sesión
function iniciarSesion (){
    const seccionIniciarSesion = document.getElementById ("seccion-iniciar-sesion");
    seccionIniciarSesion.className = "mostrar";
}

// FUNCION obtener carrito
function obtenerCarrito () {
    let carrito = [];

    const carritoLS = localStorage.getItem ("carrito");

    if (carritoLS) {
        carrito = JSON.parse(carritoLS);
    }

    return carrito;
}
let carrito = obtenerCarrito ();

// FUNCION obtener items agregados
function obtenerItems () {
    let items = 0;

    const itemsLS = localStorage.getItem ("items");

    if (itemsLS) {
        items = JSON.parse(itemsLS);
    }

    return items;
}
let items = obtenerItems ();

// mostrar items en contenedor carrito
infoItems = document.getElementById ("info-carrito");
infoItems.innerText = `${items} productos`;


// FUNCION botón home
function regresarAListaLibros (){
    const seccionLibrosDisponibles = document.getElementById ("seccion-libros-disponibles");
    seccionLibrosDisponibles.className = "mostrar";

    const seccionDetalleLibro = document.getElementById ("seccion-detalle-libro");
    seccionDetalleLibro.className = "no-mostrar";

    const seccionLibrosAutor = document.getElementById ("seccion-libros-autor");
    seccionLibrosAutor.className = "no-mostrar";

    const seccionResultadoBusqueda = document.getElementById ("seccion-busqueda");
    seccionResultadoBusqueda.className = "no-mostrar";

    const seccionDetalleCarrito = document.getElementById ("seccion-detalle-carrito");
    seccionDetalleCarrito.className = "no-mostrar";
}

// FUNCION mostrar libro (por título) clickeado
function buscarLibroPorTitulo(titulo){

    return libros.find ((libro) => {

        if (libro.titulo === titulo){
            
            // mostrar sección detalle libro
            const seccionFicha = document.getElementById ("seccion-detalle-libro");
            seccionFicha.className = "mostrar";

            // no mostrar
            const seccionLibrosDisponibles = document.getElementById ("seccion-libros-disponibles");
            seccionLibrosDisponibles.className = "no-mostrar";

            const seccionLibrosAutor = document.getElementById ("seccion-libros-autor");
            seccionLibrosAutor.className = "no-mostrar";

            const seccionResultadoBusqueda = document.getElementById ("seccion-busqueda");
            seccionResultadoBusqueda.className = "no-mostrar";

            const seccionDetalleCarrito = document.getElementById ("seccion-detalle-carrito");
            seccionDetalleCarrito.className = "no-mostrar";

            // información del libro
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
                        <button class = "botones-accion" onclick = regresarAListaLibros()>Home</button>
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

            // crear botón comprar
            const botonAgregar = document.createElement ("button");
            botonAgregar.innerText = "Comprar"
            botonAgregar.setAttribute ("id", "boton-agregar-libro");
            botonAgregar.className = "botones-accion";

            // evento botón comprar
            botonAgregar.addEventListener ("click", () => {
                
                // chequear si hay suficientes libros en stock
                let unidadesLibroAComprar = parseInt (document.getElementById ("cantidad-libro").value);

                if (unidadesLibroAComprar > libro.stockLibro) {

                    // borro input
                    document.getElementById ("cantidad-libro").value = 1;

                    // SWEET ALERT  sin stock suficiente
                    Swal.fire ({
                        title: "¡ LO SENTIMOS !",
                        text: `Tenemos solamente ${libro.stockLibro} libros en stock.`,
                        padding: "2em",
                        color: "#444",
                        confirmButtonText: "Entendido",
                        confirmButtonColor: "#227C9D",
                        //timer: 2000,
                    });   
                    
                } else {

                    // borrar input
                    document.getElementById ("cantidad-libro").value = 1;

                    // sumar items
                    items = items + unidadesLibroAComprar;

                    // indicar número de items en carrito
                    infoItems = document.getElementById ("info-carrito");
                    infoItems.innerText = `${items} productos`;
                    
                    // SWEET ALERT item agregado a carrito
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

                        if (result.isConfirmed) {
                            console.log ("seguir comprando")
                        } else {
                            console.log ("ir a carrito");
                        }
                    
                      });

                    // agregar item a array carrito
                    carrito.push ({
                        imagen: libro.img,
                        titulo: libro.titulo,
                        cantidad: unidadesLibroAComprar,
                        precio: libro.precio,
                    });

                    // almacenar array carrito en localStorage
                    localStorage.setItem ("carrito", JSON.stringify (carrito));

                    // almacenar cantidad items agregados en localStorage
                    localStorage.setItem ("items", JSON.stringify (items));

                    //disminuir stock 
                    libro.stockLibro = libro.stockLibro - unidadesLibroAComprar;

                    //almacenar array libros en localStorage
                    localStorage.setItem ("libros", JSON.stringify (libros));

                }
            })

            botones.append (botonAgregar);
        }
    }) 
}

// FUNCION sacar valor input (cantidad libros a comprar)
function valorInput (){
    unidadesLibroAComprar = parseInt (document.getElementById ("cantidad-libro").value);  
}

// FUNCION mostrar libros por autor clickeado
function buscarLibrosPorAutor(nombreAutor){

    const librosPorAutor = libros.filter ((libro) => libro.autor === nombreAutor);

    // mostrar sección libros por autor
    const seccionLibrosAutor = document.getElementById ("seccion-libros-autor");
    seccionLibrosAutor.className = "mostrar";

    // no mostrar
    const seccionLibrosDisponibles = document.getElementById ("seccion-libros-disponibles");
    seccionLibrosDisponibles.className = "no-mostrar";

    const seccionFicha = document.getElementById ("seccion-detalle-libro");
    seccionFicha.className = "no-mostrar";

    const seccionBusqueda = document.getElementById ("seccion-busqueda");
    seccionBusqueda.className = "no-mostrar";

    const seccionDetalleCarrito = document.getElementById ("seccion-detalle-carrito");
    seccionDetalleCarrito.className = "no-mostrar";

    // grid con libros del autor clickeado
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

// FUNCION mostrar resultado por búsqueda
function mostrarResultadoBusqueda (id){

    const divSinResultado = document.getElementById ("sin-resultado");
    divSinResultado.className = "no-mostrar";

    for (const libro of libros) {
        if (libro.id === id) {

            // grid con resultados búsqueda
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

// FUNCION finalizar compra
function finalizarCompra (){
    console.log ("finalizar compra");
}


// *************** EVENTOS *************** //

// EVENTO click en link ingresar - nav
const ingresar = document.getElementById ("a-ingresar");
ingresar.addEventListener ("click", () => {

    // llamar función iniciar sesión que lleva al formulario
    iniciarSesion ();
})

// EVENTO click en link crear cuenta - nav
const crearCuenta = document.getElementById ("a-crear-cuenta");
crearCuenta.addEventListener ("click", () => {

    // llamar función registrar usuario que lleva al formulario
    registrarUsuario ();
})

// EVENTO click en botón buscar
const botonBuscar = document.getElementById ("boton-buscar");

botonBuscar.addEventListener ("click", () => {

    let verifSinResultados = 0;
    let arrayVerifId = [];

    // limpiar sección 
    const listaResultadoBusqueda = document.getElementById ("libros-por-busqueda");
    listaResultadoBusqueda.innerHTML = "";

    // mostrar sección búsqueda
    const seccionBusqueda = document.getElementById ("seccion-busqueda");
    seccionBusqueda.className = "mostrar";

    // no mostrar
    const seccionLibrosDisponibles = document.getElementById ("seccion-libros-disponibles");
    seccionLibrosDisponibles.className = "no-mostrar";

    const seccionDetalleLibro = document.getElementById ("seccion-detalle-libro");
    seccionDetalleLibro.className = "no-mostrar";

    const seccionLibrosAutor = document.getElementById ("seccion-libros-autor");
    seccionLibrosAutor.className = "no-mostrar";

    const seccionDetalleCarrito = document.getElementById ("seccion-detalle-carrito");
    seccionDetalleCarrito.className = "no-mostrar";

    // obtener value input box
    const inputBuscarBox = document.getElementById ("buscar-box");
    const arrayBuscarValue = inputBuscarBox.value.toUpperCase().split(" ");

    inputBuscarBox.value = "";
    inputBuscarBox.placeholder = "Ingresar título, autor, editorial o palabra clave";
    
    // obtener value option
    const inputBuscarPor = document.getElementById ("buscar-por");
    const buscarPor = inputBuscarPor.value;

    // condicional: si el formulario tiene algún value
    if (arrayBuscarValue){

        // resultado búsqueda por "todos"
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

        // resultado búsqueda por "título"
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

        // resultado búsqueda por "autor"
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

        // resultado búsqueda por "editorial"
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

        // sin resultados
        if (verifSinResultados === 0){
            const divSinResultado = document.getElementById ("sin-resultado");
            divSinResultado.className = "mostrar";
            divSinResultado.innerHTML = "";
            divSinResultado.innerHTML = `<p class = "sin-resultado">Lo sentimos, no pudimos encontrar lo que estás buscando. Intenta otra búsqueda.</p>`
        }
    }
})

// EVENTO click en carrito de compras 
const iconoCarrito = document.getElementById ("icono-carrito");

iconoCarrito.addEventListener ("click", () => {
    
    totalAPagar = 0;

    // mostrar sección detalle carrito
    const seccionDetalleCarrito = document.getElementById ("seccion-detalle-carrito");
    seccionDetalleCarrito.className = "mostrar";

    // vaciar div contenedor detalle carrito
    const contenedorDetalleCarrito = document.getElementById ("contenedor-detalle-carrito");
    contenedorDetalleCarrito.innerHTML = `<h3 class = "h3-estilo">DETALLE COMPRA</h3>`;

    // no mostrar
    const seccionLibrosDisponibles = document.getElementById ("seccion-libros-disponibles");
    seccionLibrosDisponibles.className = "no-mostrar";

    const seccionFicha = document.getElementById ("seccion-detalle-libro");
    seccionFicha.className = "no-mostrar";

    const seccionLibrosAutor = document.getElementById ("seccion-libros-autor");
    seccionLibrosAutor.className = "no-mostrar";

    const seccionBusqueda = document.getElementById ("seccion-busqueda");
    seccionBusqueda.className = "no-mostrar";
    
    // ver carrito
    for (const item of carrito){

        subtotalItem = parseInt (item.cantidad * item.precio);
        totalAPagar = totalAPagar + subtotalItem;

        const div = document.createElement ("div");
        div.className = "detalle-compra-por-libro";
        div.innerHTML = `<img src = "${item.imagen}" class = "img-carrito"/>
                        <p class = "p-carrito">${item.titulo}<p>
                        <p class = "p-carrito">${item.cantidad} unidad/es </p>
                        <p>$${subtotalItem}`;

        contenedorDetalleCarrito.append (div);
    }

    const pTotalAPagar = document.getElementById ("div-total-pagar");
    pTotalAPagar.innerHTML = `<p class = "p-total"><strong>TOTAL A PAGAR </strong></p>
                                <p>$${totalAPagar}</p>`;

    seccionDetalleCarrito.append (contenedorDetalleCarrito);
    seccionDetalleCarrito.append (pTotalAPagar);

    // variable botón 
    const botonesCarrito = document.getElementById ("botones-carrito");

    botonesCarrito.before (contenedorDetalleCarrito);
    botonesCarrito.before (pTotalAPagar);
})

// EVENTO click en iniciar compra
const botonIniciarCompra = document.getElementById ("boton-iniciar-compra");
botonIniciarCompra.addEventListener ("click", () => {

    // verificar si la persona inicio sesión o se registró
    (verifUsuario === false) ? iniciarSesion() : finalizarCompra();

})

// EVENTO click botón crear cuenta del formulario registro usuario
const botonCrearCuenta = document.getElementById ("crear-cuenta");
botonCrearCuenta.addEventListener ("click", () => {

    // guardar la información del usuario en Usuarios y en localStorage
    console.log ("se creó la cuenta exitosamente");
})

// EVENTO click en link inicia sesión del formulario resgistro usuario
const linkIniciaSesion = document.getElementById ("a-iniciar-sesion");
linkIniciaSesion.addEventListener ("click", () => {

    // llamar función iniciar sesión que lleva al formulario
    iniciarSesion();
})

// EVENTO click botón acceder del formulario de iniciar sesión
const botonAcceder = document.getElementById ("acceder");
botonAcceder.addEventListener ("click", () => {

    verifUsuario = true;
    // guardar verifusuario en localStorage ??
    // guardar value email y contraseña

    // verificar si existe en el array usuarios
    console.log ("click en botón acceder");
})

// EVENTO click en link regístrate del formulario iniciar sesión
const linkRegistrate = document.getElementById ("a-registrate");
linkRegistrate.addEventListener ("click", () => {
    
    // llamar función registrar usuario que lleva al formulario
    registrarUsuario ();
})

