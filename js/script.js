// INFORMACION LIBROS

let cantidadCompraLibro = 0;
let verif = 0;

// *** CLASE LIBROS ***

class Libros {
    constructor (id,titulo, autor, rangoEdad, sipnosis, editorial, fechaPublicacion, formato, idioma, cantidadPaginas, isbn, stockLibro, precio){
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.rangoEdad = rangoEdad;
        this.sipnosis = sipnosis;
        this.editorial = editorial;
        this.fechaPublicacion = fechaPublicacion;
        this.formato = formato;
        this.idioma = idioma;
        this.cantidadPaginas = cantidadPaginas;
        this.isbn = isbn;
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

        console.log("Quedan " + this.stockLibro + " unidades en stock.");
    }


    agregarStockLibro(cantidad){
        this.stockLibro = this.stockLibro + cantidad;
        this.stock = true;

        console.log ("Agregaste " + cantidad + " unidades al stock. Stock disponible: " + this.stockLibro + " unidades.");
    }


    cambiarPrecioLibro(precio){
        this.precio = precio;
        console.log ("Se cambió el precio a $" + this.precio);
    }      
    
    mostrarFichaTecnica(){
        console.log ("Título: " + this.titulo + " \nFecha de publicación: " + this.fechaPublicacion + "\nAutor: " + this.autor + "\nEditorial: " + this.editorial +  "\nEdad: " + this.rangoEdad + "\nFormato: " + this.formato + "\nIdioma: " + this.idioma + " \nPáginas: " + this.cantidadPaginas + "\nISBN: " + this.isbn + "\n\nSipnosis: " + this.sipnosis);
    }
}


const libro1 = new Libros (1, 
"La vaca se empaca", 
"Agustina Lynch", 
"2 a 4 años", 
"Cada vez que la vaca Paca tiene un berrinche, sus padres, en vez de ayudar, no saben cómo actuar. Así que Paca va a recorrer la granja para pedirles consejos a sus amigos, y así darles ideas a sus padres sobre cómo reaccionar. Contado para niños, pero pensado para grandes, este cuento nos da consejos sobre cómo podemos actuar cuando nuestros hijos tienen berrinches.",
"",
"Octubre 2020",
"Tapa dura",
"Español",
"38 p.",
"978-987-86-6173-5", 
8,
2800);

const libro2 = new Libros (2, "Caillou", "Joceline Sanschagrin", "2 a 4 años", "Caillou está creciendo y su mundo se agranda. Paso a paso él va ganando mayor independencia. A veces es difícil compartir lo que es de uno. Al final, Caillou y su amigo deciden intercambiar sus juguetes.", "La Brujita de Papel", "Agosto 2018", "Cartoné", "Español", "22 p.", "978-987-3681-90-5", 10, 1700);

// MÉTODOS LIBROS
// vender libro
//libro1.venderLibro();

// agregar stock libro
//libro1.agregarStockLibro(20);
//console.log (libro1.stockLibro);

// cambiar precio
//console.log (libro2.nombre);
//libro2.cambiarPrecioLibro (2500);  

// mostrar ficha
libro1.mostrarFichaTecnica();


// *** CLASE USUARIO ***

class Usuario{
    constructor (nombre, apellido, email){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.clave = clave;
    }
}

/*const usuario1 = new Usuario (nombreUsuario = prompt ("Ingresar nombre"), apellidoUsuario = prompt ("Ingresar apellido"), email = prompt ("Ingresar correo electrónico"), clave = prompt ("Crear clave"));
console.log (usuario1);*/


// Registrar Usuario sin CLASS
/*let nombreUsuario = prompt ("Ingresar nombre");

while (nombreUsuario === "" || !isNaN(nombreUsuario)){
    nombreUsuario = prompt ("Dato inválido, ingresar nombre");
}

let apellidoUsuario = prompt ("Ingresar apellido");

while (apellidoUsuario === "" || !isNaN(apellidoUsuario)){
    apellidoUsuario = prompt ("Dato inválido, ingresar apellido");
}

let email =  prompt ("Ingresar correo electrónico");

while (email === "" || !email.includes("@") || !email.includes(".com")){
    email = prompt ("Correo inválido, ingresar correo electrónico");
}

let clave = prompt ("Crear clave");

while (clave === "" || clave.length < 8){
    clave = prompt ("Clave inválida, debe de tener al menos 8 caracteres");
}*/





// ***** PREGUNTAS *****
// ¿Se puede poner CICLOS Y CONDICIONALES dentro de USUARIO1 cuando lo estamos creando?
// CÓMO BUSCAR POR atributos tomando todos los libros ingresados (rangoEdad, formato, categoria)


