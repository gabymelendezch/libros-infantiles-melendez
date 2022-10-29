//localStorage.clear ();
// accedo a la info en localStorage y la guardo en variable libros 
const libros = JSON.parse (localStorage.getItem ("libros"));

// variables globales
let contId = 1;
let unidadesLibroAComprar = 0;
let itemsAgregados = 0;

// MOSTRAR libros disponibles //
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


// FUNCION obtener carrito
function obtenerCarrito () {
    let carrito = [];

    const carritoLS = localStorage.getItem ("carrito");

    if (carritoLS !== null) {
        carrito = JSON.parse(carritoLS);
    }

    return carrito;
}
let carrito = obtenerCarrito ();


// FUNCION obtener items agregados
function obtenerItems () {
    let items = 0;

    const itemsLS = localStorage.getItem ("items");

    if (itemsLS !== null) {
        items = JSON.parse(itemsLS);
    }

    return items;
}
let items = obtenerItems ();


// mostrar items en contenedor carrito
infoItems = document.getElementById ("info-carrito");
infoItems.innerText = `${items} productos`;


// FUNCION botón volver
function regresarAListaLibros (){
    const seccionLibrosDisponibles = document.getElementById ("seccion-libros-disponibles");
    seccionLibrosDisponibles.className = "mostrar";

    const seccionDetalleLibro = document.getElementById ("seccion-detalle-libro");
    seccionDetalleLibro.className = "no-mostrar";

    const seccionLibrosAutor = document.getElementById ("seccion-libros-autor");
    seccionLibrosAutor.className = "no-mostrar";

    const seccionResultadoBusqueda = document.getElementById ("seccion-busqueda");
    seccionResultadoBusqueda.className = "no-mostrar";

    const alerta = document.getElementById ("alerta");
    alerta.className = "alerta-no-mostrar";
    alerta.innerText = "";
}

// FUNCION mostrar libro clickeado
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

            // evento botón comprar
            botonAgregar.addEventListener ("click", () => {
                
                // chequear si hay suficientes libros en stock
                let unidadesLibroAComprar = parseInt (document.getElementById ("cantidad-libro").value);

                if ((!unidadesLibroAComprar === 1) || (unidadesLibroAComprar > libro.stockLibro)) {

                    console.log (unidadesLibroAComprar);
                    // borro input
                    document.getElementById ("cantidad-libro").value = 1;
                    alerta.className = "alertas-mostrar";
                    alerta.innerText = `Lo sentimos, solo tenemos ${libro.stockLibro} libros en stock`
                    
                } else {

                    // borrar input
                    document.getElementById ("cantidad-libro").value = 1;

                    // borrar alertas
                    alerta.className = "alertas-no-mostrar";
                    alerta.innerText = "";

                    // sumar items
                    items = items + unidadesLibroAComprar;

                    // indicar info items en carrito
                    infoItems = document.getElementById ("info-carrito");
                    infoItems.innerText = `${items} productos`;
        
                    // agregar a array carrito
                    alerta.className = "alertas-mostrar";
                    alerta.innerText = `Se agregó ${unidadesLibroAComprar} libro/s a su carrito`;

                    carrito.push ({
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
            });

            botones.append (botonAgregar);
            seccionFicha.append(alerta);
        }
    }) 
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


// FUNCION sacar valor input (cantidad libros a comprar)
function valorInput (){
    unidadesLibroAComprar = parseInt (document.getElementById ("cantidad-libro").value);  
    console.log (unidadesLibroAComprar);

    // borrar alertas
    alerta.className = "alertas-no-mostrar";
    alerta.innerText = "";
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
                                <h2>${libro.titulo}</h2>`

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

// EVENTO click en botón buscar
const botonBuscar = document.getElementById ("boton-buscar");

botonBuscar.addEventListener ("click", () => {

    let verifSinResultados = 0;

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

    // obtener value input box
    const inputBuscarBox = document.getElementById ("buscar-box");
    const buscarValue = inputBuscarBox.value.toUpperCase();
    inputBuscarBox.value = "";
    inputBuscarBox.placeholder = "Ingresar título, autor, ISBN, o palabra clave";
    
    // obtener value option
    const inputBuscarPor = document.getElementById ("buscar-por");
    const buscarPor = inputBuscarPor.value;
    inputBuscarPor.value = "todos";

    // buscar si el box tiene algún valor
    if (buscarValue){

        // resultado búsqueda por título
        const resultadoTitulo = libros.filter ((libro) => {
            if (buscarPor === "titulo"){
                if (libro.titulo.includes (buscarValue)){
                    mostrarResultadoBusqueda (libro.id);
                    verifSinResultados ++;
                } 
            }
        });

        // resultado búsqueda por autor
        const resultadoAutor = libros.filter ((libro) => {
            if (buscarPor === "autor"){
                if (libro.autor.toUpperCase().includes (buscarValue)){
                    mostrarResultadoBusqueda (libro.id);
                }
            } 
        });

        // resultado búsqueda por editorial
        const resultadoEditorial = libros.filter ((libro) => {
            if (buscarPor === "editorial"){
                if (libro.editorial.toUpperCase().includes (buscarValue)){
                    mostrarResultadoBusqueda (libro.id);
                }
            } 
        });

        // sin resultados
        if (verifSinResultados === 0){
            const divSinResultado = document.getElementById ("sin-resultado");
            divSinResultado.className = "mostrar";
            divSinResultado.innerHTML = "";
            divSinResultado.innerHTML = `<p>Lo sentimos, no pudimos encontrar lo que estás buscando. Intenta otra búsqueda.</p>`
        }
    }
})


// EVENTO click en carrito de compras 
const iconoCarrito = document.getElementById ("icono-carrito");

iconoCarrito.addEventListener ("click", () => {
    // ver carrito
    console.log ("ver carrito")
});




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


