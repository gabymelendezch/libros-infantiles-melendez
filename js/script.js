// INFORMACION LIBROS

let cantidadCompraLibro = 0;
let verif = 0;

// ****** CLASE LIBROS ******* //

class Libros {
    constructor (id,titulo, autor, fechaPublicacion, editorial, formato, idioma, cantidadPaginas, isbn, rangoEdad, sipnosis, stockLibro, precio){
        this.id = id;
        this.titulo = titulo.toUpperCase();
        this.autor = autor;
        this.fechaPublicacion = fechaPublicacion;
        this.editorial = editorial;
        this.formato = formato;
        this.idioma = idioma;
        this.cantidadPaginas = cantidadPaginas;
        this.isbn = isbn;
        this.rangoEdad = rangoEdad;
        this.sipnosis = sipnosis;

        this.stockLibro = stockLibro;
        this.stock = true;
        this.precio = precio;   
    }

    venderLibro(){
        cantidadCompraLibro = parseInt (prompt ("Cuántos libros desea comprar."));
        

        while ( (isNaN (cantidadCompraLibro)) || (!Number.isInteger (cantidadCompraLibro)) ){
            cantidadCompraLibro = parseInt (prompt ("Error, ingrese cantidad."));
        }
        
        if (cantidadCompraLibro <= this.stockLibro){
            this.stockLibro = this.stockLibro - cantidadCompraLibro;
            alert ("Compraste " + cantidadCompraLibro + " libro(s). ¡Gracias por tu compra!");

            if (this.stockLibro === 0){
                this.stock = false;
            }

        } else {
            
            while (verif === 0){
                if (cantidadCompraLibro > this.stockLibro){

                    alert ("Solamente hay " + this.stockLibro + " libros en stock.");
                    cantidadCompraLibro = parseInt (prompt ("Cuántos libros desea comprar."));
                  
                    while ( (isNaN (cantidadCompraLibro)) || (!Number.isInteger (cantidadCompraLibro)) ){
                        alert ("Error, ingrese cantidad.");
                        cantidadCompraLibro = parseInt (prompt ("Cuántos libros desea comprar."));
                    }

                } else {
                    this.stockLibro = this.stockLibro - cantidadCompraLibro;
                    alert ("Compraste " + cantidadCompraLibro + " libro(s). ¡Gracias por tu compra!");
                    verif = 1;              
                }
            }   

            verif = 0;
        }

        //alert ("Quedan " + this.stockLibro + " unidades en stock.");
    }

    mostrarFichaTecnica(){
        alert ("FICHA TÉCNICA \n\nTítulo: " + this.titulo + "\nAutor: " + this.autor + "\nFecha de Publicación: " + this.fechaPublicacion + "\nEditorial: " + this.editorial + "\nFormato: " + this.formato + "\nIdioma: " + this.idioma + "\nCantidad de páginas: " + this.cantidadPaginas + "\nISBN: " + this.isbn + "\n\nRango edad: " + this.rangoEdad + "\n\nSipnosis: " + this.sipnosis);

    }

    agregarStockLibro(cantidad){
        this.stockLibro = this.stockLibro + cantidad;
        this.stock = true;

        alert ("Agregaste " + cantidad + " unidad/es al stock.\nStock disponible: " + this.stockLibro + " unidades.");
    }

    verStockLibro (){
        alert (this.titulo + "\nStock disponible: " + this.stockLibro + " unidad/es.");
    }


    cambiarPrecioLibro(precio){
        this.precio = precio;
        alert ("Se cambió el precio a $" + this.precio);
    }      
}

// ***** AGREGAR LIBROS ***** 
const arrayLibros = [];

arrayLibros.push (new Libros (1, 
    "La vaca se empaca", 
    "Agustina Lynch", 
    "Octubre 2020",
    "", 
    "Tapa dura",
    "Español",
    "38 p.",
    "978-987-86-6173-5", 
    "2 a 4 años",
    "Cada vez que la vaca Paca tiene un berrinche, sus padres, en vez de ayudar, no saben cómo actuar. Así que Paca va a recorrer la granja para pedirles consejos a sus amigos, y así darles ideas a sus padres sobre cómo reaccionar. Contado para niños, pero pensado para grandes, este cuento nos da consejos sobre cómo podemos actuar cuando nuestros hijos tienen berrinches.",
    8,
    2800));

arrayLibros.push (new Libros (2, "Caillou", "Joceline Sanschagrin", "Agosto 2018", "La Brujita de Papel", "Cartoné", "Español", "22 p.", "978-987-3681-90-5", "2 a 4 años", "Caillou está creciendo y su mundo se agranda. Paso a paso él va ganando mayor independencia. A veces es difícil compartir lo que es de uno. Al final, Caillou y su amigo deciden intercambiar sus juguetes.", 10, 1700));



// ****** LIBROS DISPONIBLES ****** //
console.log ("LIBROS DISPONIBLES");

