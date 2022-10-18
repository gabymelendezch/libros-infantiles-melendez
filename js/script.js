let verif = 0;
let cantidadCompraLibro = 0;
let totalCarrito = 0;


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
        this.precio = precio;   
    }

    venderLibro (){
        cantidadCompraLibro = parseInt (prompt ("Cuántos libros desea comprar."));
        

        while ( (isNaN (cantidadCompraLibro)) || (!Number.isInteger (cantidadCompraLibro)) ){
            cantidadCompraLibro = parseInt (prompt ("Error, ingrese cantidad."));
        }
        
        if (cantidadCompraLibro <= this.stockLibro){
            this.stockLibro = this.stockLibro - cantidadCompraLibro;
            totalCarrito = totalCarrito + (this.precio * cantidadCompraLibro);
            alert ("Agregaste " + cantidadCompraLibro + " libro(s) al carrito de compras. El total es de $" + totalCarrito);

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
                    totalCarrito = totalCarrito + (this.precio * cantidadCompraLibro);
                    alert ("Agregaste " + cantidadCompraLibro + " libro(s) al carrito de compras. El total es de $" + totalCarrito);
                    verif = 1;              
                }
            }   

            verif = 0;
        }

        verifVentaLibro = true; // para que vuelva a ejecutar el código de VENDER LIBRO POR TITULO
    }

    agregarStockLibro (cantidad){
        this.stockLibro = this.stockLibro + cantidad;
        verifId = true;

        alert ("Agregaste " + cantidad + " unidad/es al stock.\nStock disponible: " + this.stockLibro + " unidades.");
    }

    verStockLibro (){
        alert (this.titulo + "\nStock disponible: " + this.stockLibro + " unidad/es.");
        verifId = true;
    }


    cambiarPrecioLibro (precio){
        this.precio = precio;
        alert ("Se cambió el precio a $" + this.precio);
        verifId = true;
    }      

    mostrarFichaTecnica (){
        alert ("FICHA TÉCNICA \n\nTítulo: " + this.titulo + "\nAutor: " + this.autor + "\nFecha de Publicación: " + this.fechaPublicacion + "\nEditorial: " + this.editorial + "\nFormato: " + this.formato + "\nIdioma: " + this.idioma + "\nCantidad de páginas: " + this.cantidadPaginas + "\nISBN: " + this.isbn + "\n\nRango edad: " + this.rangoEdad + "\n\nSipnosis: " + this.sipnosis + "\n\nPrecio: $" + this.precio);
        cont = 0;
    }
}

// ***** AGREGAR LIBROS ***** 
const arrayLibros = [];

