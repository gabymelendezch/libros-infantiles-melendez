let verif = 0;
let cantidadCompraLibro = 0;
let totalCarrito = 0;

// ****** CLASE LIBROS ******* //

class Libros {
    constructor (id, img, titulo, autor, fechaPublicacion, editorial, formato, idioma, cantidadPaginas, isbn, rangoEdad, sipnosis, stockLibro, precio){
        this.id = id;
        this.img = img
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
}

// ***** AGREGAR LIBROS EN ARRAYLIBROS ***** 
const arrayLibros = [];

arrayLibros.push (new Libros (1, "../images/la-vaca-se-empaca.png", "La vaca se empaca", "Lynch Agustina", "Octubre 2020", "Edición Autor", "Tapa dura", "Español", 38, "9789878661735", "2 - 4 años", "Cada vez que la vaca Paca tiene un berrinche, sus padres, en vez de ayudar, no saben cómo actuar. Así que Paca va a recorrer la granja para pedirles consejos a sus amigos, y así darles ideas a sus padres sobre cómo reaccionar.\nContado para niños, pero pensado para grandes, este cuento nos da consejos sobre cómo podemos actuar cuando nuestros hijos tienen berrinches.", 8, 2800));
arrayLibros.push (new Libros (2, "../images/caillou-es-mio.png", "Caillou ¡Es mío!", "Sanschagrin Joceline ", "Agosto 2018", "La Brujita de Papel", "Tapa dura", "Español", 22, "9789873681905", "2 - 4 años", "Caillou está creciendo y su mundo se agranda. Paso a paso él va ganando mayor independencia.A veces es difícil compartir lo que es de uno. Al final, Caillou y su amigo deciden intercambiar sus juguetes.", 10, 1700));
arrayLibros.push (new Libros (3, "../images/las-emociones-animagenes.png", "Las Emociones - Mis Animágenes", "Editores de Auzou", "Mayo 2020", "Auzou", "Tapa dura", "Español", 10, "9782733895900", "0 - 2 años", "Descubre las distintas emociones gracias a mecanismos simples y fáciles de activar.\nEn la última página, diviértete adivinando lo que se esconde bajo las solapas.", 4, 3990));
arrayLibros.push (new Libros (4, "../images/atrapala-kitty.png", "Atrápala Kitty", "Parsons Nicola ", "Julio 2019", "Manolito Books", "Tapa dura", "Español", 24, "9788417299453", "2 - 4 años", "Kitty ama jugar con su suave bola de estambre. Tanto, que no quiere compartirla con nadie, pero pronto aprenderá que jugar sola no es tan divertido.\n¿Entenderá Kitty la magia de compartir? Descúbrelo en esta tierna historia con Puppy, Rabbit y todos los amigos de Kitty.", 20, 1800));
arrayLibros.push (new Libros (5, "../images/muevo-miro-selva.png", "Muevo y Miro - En la Selva", "Editores de Yoyo Books", "Octubre 2020", "Yoyo Books", "Tapa dura", "Español", 10, "9789463993500", "2 - 4 años", "¡Visita a los animales que viven en la selva!\n¡Mueve las lengüetas y te sorprenderás!\nEscenas alegres que fascinarán a los pequeños y estimularán su motricidad.", 5, 3490));
arrayLibros.push (new Libros (6, "../images/primer-dia-clases.png", "Primer Día de Clases", "Sin Autor", "", "Grupo Sin Fronteras", "Tapa dura", "Español", 10, "9789585541085", "0 - 2 años", "¡Libros perfectos para manos pequeñas! El innovador formato de rueda giratoria brinda una forma divertida para que los más pequeños aprendan los números hasta el 5 y también mejoren las habilidades de motricidad fina. Entretenimiento y risas con personajes coloridos.", 4, 3790));
arrayLibros.push (new Libros (7, "../images/conviertete-heroe-ines-pricesita.png", "Conviértete en Héroe con Inés la Princesita", "Editores de Auzou", "Agosto 2018", "Auzou", "Tapa dura", "Español", 20, "9782733866771", "2 - 4 años", "¡Inés debe encontrar un regalo para su madre, la reina!\nPero se presentan ante ella diferentes posibilidades: ¡y te necesita a ti! A lo largo de la historia, tus elecciones la conducirán a vivir aventuras muy diferentes.\nConviértete en héroe y elige en cada página una pestaña para continuar la historia", 11, 3290));
arrayLibros.push (new Libros (8, "../images/libro-gigante-animales.png", "Mi Libro Gigante de Animales", "Editores de Auzou", "Octubre 2018", "Auzou", "Tapa dura", "Español", 8, "9782733884782", "0 - 2 años", "Este libro GIGANTE llamará la atención de los más pequeños. En cada página les esperan tres texturas para tocar; un espejo; una solapa de tela y un montón de sorpresas para explorar este universo en cuatro patas.", 2, 9990));
arrayLibros.push (new Libros (9, "../images/la-selva-sabana-animagenes.png", "La Selva y La Sabana - Mis Animágenes", "Editores de Auzou", "Septiembre 2018", "Auzou", "Tapa dura", "Español", 10, "9782733885505", "0 - 2 años", "Descubre los animales de la selva y de la sabana gracias a mecanismos divertidos y fáciles de activar.\nEn la última página, diviértete adivinando lo que se esconde bajo las solapas.", 6, 3990));
arrayLibros.push (new Libros (10, "../images/la-vaca-y-la-espinaca.png", "La Vaca y la Espinaca", "Lynch Agustina", "Julio 2019", "Editorial el Ateneo","Tapa dura", "Español", 36, "9789500210041", "0 - 2 años", "La vaca Paca no se anima a probar nuevas comidas. Solo quiere comer fideos. Pero Mamá Vaca y el resto de los amigos de la granja la ayudarán a comer mejor.\nEscrito con rimas y con los simpáticos sonidos de los animalitos de la granja, este libro nos invita a leerles a los chicos un cuento como a ellos les gusta: con ruidos, colores y risas. Y así, sutilmente, podemos ayudarlos a que prueben nuevos sabores.", 15, 2700));
arrayLibros.push (new Libros (11, "../images/caillou-no-mas-panales.png", "Caillou No mas Pañales", "L'Heureux Christine", "Agosto 2011", "La Brujita de Papel", "Tapa dura", "Español", 22, "9789874918864", "2 - 4 años", "Caillou ya sabe cuándo usar la pelela. ¡Por eso ahora él quiere usar el inodoro de grandes y dejar de usar pañales de noche!", 2, 1650));
arrayLibros.push (new Libros (12, "../images/a-la-cama-animagenes.png", "¡A la Cama! - Mis Animágenes", "Editores de Auzou", "Marzo 2017", "Auzou", "Tapa dura", "Español", 10, "9782733857748", "0 - 2 años", "Descubre las diferentes etapas de la hora de ir a la cama gracias a mecanismos divertidos y fáciles de activar.\nEn la última página, diviértete adivinando lo que se esconde bajo las solapas.", 4, 3990));
arrayLibros.push (new Libros (13, "../images/cuentos-montessori-crecer-felices.png", "Cuentos Montessori para Crecer Felices", "Prada Marta", "Octubre 2018", "Nube de Tinta", "Rústica", "Español", 96, "9789871997589", "4 - 6 años", "Como familia, la crianza nos presenta nuevos retos cada día: el sueño, el pañal, la llegada de un nuevo hermano, las frustraciones, los miedos... ¿Qué mejor manera de afrontarlos que desde el respeto, la empatía y la consciencia? Con cuentos para los niños y explicaciones para los padres, este precioso libro de la autora del conocido blog Pequefelicidad los ayudará a crecer juntos a partir de los principios de la filosofía Montessori y la crianza respetuosa.", 12, 3500));
arrayLibros.push (new Libros (14, "../images/cuentos-montessori-buenas-noches.png", "Cuentos Montessori para las Buenas Noches", "Prada Marta", "Octubre 2019", "Nube de Tinta", "Rústica", "Español", 96, "9788417605148", "4 - 6 años", "Nuestros pequeños crecen cada día, y es importante guardar un momento antes de acostarse para parar, conectar y empatizar con ellos, compartir vivencias y expresar emociones que necesitan de ese momento de reposo para salir. El sueño es fundamental en su desarrollo y el momento justo de antes de ir a dormir influye en su calidad y en los pensamientos y emociones que quedan en el cerebro justo antes de entrar en este modo de «desconexión y procesamiento de información».\nEste libro se convertirá en la herramienta de papel ideal para encontrar vuestro momento al final del día para miraros a los ojos, inspirar calma, naturaleza, valorar lo cotidiano, apreciar el mundo en todos sus aspectos y alentar a los niños y niñas a ser ellos mismos\n«Siembra en los niños ideas buenas aunque no las entiendan.Los años se encargarán de descifrarlas en su entendimiento y de hacerlas crecer en su corazón.» María Montessori", 8, 3500));


// guardar arrayLibros en localStorage por primera vez
//localStorage.setItem ("libros", JSON.stringify (arrayLibros));