for (const libro of arrayLibros){
    console.log ("* ID " + libro.id + " - " + libro.titulo);
}



// // ****** VENDER LIBRO POR TITULO ****** //
// let verifLibro = 0;

// while (verifLibro === 0){

//     let elegido = prompt ("Elegir libro que desea comprar.");
//     let libroElegido = elegido.toUpperCase ();

//     const libroAVender = arrayLibros.find (libro =>{
//         if (libro.titulo === libroElegido){
//             return true;
//         } else {
//             return false;
//         }    
//     })

//     // llamar al MÉTODO para vender libro
//     if (libroAVender){
//         verifLibro = 1;
//         libroAVender.venderLibro();
//     } else {
//         alert ("No se encontró el libro que está buscando.");
//     }
// }



// // ****** MOSTRAR FICHA TECNICA ****** //
// let buscar = prompt ("Escoger libro (escribir nombre) para mostrar ficha técnica.");
// let buscarLibro = buscar.toUpperCase();

// // buscar dentro del arrayLibros 
// const filtrarPorTitulo = (libro) =>{
//     if (libro.titulo.includes (buscarLibro)){
//         //console.log("Resultado de búsqueda: " + libro.titulo);
//         return true; // true para que pueda agregarse en el nuevo arrayBusqueda 
//     }
// }

// const arrayBusqueda = arrayLibros.filter((filtrarPorTitulo)); // uso como parámetro función 'filtrarPorTitulo'

// // llamar al MÉTODO para mostrar ficha técnica
// arrayBusqueda.forEach ((libro) => {
//     libro.mostrarFichaTecnica();
// })



// ****** AGREGAR STOCK POR ID ****** //
// let idLibroElegido = parseInt (prompt ("Elegir ID del libro que desea aumentar stock."));

// let indiceLibro = arrayLibros.map (libro => libro.id).indexOf(idLibroElegido);
// let tituloPorIndice = arrayLibros[indiceLibro].titulo;

// alert ("Elegiste " + tituloPorIndice);

// let cantidadAAgregar = parseInt (prompt ("¿Cuántos libros desea agregar?"));

// while (isNaN(cantidadAAgregar) || (cantidadAAgregar === 0)){
//     cantidadAAgregar = parseInt (prompt ("Ingrese cantidad válida. ¿Cuántos libros desea agregar?"));
// }

// arrayLibros[indiceLibro].agregarStockLibro(cantidadAAgregar);



// ****** VER STOCK POR ID ****** //
// idLibroElegido = parseInt (prompt ("Elegir ID del libro que desea ver stock."));
// indiceLibro = arrayLibros.map (libro => libro.id).indexOf(idLibroElegido);
// tituloPorIndice = arrayLibros[indiceLibro].titulo;

// arrayLibros[indiceLibro].verStockLibro();



// ****** CAMBIAR PRECIO POR ID ****** //
// idLibroElegido = parseInt (prompt ("Elegir ID del libro que desea cambiar de precio."));

// indiceLibro = arrayLibros.map (libro => libro.id).indexOf(idLibroElegido);
// tituloPorIndice = arrayLibros[indiceLibro].titulo;
// let precioActual = arrayLibros[indiceLibro].precio;

// alert ("Elegiste " + tituloPorIndice + "\nPrecio actual: $" + precioActual);

// let precioACambiar = parseInt (prompt ("Ingrese nuevo precio."));

// while (isNaN(precioACambiar) || (precioACambiar === 0)){
//     precioACambiar = parseInt (prompt ("Ingrese precio válido."));
// }

// arrayLibros[indiceLibro].cambiarPrecioLibro (precioACambiar);



// ****** CLASE USUARIO ****** //

class Usuarios{
    constructor (nombre, apellido, email, clave){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.clave = clave;
    }
}

// ****** REGISTRAR USUARIO ****** //

// arrayUsuarios = [];

// let nombreUsuario = prompt ("Ingresar nombre");

// while (nombreUsuario === "" || !isNaN(nombreUsuario)){
//     nombreUsuario = prompt ("Dato inválido, ingresar nombre");
// }

// let apellidoUsuario = prompt ("Ingresar apellido");

// while (apellidoUsuario === "" || !isNaN(apellidoUsuario)){
//     apellidoUsuario = prompt ("Dato inválido, ingresar apellido");
// }

// let email =  prompt ("Ingresar correo electrónico");

// while (email === "" || !email.includes("@") || !email.includes(".com")){
//     email = prompt ("Correo inválido, ingresar correo electrónico");
// }

// let clave = prompt ("Crear clave");

// while (clave === "" || clave.length < 8){
//     clave = prompt ("Clave inválida, debe de tener al menos 8 caracteres");
// }

// arrayUsuarios.push (nombreUsuario, apellidoUsuario, email, clave);
// console.log (arrayUsuarios);