arrayLibros.push (new Libros (1, "La vaca se empaca", "Lynch Agustina", "Octubre 2020", "", "Tapa dura", "Español", 38, "9789878661735", "2 a 4 años", "Cada vez que la vaca Paca tiene un berrinche, sus padres, en vez de ayudar, no saben cómo actuar. Así que Paca va a recorrer la granja para pedirles consejos a sus amigos, y así darles ideas a sus padres sobre cómo reaccionar.\nContado para niños, pero pensado para grandes, este cuento nos da consejos sobre cómo podemos actuar cuando nuestros hijos tienen berrinches.", 8, 2800));
arrayLibros.push (new Libros (2, "Caillou ¡Es mío!", "Sanschagrin Joceline ", "Agosto 2018", "La Brujita de Papel", "Tapa dura", "Español", 22, "9789873681905", "2 a 4 años", "Caillou está creciendo y su mundo se agranda. Paso a paso él va ganando mayor independencia.A veces es difícil compartir lo que es de uno. Al final, Caillou y su amigo deciden intercambiar sus juguetes.", 10, 1700));
arrayLibros.push (new Libros (3, "Las Emociones - Mis Animágenes", "Editores de Auzou", "Mayo 2020", "Auzou", "Tapa dura", "Español", 10, "9782733895900", "0 a 2 años", "Descubre las distintas emociones gracias a mecanismos simples y fáciles de activar.\nEn la última página, diviértete adivinando lo que se esconde bajo las solapas.", 4, 3990));
arrayLibros.push (new Libros (4, "Atrápala Kitty", "Parsons Nicola ", "Julio 2019", "Manolito Books", "Tapa dura", "Español", 24, "9788417299453", "2 a 4 años", "Kitty ama jugar con su suave bola de estambre. Tanto, que no quiere compartirla con nadie, pero pronto aprenderá que jugar sola no es tan divertido.\n¿Entenderá Kitty la magia de compartir? Descúbrelo en esta tierna historia con Puppy, Rabbit y todos los amigos de Kitty.", 20, 1800));
arrayLibros.push (new Libros (5, "Muevo y Miro - En la Selva", "Editores de Yoyo Books", "Octubre 2020", "Yoyo Books", "Tapa dura", "Español", 10, "9789463993500", "2 a 4 años", "¡Visita a los animales que viven en la selva!\n¡Mueve las lengüetas y te sorprenderás!\nEscenas alegres que fascinarán a los pequeños y estimularán su motricidad.", 5, 3490));
arrayLibros.push (new Libros (6, "Primer Día de Clases", "Sin Autor", "", "Grupo Sin Fronteras", "Tapa dura", "Español", 10, "9789585541085", "0 a 2 años", "¡Libros perfectos para manos pequeñas! El innovador formato de rueda giratoria brinda una forma divertida para que los más pequeños aprendan los números hasta el 5 y también mejoren las habilidades de motricidad fina. Entretenimiento y risas con personajes coloridos.", 4, 3790));
arrayLibros.push (new Libros (7, "Conviértete en Héroe con Inés la Princesita", "Editores de Auzou", "Agosto 2018", "Auzou", "Tapa dura", "Español", 20, "9782733866771", "2 a 4 años", "¡Inés debe encontrar un regalo para su madre, la reina!\nPero se presentan ante ella diferentes posibilidades: ¡y te necesita a ti! A lo largo de la historia, tus elecciones la conducirán a vivir aventuras muy diferentes.\nConviértete en héroe y elige en cada página una pestaña para continuar la historia", 11, 3290));
arrayLibros.push (new Libros (8, "Mi Libro Gigante de Animales", "Editores de Auzou", "Octubre 2018", "Auzou", "Tapa dura", "Español", 8, "9782733884782", "0 a 2 años", "Este libro GIGANTE llamará la atención de los más pequeños. En cada página les esperan tres texturas para tocar; un espejo; una solapa de tela y un montón de sorpresas para explorar este universo en cuatro patas.", 2, 9990));
arrayLibros.push (new Libros (9, "La Selva y La Sabana - Mis Animágenes", "Editores de Auzou", "Septiembre 2018", "Auzou", "Tapa dura", "Español", 10, "9782733885505", "0 a 2 años", "Descubre los animales de la selva y de la sabana gracias a mecanismos divertidos y fáciles de activar.\nEn la última página, diviértete adivinando lo que se esconde bajo las solapas.", 6, 3990));
arrayLibros.push (new Libros (10, "La Vaca y la Espinaca", "Lynch Agustina", "Julio 2019", "Editorial el Ateneo","Tapa dura", "Español", 36, "9789500210041", "0 a 2 años", "La vaca Paca no se anima a probar nuevas comidas. Solo quiere comer fideos. Pero Mamá Vaca y el resto de los amigos de la granja la ayudarán a comer mejor.\nEscrito con rimas y con los simpáticos sonidos de los animalitos de la granja, este libro nos invita a leerles a los chicos un cuento como a ellos les gusta: con ruidos, colores y risas. Y así, sutilmente, podemos ayudarlos a que prueben nuevos sabores.", 15, 2700));
arrayLibros.push (new Libros (11, "Caillou No mas Pañales", "L'Heureux Christine", "Agosto 2011", "La Brujita de Papel", "Tapa dura", "Español", 22, "9789874918864", "2 a 4 años", "Caillou ya sabe cuándo usar la pelela. ¡Por eso ahora él quiere usar el inodoro de grandes y dejar de usar pañales de noche!", 2, 1650));
arrayLibros.push (new Libros (12, "¡A la Cama! - Mis Animágenes", "Editores de Auzou", "Marzo 2017", "Auzou", "Tapa dura", "Español", 10, "9782733857748", "0 a 2 años", "Descubre las diferentes etapas de la hora de ir a la cama gracias a mecanismos divertidos y fáciles de activar.\nEn la última página, diviértete adivinando lo que se esconde bajo las solapas.", 4, 3990));
arrayLibros.push (new Libros (13, "Cuentos Montessori para Crecer Felices", "Prada Marta", "Octubre 2018", "Nube de Tinta", "Rústica", "Español", 96, "9789871997589", "4 a 6 años", "Como familia, la crianza nos presenta nuevos retos cada día: el sueño, el pañal, la llegada de un nuevo hermano, las frustraciones, los miedos... ¿Qué mejor manera de afrontarlos que desde el respeto, la empatía y la consciencia? Con cuentos para los niños y explicaciones para los padres, este precioso libro de la autora del conocido blog Pequefelicidad los ayudará a crecer juntos a partir de los principios de la filosofía Montessori y la crianza respetuosa.", 12, 3500));
arrayLibros.push (new Libros (14, "Cuentos Montessori para las Buenas Noches", "Prada Marta", "Octubre 2019", "Nube de Tinta", "Rústica", "Español", 96, "9788417605148", "4 a 6 años", "Nuestros pequeños crecen cada día, y es importante guardar un momento antes de acostarse para parar, conectar y empatizar con ellos, compartir vivencias y expresar emociones que necesitan de ese momento de reposo para salir. El sueño es fundamental en su desarrollo y el momento justo de antes de ir a dormir influye en su calidad y en los pensamientos y emociones que quedan en el cerebro justo antes de entrar en este modo de «desconexión y procesamiento de información».\nEste libro se convertirá en la herramienta de papel ideal para encontrar vuestro momento al final del día para miraros a los ojos, inspirar calma, naturaleza, valorar lo cotidiano, apreciar el mundo en todos sus aspectos y alentar a los niños y niñas a ser ellos mismos\n«Siembra en los niños ideas buenas aunque no las entiendan.Los años se encargarán de descifrarlas en su entendimiento y de hacerlas crecer en su corazón.» María Montessori", 8, 3500));


// ****** LIBROS DISPONIBLES ****** //

const listaLibros = document.getElementById ("lista-libros");
let contId = 1;

for (const libros of arrayLibros){
    let li = document.createElement ("li");
    let a = document.createElement ("a");

    li.setAttribute ("id", contId);
    li.className = "libro";
    li.innerHTML = libros.titulo;
    //a.href = ("./pages/ficha-tecnica.html");
    
    a.append(li);
    listaLibros.append(a);
    contId++;
}

// ****** FICHA TECNICA LIBRO CLICKEADO ****** //

function buscarLibroPorClick (id){
    return arrayLibros.find ((libro) => {
        return libro.id === id;
    })
}

listaLibros.addEventListener ("click", (event) => {
    let valorTarget = event.target;
    let idTarget = parseInt (valorTarget.id);
    
    // LLAMAR A LA FUNCION
    const libroClickeado = buscarLibroPorClick (idTarget);
    console.log (libroClickeado);

    // MOSTRAR FICHA TECNICA
    let contenedor = document.getElementById ("contenedor-ficha-tecnica");
    contenedor.innerHTML = `<h3>${libroClickeado.titulo}</h3>
                            <p><strong>Autor: </strong>${libroClickeado.autor}</p>
                            <p><strong>Fecha de Publicación: </strong>${libroClickeado.fechaPublicacion}</p>
                            <p><strong>Editorial: </strong>${libroClickeado.editorial}</p>
                            <p><strong>Formato: </strong>${libroClickeado.formato}</p>
                            <p><strong>Idioma: </strong>${libroClickeado.idioma}</p>
                            <p><strong>Cantidad de páginas: </strong>${libroClickeado.cantidadPaginas}</p>
                            <p><strong>ISBN: </strong>${libroClickeado.isbn}</p>
                            <p><strong>Rango de edad: </strong>${libroClickeado.rangoEdad}</p>
                            <p><strong>Sipnosis: </strong>${libroClickeado.sipnosis}</p>
                            <p><strong>Precio: </strong>$${libroClickeado.precio}</p>`

})


console.log ("LIBROS DISPONIBLES");

for (const libro of arrayLibros){
    console.log ("* ID " + libro.id + " - " + libro.titulo);
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



// // ****** BUSCAR FICHA TECNICA POR TITULO ****** //
let buscarPor;
// buscarPor = prompt ("Escoger libro (escribir el titulo) para mostrar ficha técnica.");
// let buscarLibroPorTitulo = buscarPor.toUpperCase();

// // buscar dentro del arrayLibros 
// const filtrarPorTitulo = (libro) =>{
//     if (libro.titulo.includes (buscarLibroPorTitulo)){
//         return true; // true para que pueda agregarse en el nuevo arrayBusqueda 
//     } 
// }

// const arrayBusqueda = arrayLibros.filter((filtrarPorTitulo)); // uso como parámetro función 'filtrarPorTitulo'

// // llamar al MÉTODO para mostrar ficha técnica
// arrayBusqueda.forEach ((libro) => {
//     libro.mostrarFichaTecnica();
// })



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