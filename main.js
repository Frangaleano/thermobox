window.addEventListener('load', () => {
    setTimeout(() => {
        const introOverlay = document.querySelector('.intro-overlay');
        introOverlay.classList.add('hidden');
        document.body.style.overflow = 'auto'; // Permite el desplazamiento después de la animación
    }, 2000);
});

const carouselInnerdos = document.querySelector('.carousel-inner-dos');
const itemsdos = document.querySelectorAll('.carousel-item-dos');


setInterval(() => {
    currentIndexDos = (currentIndexDos + 1) % itemsdos.length;
    const translateValuedos = -currentIndexDos * 100 + '%';
    carouselInnerdos.style.transform = 'translateX(' + translateValuedos + ')';
}, 2000);

const carouselInner = document.querySelector('.carousel-inner');
const items = document.querySelectorAll('.carousel-item');

let subMenuVisible = false;
let subMenuDosVisible = false;
let subMenuTresVisible = false;
let subMenuCuatroVisible = false;
let subMenuCincoVisible = false;
let currentIndex = 0;
let currentIndexDos = 0;
let counters = {};
let productos = [];
let preciosTotalesProductos = [0];
let selectedItems = [];
let total = 0;
let totalProductos = 0;



setInterval(() => {
    currentIndex = (currentIndex + 1) % items.length;
    const translateValue = -currentIndex * 100 + '%';
    carouselInner.style.transform = 'translateX(' + translateValue + ')';
}, 1500);

function toggleMenuSection() {
    const menuProductos = document.getElementById("menu-section");
    const tituloMenu = document.getElementById("menu-title");
    const carousel = document.getElementById("hidden")
    const total = document.getElementById("total")
    const parrafoMenu = document.getElementById("parrafo-menu")

    menuProductos.classList.toggle("visible");

    if (menuProductos.classList.contains("visible")) {
        // Mostrar la sección del menú
        menuProductos.style.display = "flex";
        menuProductos.offsetHeight; // Activar reflows
        menuProductos.style.opacity = "1";
        menuProductos.style.transform = "translateY(0)";
        menuProductos.style.visibility = "visible";
        carousel.style.display = "none"
        tituloMenu.style.backgroundColor = "rgb(0 0 0)";
        tituloMenu.style.color = "white"
        tituloMenu.style.animation = "none"
        total.style.display = "flex"
        total.style.opacity = "1"
        parrafoMenu.style.display = "none"
    } else {
        menuProductos.style.opacity = "0";
        menuProductos.style.transform = "translateY(-20px)";
        total.style.display = "none"
        total.style.opacity = "0"
        setTimeout(() => {
            menuProductos.style.visibility = "hidden";
            menuProductos.style.display = "none"
            carousel.style.display = "flex"
        }, 500); // Establecer un tiempo de espera para ocultar después de la animación

        tituloMenu.style.backgroundColor = "transparent";
        tituloMenu.style.animation = "shadowAnimation 2s infinite"
        tituloMenu.style.color = "rgb(251 251 251)"
        parrafoMenu.style.display = "block"
    }
}

function selectButton(buttonNumber) {
    const container = document.querySelector('.menu-button-container');
    const allButtons = container.querySelectorAll('.menu-button');

    allButtons.forEach((button, index) => {
        button.classList.remove('active');
        if (index + 1 === buttonNumber) {
            event.preventDefault();
            button.classList.add('active');
        }
    });
}

function toggleSubMenu() {
    event.preventDefault();
    const subMenu = document.getElementById('subMenu');
    const boton1 = document.getElementById('boton1');

    if (!subMenuVisible) {
        const buttonsHTML = `
        <div class="div-botones-submenu" data-button-number="1">
            <div class="div-producto">

                <div class="carousel-container">
                    <div class="carousel-images" id="carousel-images-1">
                        <img src="./img-pro/WESM-400-1.webp" alt="Imagen 1" class="carousel-image"
                        style="width: 200px;
                        margin-left: 51px;
                        height: 250px;">
                        <img src="./img-pro/WESM-400-2.webp" alt="Imagen 2" class="carousel-image"
                        style="width: 200px;
                        margin-left: 99px;
                        height: 250px;">
                        <img src="./img-pro/WESM-400-3.webp" alt="Imagen 3" class="carousel-image"
                        style="width: 200px;
                        margin-left: 99px;
                        height: 250px;">
                    </div>
                    <button class="carousel-button prev" onclick="prevImage(1)">&#10094;</button> <!-- flecha izquierda -->
                    <button class="carousel-button next" onclick="nextImage(1)">&#10095;</button> <!-- flecha derecha -->
                </div>



                <div class="div-parrafos">
                    <button class="sub-menu-button" data-button-number="1">Warmer Economico<br> Sobremesada - WESM 400<br> 2 Estantes</button>
                    <div class="palabra-detalles">
                        <p onclick="toggleDetalles(1)" class="producto-detalles" style="
                        width: 117px;
                        font-size: 22px;
                    ">Detalles</p>
                    <span onclick="toggleDetalles(1)" id="flecha" class="flecha-detalles-abajo"></span>
                    </div>
                    <div class="detalles" data-button-number="1">
                    <ul style="line-height:120%">
                        <li><b>Medidas</b>: 400mm de Frente x 600mm de Fondo x 800mm de Altura con dos estantes.</li>
                        <li>Construido, Gabinete y Estantes Totalmente de Ac Inox Esmerilado.</li>
                        <li>Cúpula y de Vidrio de 6mm de espesor.</li>
                        <li>Tres niveles de exhibición, dos pisos y estantes.</li>
                        <li>Iluminación y Calefacción por medio de lámparas halogenas de cuarzo de bajo consumo.</li>
                        <li>Alimentacion 220 volts, consumo aproximado 2 amperes.</li>
                    </ul>
                    </div>
                    <div class="div-detalles">
                    <div>
                        <p>$760.000</p>
                        <p>+IVA 10,5%</p>
                    </div>    
                        <input class="radio-button" type="radio" name="Warmer Economico Sobremesada WESM 400" value="760000" data-iva="10.5" style="margin: 0px;">
                        <button class="counter-button" onclick="updateCounter(1, 'decrement')">-</button>
                        <span class="counter-value" style="font-family: poppins;" poppins";"="">0</span>
                        <button class="counter-button" onclick="updateCounter(1, 'increment')">+</button>
                    </div>
                </div>   
            </div>    
            <div class="div-boton-agregar">
                <button class="boton-consulta" onclick="hacerConsulta(1)">Consultar</button>
                <button class="boton-agregar" onclick="agregarAlPedido(1)">Agregar al pedido</button>
            </div>
        </div>




        <div class="div-botones-submenu" data-button-number="2">
            <div class="div-producto">

                <div class="carousel-container">
                    <div class="carousel-images" id="carousel-images-2">
                        <img src="./img-pro/wesm-600-2.webp" alt="Imagen 1" class="carousel-image">
                        <img src="./img-pro/WESM-600-5.webp" alt="Imagen 2" class="carousel-image">
                        <img src="./img-pro/wesm-600-4.webp" alt="Imagen 3" class="carousel-image">
                    </div>
                    <button class="carousel-button prev" onclick="prevImage(2)">&#10094;</button> <!-- flecha izquierda -->
                    <button class="carousel-button next" onclick="nextImage(2)">&#10095;</button> <!-- flecha derecha -->
                </div>



                <div class="div-parrafos">
                    <button class="sub-menu-button" data-button-number="2">Warmer Economico<br> Sobremesada - WESM 600</button>
                    <div class="palabra-detalles">
                        <p onclick="toggleDetalles(2)" class="producto-detalles" style="
                        width: 117px;
                        font-size: 22px;
                    ">Detalles</p>
                    <span onclick="toggleDetalles(2)" id="flecha" class="flecha-detalles-abajo"></span>
                    </div>
                    <div class="detalles" data-button-number="2">
                    <ul style="line-height:120%">
                        <li><b>Medidas</b>: 600mm de Frente x 600mm de Fondo x 650mm de Altura con un estante intermedio.</li>
                        <li>Construido, Gabinete y Estante Totalmente de Ac inox Esmerilado.</li>
                        <li>Cúpula de Vidrio de 6mm de espesor.</li>
                        <li>Dos niveles de Exhibicion, piso y estante.</li>
                        <li>Iluminacion y Calefaccion por medio de lámparas halógenas de cuarzo.</li>
                        <li>Alimentacion 220 volts, consumo aproximado 3 amperes.</li>
                    </ul>
                    </div>
                    <div class="div-detalles">
                    <div class="div-detalles">
                        <div>
                        <p>$650.000</p>
                        <p>+IVA 10,5%</p>
                    </div> 
                        <input class="radio-button" type="radio" name="Warmer Economico Sobremesada WESM600" value="650000" data-iva ="10.5"style="margin: 0px;">
                        <button class="counter-button" onclick="updateCounter(2, 'decrement')">-</button>
                        <span class="counter-value" style="font-family: poppins;" poppins";"="">0</span>
                        <button class="counter-button" onclick="updateCounter(2, 'increment')">+</button>
                    </div>
                </div>   
            </div>     
            <div class="div-boton-agregar">
                <button class="boton-consulta" onclick="hacerConsulta(2)">Consultar</button>
                <button class="boton-agregar" onclick="agregarAlPedido(2)">Agregar al pedido</button>
            </div>
        </div>

        
        <div class="div-botones-submenu" data-button-number="63">
            <div class="div-producto">


                <div class="carousel-container">
                    <div class="carousel-images" id="carousel-images-63">
                        <img src="./img-pro/WSM-700.jpeg" alt="Imagen 1" class="carousel-image">
                        <img src="./img-pro/WSM-700-2.jpeg" alt="Imagen 2" class="carousel-image">
                    </div>
                    <button class="carousel-button prev" onclick="prevImage(63)">&#10094;</button> <!-- flecha izquierda -->
                    <button class="carousel-button next" onclick="nextImage(63)">&#10095;</button> <!-- flecha derecha -->
                </div>


                <div class="div-parrafos">
                    <button class="sub-menu-button" data-button-number="63">Warmer Exhibidor<br>Mantenedor de Comidas Calientes - WSM 700<br>2 Estantes</button>
                    <div class="palabra-detalles">
                        <p onclick="toggleDetalles(63)" class="producto-detalles" style="
                        width: 117px;
                        font-size: 22px;
                    ">Detalles</p>
                    <span onclick="toggleDetalles(63)" id="flecha" class="flecha-detalles-abajo"></span>
                    </div>
                    <div class="detalles" data-button-number="63">
                    <ul style="line-height:120%">
                        <li><b>Medidas</b>: 70cm de frente x 60cm de fondo x 72cm de altura.</li>
                        <li>Construido Gabinete y estantes de acero inoxidable esmerilado.</li>
                        <li>Cúpula y puertas traseras de vidrio templado de 6mm de espesor.</li>
                        <li>Iluminación y Calefacción por medio de 4 pantallas infrarrojas vitroceramicas de 250watts c/una<br>regulables con 2 termostatos mecanicos 0/90 grados Beyca.</li>
                        <li>Iluminación led en techo y estantes con interruptor independiente.</li>
                        <li>Puertas traseras de abrir de vidrio templado.</li>
                    </ul>
                    </div>
                    <div class="div-detalles">
                        <div>
                            <p>$1.250.000</p>
                            <p>+IVA 10,5%</p>
                        </div> 
                        <input class="radio-button" type="radio" name="Warmer Exhibidor Sobremesada WSM700" value="1250000" data-iva="10.5" style="margin: 0px;">
                        <button class="counter-button" onclick="updateCounter(63, 'decrement')">-</button>
                        <span class="counter-value" style="font-family: poppins;" poppins";"="">0</span>
                        <button class="counter-button" onclick="updateCounter(63, 'increment')">+</button>
                    </div>
                </div>   
            </div>     
            <div class="div-boton-agregar">
                <button class="boton-consulta" onclick="hacerConsulta(63)">Consultar</button>
                <button class="boton-agregar" onclick="agregarAlPedido(63)">Agregar al pedido</button>
            </div>
        </div>


        <div class="div-botones-submenu" data-button-number="4">
            <div class="div-producto">

                <div class="carousel-container">
                    <div class="carousel-images" id="carousel-images-4">
                        <img src="./img-pro/WSM-800-3.webp" alt="Imagen 1" class="carousel-image">
                        <img src="./img-pro/WSM-800-2.webp" alt="Imagen 2" class="carousel-image">
                        <img src="./img-pro/WSM-800-6.webp" alt="Imagen 3" class="carousel-image">
                    </div>
                    <button class="carousel-button prev" onclick="prevImage(4)">&#10094;</button> <!-- flecha izquierda -->
                    <button class="carousel-button next" onclick="nextImage(4)">&#10095;</button> <!-- flecha derecha -->
                </div>


                <div class="div-parrafos">
                    <button class="sub-menu-button" data-button-number="4">Warmer Exhibidor<br> Sobremesada - WSM 800</button>
                    <div class="palabra-detalles">
                        <p onclick="toggleDetalles(4)" class="producto-detalles" style="
                        width: 117px;
                        font-size: 22px;
                    ">Detalles</p>
                    <span onclick="toggleDetalles(4)" id="flecha" class="flecha-detalles-abajo"></span>
                    </div>
                    <div class="detalles" data-button-number="4">
                    <ul style="line-height:120%">
                    <li><b>Medidas</b>: 800mm de Frente x 600mm de Fondo x 650mm de Altura.</li>
                    <li>Construido Gabinete totalmente en Ac Inoxidable 430 esmerilado.</li>
                    <li>Cúpula y Estante de vidrio templado de 6mm de espesor.</li>
                    <li>Dos niveles de Exhibicion.</li>
                    <li>Piso y estante calefaccionados por medio de lámparas halogenas de 150 watts c/u.</li>
                    <li>Dos circuitos de iluminación con interruptor independiente.</li> 
                    <li>Provisto de Dimmer Regulador de Temperatura.</li>
                    <li>Alimentación 220 volts, Consumo aproximado máximo 3 amperes.</li> 
                    </ul>
                    </div>
                    <div class="div-detalles">
                        <div>
                        <p>$925.000</p>
                        <p>+IVA 10,5%</p>
                    </div> 
                        <input class="radio-button" type="radio" name="Warmer Exhibidor Sobremesada WSM800" value="925000" data-iva="10.5" style="margin: 0px;">
                        <button class="counter-button" onclick="updateCounter(4, 'decrement')">-</button>
                        <span class="counter-value" style="font-family: poppins;" poppins";"="">0</span>
                        <button class="counter-button" onclick="updateCounter(4, 'increment')">+</button>
                    </div>
                </div>   
            </div>     
            <div class="div-boton-agregar">
                <button class="boton-consulta" onclick="hacerConsulta(4)">Consultar</button>
                <button class="boton-agregar" onclick="agregarAlPedido(4)">Agregar al pedido</button>
            </div>
        </div>

        <div class="div-botones-submenu" data-button-number="5">
            <div class="div-producto">

                <div class="carousel-container">
                    <div class="carousel-images" id="carousel-images-5">
                        <img src="./img-pro/WSM-1200-2.webp" alt="Imagen 1" class="carousel-image">
                        <img src="./img-pro/WSM-1200-6.webp" alt="Imagen 2" class="carousel-image">
                        <img src="./img-pro/WSM-1200-7.webp" alt="Imagen 3" class="carousel-image">
                    </div>
                    <button class="carousel-button prev" onclick="prevImage(5)">&#10094;</button> <!-- flecha izquierda -->
                    <button class="carousel-button next" onclick="nextImage(5)">&#10095;</button> <!-- flecha derecha -->
                </div>


                <div class="div-parrafos">
                    <button class="sub-menu-button" data-button-number="5">Warmer Exhibidor<br> Sobremesada - WSM 1200</button>
                    <div class="palabra-detalles">
                        <p onclick="toggleDetalles(5)" class="producto-detalles" style="
                        width: 117px;
                        font-size: 22px;
                    ">Detalles</p>
                    <span onclick="toggleDetalles(5)" id="flecha" class="flecha-detalles-abajo"></span>
                    </div>
                    <div class="detalles" data-button-number="5">
                    <ul style="line-height:120%">
                    <li><b>Medidas</b>: 1200mm de Frente x 600mm de Fondo x 650mm de Altura.</li>
                    <li>Construido Gabinete totalmente en Ac Inoxidable 430 esmerilado.</li>
                    <li>Cúpula y Estante de vidrio templado de 6mm de espesor.</li>
                    <li>Dos niveles de Exhibicion.</li>
                    <li>Piso y estante calefaccionados por medio de lámparas halogenas de 150watts c/u.</li>
                    <li>Dos circuitos de iluminación con interruptor independiente.</li> 
                    <li>Provisto de Dimmer Regulador de Temperatura.</li>
                    <li>Alimentación 220 volts, Consumo aproximado máximo 6 amperes.</li> 
                    </ul>
                    </div>
                    <div class="div-detalles">
                        <div>
                        <p>$1.050.000</p>
                        <p>+IVA 10,5%</p>
                    </div> 
                        <input class="radio-button" type="radio" name="Warmer Exhibidor Sobremesada WSM1200" value="1050000" data-iva="10.5" style="margin: 0px;">
                        <button class="counter-button" onclick="updateCounter(5, 'decrement')">-</button>
                        <span class="counter-value" style="font-family: poppins;" poppins";"="">0</span>
                        <button class="counter-button" onclick="updateCounter(5, 'increment')">+</button>
                    </div>
                </div>   
            </div>     
            <div class="div-boton-agregar">
                <button class="boton-consulta" onclick="hacerConsulta(5)">Consultar</button>
                <button class="boton-agregar" onclick="agregarAlPedido(5)">Agregar al pedido</button>
            </div>
        </div>


         <div class="div-botones-submenu" data-button-number="60">
            <div class="div-producto">

                <div class="carousel-container">
                    <div class="carousel-images" id="carousel-images-60">
                        <img src="./img-pro/ME-600.webp" alt="Imagen 1" class="carousel-image"
                        style="width: 200px;
                            margin-left: 51px;
                            height: 250px;">
                        <img src="./img-pro/ME-600-2.webp" alt="Imagen 2" class="carousel-image"
                        style="width: 200px;
                            margin-left: 99px;
                            height: 250px;">
                    </div>
                    <button class="carousel-button prev" onclick="prevImage(60)">&#10094;</button> <!-- flecha izquierda -->
                    <button class="carousel-button next" onclick="nextImage(60)">&#10095;</button> <!-- flecha derecha -->
                </div>


                <div class="div-parrafos">
                    <button class="sub-menu-button" data-button-number="60">Mantenedor<br> Exhibidor de Empanadas Calientes<br> ME 600</button>
                    <div class="palabra-detalles">
                        <p onclick="toggleDetalles(60)" class="producto-detalles" style="
                        width: 117px;
                        font-size: 22px;
                    ">Detalles</p>
                    <span onclick="toggleDetalles(60)" id="flecha" class="flecha-detalles-abajo"></span>
                    </div>
                    <div class="detalles" data-button-number="60">
                    <ul style="line-height:120%">
                    <li><b>Medidas</b>: 60cm de frente x 60cm de fondo x 65cm de altura.</li>
                    <li>1 lampara de 250watts, 220volts.</li>
                    <li>1 circuito provisto de interruptor de encendido.</li>
                    </ul>
                    </div>

                    <div class="div-detalles">
                        <div>
                        <p>$690.000</p>
                        <p>+IVA 10,5%</p>
                    </div> 
                        <input class="radio-button" type="radio" name="Mantenedor Exhibidor Empanadas Calientes ME600" value="690000" data-iva="10.5" style="margin: 0px;">
                        <button class="counter-button" onclick="updateCounter(60, 'decrement')">-</button>
                        <span class="counter-value" style="font-family: poppins;" poppins";"="">0</span>
                        <button class="counter-button" onclick="updateCounter(60, 'increment')">+</button>
                    </div>
                </div>   
            </div>     
            <div class="div-boton-agregar">
                <button class="boton-consulta" onclick="hacerConsulta(60)">Consultar</button>
                <button class="boton-agregar" onclick="agregarAlPedido(60)">Agregar al pedido</button>
            </div>
        </div>


        <div class="div-botones-submenu" data-button-number="6">
            <div class="div-producto">

                <div class="carousel-container">
                    <div class="carousel-images" id="carousel-images-6">
                        <img src="./img-pro/ME-1200-1.webp" alt="Imagen 1" class="carousel-image"
                        style="width: 200px;
                            margin-left: 51px;
                            height: 250px;">
                        <img src="./img-pro/ME-1200-2.webp" alt="Imagen 2" class="carousel-image"
                        style="width: 200px;
                            margin-left: 99px;
                            height: 250px;">
                    </div>
                    <button class="carousel-button prev" onclick="prevImage(6)">&#10094;</button> <!-- flecha izquierda -->
                    <button class="carousel-button next" onclick="nextImage(6)">&#10095;</button> <!-- flecha derecha -->
                </div>


                <div class="div-parrafos">
                    <button class="sub-menu-button" data-button-number="6">Mantenedor<br> Exhibidor de Empanadas Calientes<br> ME 1200</button>
                    <div class="palabra-detalles">
                        <p onclick="toggleDetalles(6)" class="producto-detalles" style="
                        width: 117px;
                        font-size: 22px;
                    ">Detalles</p>
                    <span onclick="toggleDetalles(6)" id="flecha" class="flecha-detalles-abajo"></span>
                    </div>
                    <div class="detalles" data-button-number="6">
                    <ul style="line-height:120%">
                    <li><b>Medidas</b>: 120cm de frente x 60cm de fondo x 65cm de altura.</li>
                    <li>Construido; Gabinete de ac inoxidable esmerilado, Cúpula de vidrio de 8mm de espesor. </li>
                    <li>luminación y calefaccion por medio de 3 lamparas infrarrojas de 250watts c/u.</li>
                    <li>distribuidas en dos circuitos con interruptores independientes. </li>
                    <li>Batea provista de guías separadoras desmontables de ac inoxidable. </li>
                    </ul>
                    </div>

                    <div class="div-detalles">
                        <div>
                        <p>$1.290.000</p>
                        <p>+IVA 10,5%</p>
                    </div> 
                        <input class="radio-button" type="radio" name="Mantenedor Exhibidor Empanadas Calientes ME1200" value="1290000" data-iva="10.5" style="margin: 0px;">
                        <button class="counter-button" onclick="updateCounter(6, 'decrement')">-</button>
                        <span class="counter-value" style="font-family: poppins;" poppins";"="">0</span>
                        <button class="counter-button" onclick="updateCounter(6, 'increment')">+</button>
                    </div>
                </div>   
            </div>     
            <div class="div-boton-agregar">
                <button class="boton-consulta" onclick="hacerConsulta(6)">Consultar</button>
                <button class="boton-agregar" onclick="agregarAlPedido(6)">Agregar al pedido</button>
            </div>
        </div>

        <div class="div-botones-submenu" data-button-number="61">
            <div class="div-producto">

                <div class="carousel-container">
                    <div class="carousel-images" id="carousel-images-61">
                        <img src="./img-pro/ME-1200-1.webp" alt="Imagen 1" class="carousel-image"
                        style="width: 200px;
                            margin-left: 51px;
                            height: 250px;">
                        <img src="./img-pro/ME-1200-2.webp" alt="Imagen 2" class="carousel-image"
                        style="width: 200px;
                            margin-left: 99px;
                            height: 250px;">
                    </div>
                    <button class="carousel-button prev" onclick="prevImage(61)">&#10094;</button> <!-- flecha izquierda -->
                    <button class="carousel-button next" onclick="nextImage(61)">&#10095;</button> <!-- flecha derecha -->
                </div>


                <div class="div-parrafos">
                    <button class="sub-menu-button" data-button-number="61">Mantenedor<br> Exhibidor de Empanadas Calientes<br> ME 1500</button>
                    <div class="palabra-detalles">
                        <p onclick="toggleDetalles(61)" class="producto-detalles" style="
                        width: 117px;
                        font-size: 22px;
                    ">Detalles</p>
                    <span onclick="toggleDetalles(61)" id="flecha" class="flecha-detalles-abajo"></span>
                    </div>
                    <div class="detalles" data-button-number="61">
                    <ul style="line-height:120%">
                    <li><b>Medidas</b>:  150cm de frente x 60cm de fondo x 65cm de altura.</li>
                    <li>4 lamparas infrarrojas de 250watts c/una.</li>
                    </ul>
                    </div>

                    <div class="div-detalles">
                        <div>
                        <p>$000</p>
                        <p>+IVA 10,5%</p>
                    </div> 
                        <input class="radio-button" type="radio" name="Mantenedor Exhibidor Empanadas Calientes ME1500" value="1290000" data-iva="10.5" style="margin: 0px;">
                        <button class="counter-button" onclick="updateCounter(61, 'decrement')">-</button>
                        <span class="counter-value" style="font-family: poppins;" poppins";"="">0</span>
                        <button class="counter-button" onclick="updateCounter(61, 'increment')">+</button>
                    </div>
                </div>   
            </div>     
            <div class="div-boton-agregar">
                <button class="boton-consulta" onclick="hacerConsulta(61)">Consultar</button>
                <button class="boton-agregar" onclick="agregarAlPedido(61)">Agregar al pedido</button>
            </div>
        </div>


        <div class="div-botones-submenu" data-button-number="7">
            <div class="div-producto">

                <div class="carousel-container">
                    <div class="carousel-images" id="carousel-images-7">
                        <img src="./img-pro/ME-1800.webp" alt="Imagen 1" class="carousel-image">
                        <img src="./img-pro/ME-1800-2.webp" alt="Imagen 2" class="carousel-image">
                        <img src="./img-pro/ME-1800-6.webp" alt="Imagen 3" class="carousel-image">
                    </div>
                    <button class="carousel-button prev" onclick="prevImage(7)">&#10094;</button> <!-- flecha izquierda -->
                    <button class="carousel-button next" onclick="nextImage(7)">&#10095;</button> <!-- flecha derecha -->
                </div>


                <div class="div-parrafos">
                    <button class="sub-menu-button" data-button-number="7">Mantenedor<br> Exhibidor de Empanadas Calientes<br> ME 1800</button>
                    <div class="palabra-detalles">
                        <p onclick="toggleDetalles(7)" class="producto-detalles" style="
                        width: 117px;
                        font-size: 22px;
                    ">Detalles</p>
                    <span onclick="toggleDetalles(7)" id="flecha" class="flecha-detalles-abajo"></span>
                    </div>
                    <div class="detalles" data-button-number="7">
                    <ul style="line-height:120%">
                        <li><b>Medidas</b>: 180cm de frente x 60cm de fondo x 65cm de altura</li>
                    <li>Construido; Gabinete de ac inoxidable esmerilado, Cúpula de vidrio de 8mm de espesor. </li>
                    <li>luminación y calefaccion por medio de 5 lamparas infrarrojas de 250watts c/u.</li>
                    <li>distribuidas en dos circuitos con interruptores independientes. </li>
                    <li>Batea provista de guías separadoras desmontables de ac inoxidable. </li>
                    </ul>
                    </div>

                    <div class="div-detalles">
                        <div>
                        <p>$1.690.000</p>
                        <p>+IVA 10,5%</p>
                    </div> 
                        <input class="radio-button" type="radio" name="Mantenedor Exhibidor Empanadas Calientes ME1800" value="1690000" data-iva="10.5" style="margin: 0px;">
                        <button class="counter-button" onclick="updateCounter(7, 'decrement')">-</button>
                        <span class="counter-value" style="font-family: poppins;" poppins";"="">0</span>
                        <button class="counter-button" onclick="updateCounter(7, 'increment')">+</button>
                    </div>
                </div>   
            </div>     
            <div class="div-boton-agregar">
                <button class="boton-consulta" onclick="hacerConsulta(7)">Consultar</button>
                <button class="boton-agregar" onclick="agregarAlPedido(7)">Agregar al pedido</button>
            </div>
        </div>


        <div class="div-botones-submenu" data-button-number="8">
            <div class="div-producto">
                <div class="carousel-container">
                    <div class="carousel-images" id="carousel-images-8">
                        <img src="./img-pro/ME-2400.webp" alt="Imagen 1" class="carousel-image"
                        style="height: 250px;">
                        <img src="./img-pro/ME-2400-2.webp" alt="Imagen 2" class="carousel-image"
                        style="height: 250px;">
                        <img src="./img-pro/ME-2400-3.webp" alt="Imagen 3" class="carousel-image"
                        style="height: 250px;">
                    </div>
                    <button class="carousel-button prev" onclick="prevImage(8)">&#10094;</button> <!-- flecha izquierda -->
                    <button class="carousel-button next" onclick="nextImage(8)">&#10095;</button> <!-- flecha derecha -->
                </div>


                <div class="div-parrafos">
                    <button class="sub-menu-button" data-button-number="8">Mantenedor<br> Exhibidor de Empanadas Calientes<br> ME 2400</button>
                    <div class="palabra-detalles">
                        <p onclick="toggleDetalles(8)" class="producto-detalles" style="
                        width: 117px;
                        font-size: 22px;
                    ">Detalles</p>
                    <span onclick="toggleDetalles(8)" id="flecha" class="flecha-detalles-abajo"></span>
                    </div>
                    <div class="detalles" data-button-number="8">
                    <ul style="line-height:120%">
                    <li><b>Medidas</b>: 240cm de frente x 60cm de fondo x 65cm de altura.</li>
                    <li>Construido; Gabinete de ac inoxidable esmerilado, Cúpula de vidrio de 8mm de espesor. </li>
                    <li>luminación y calefaccion por medio de 6 lamparas infrarrojas de 250watts c/u.</li>
                    <li>distribuidas en dos circuitos con interruptores independientes. </li>
                    <li>Batea provista de guías separadoras desmontables de ac inoxidable. </li>
                    </ul>
                    </div>
                    <div class="div-detalles">
                        <div>
                        <p>$1.990.000</p>
                        <p>+IVA 10,5%</p>
                    </div> 
                        <input class="radio-button" type="radio" name="Mantenedor Exhibidor Empanadas Calientes ME2400" value="1990000" data-iva="10.5" style="margin: 0px;">
                        <button class="counter-button" onclick="updateCounter(8, 'decrement')">-</button>
                        <span class="counter-value" style="font-family: poppins;" poppins";"="">0</span>
                        <button class="counter-button" onclick="updateCounter(8, 'increment')">+</button>
                    </div>
                </div>   
            </div>     
            <div class="div-boton-agregar">
                <button class="boton-consulta" onclick="hacerConsulta(8)">Consultar</button>
                <button class="boton-agregar" onclick="agregarAlPedido(8)">Agregar al pedido</button>
            </div>
        </div>
        `;


        subMenu.innerHTML = buttonsHTML;

        subMenuVisible = true;
        subMenu.style.display = "flex";
        subMenu.offsetHeight;
        subMenu.style.opacity = "1";
        subMenu.style.transform = "translateY(0)";
        subMenu.style.visibility = "visible";
        subMenu.style.flexDirection = "column";
        subMenu.style.rowGap = "10px";
        subMenu.style.alignItems = "center"

        // Agrega la clase 'active' al botón1 cuando se despliega el submenú
        boton1.classList.add('active');
        subMenu.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        event.preventDefault();
    } else {
        const subMenuButtons = document.querySelectorAll('.menu-button');
        subMenuButtons.forEach(button => {
            button.classList.remove('initial');
        });
        setTimeout(() => {
            subMenu.innerHTML = '';
        }, subMenuButtons.length * 100);

        subMenuVisible = false;

        subMenu.style.opacity = "0";
        subMenu.style.transform = "translateY(-20px)";
        setTimeout(() => {
            subMenu.style.visibility = "hidden";
            subMenu.style.display = "none";
        }, 800);

        // Quita la clase 'active' al botón1 cuando se contrae el submenú
        boton1.classList.remove('active');
    }
}

function toggleSubMenuDos() {
    event.preventDefault();
    const subMenuDos = document.getElementById('subMenuDos');
    const boton2 = document.getElementById('boton2');

    if (!subMenuDosVisible) {
        const buttonsHTML = `
       
        <div class="div-botones-submenu" data-button-number="9">
            <div class="div-producto">

                <div class="carousel-container">
                    <div class="carousel-images" id="carousel-images-9">
                        <img src="./img-pro/WTA-800.webp" alt="Imagen 1" class="carousel-image">
                        <img src="./img-pro/WTA-800-2.webp" alt="Imagen 2" class="carousel-image">
                        <img src="./img-pro/WTA-800-3.webp" alt="Imagen 3" class="carousel-image">
                    </div>
                    <button class="carousel-button prev" onclick="prevImage(9)">&#10094;</button> <!-- flecha izquierda -->
                    <button class="carousel-button next" onclick="nextImage(9)">&#10095;</button> <!-- flecha derecha -->
                </div>


                <div class="div-parrafos">
                    <button class="sub-menu-button" data-button-number="9">Warmer Exhibidor de Comidas Calientes <br> Take Away Vertical<br> WTA 800</button>
                   <div class="palabra-detalles">
                        <p onclick="toggleDetalles(9)" class="producto-detalles" style="
                        width: 117px;
                        font-size: 22px;
                    ">Detalles</p>
                    <span onclick="toggleDetalles(9)" id="flecha" class="flecha-detalles-abajo"></span>
                    </div>
                    <div class="detalles" data-button-number="9">
                    <ul style="line-height:120%">
                        <li><b>Medidas</b>: 800mm de Frente x 600mm de Fondo x 1900mm de Altura.</li>
                        <li>Construido Gabinete de Ac Inoxidable 430 esmerilado interior y exterior.</li>
                        <li>Aislación interior de lana mineral.</li>
                        <li>Iluminación y calefacción por medio de lámparas halogenas de cuarzo de bajo consumo.</li>
                        <li>Cuatro niveles de exhibición.</li>
                        <li>Provisto de Interruptores por estante.</li>
                        <li>Laterales de vidrio laminado 3+3 mm de espesor.</li>
                        <li>Patas de acero inoxidable, provistas de regatones regulables de PVC.</li>         
                    </ul>
                    </div>
                    <div class="div-detalles">
                        <div>
                        <p>$1.590.000</p>
                        <p>+IVA 10,5%</p>
                    </div> 
                        <input class="radio-button" type="radio" name="Warmer Exhibidor de Comidas Calientes Take Away Vertical WTA800" value="1590000" data-iva="10.5" style="margin: 0px;">
                        <button class="counter-button" onclick="updateCounter(9, 'decrement')">-</button>
                        <span class="counter-value" style="font-family: poppins;" poppins";"="">0</span>
                        <button class="counter-button" onclick="updateCounter(9, 'increment')">+</button>
                    </div>
                </div>   
            </div>    
            <div class="div-boton-agregar">
                <button class="boton-consulta" onclick="hacerConsulta(9)">Consultar</button>
                <button class="boton-agregar" onclick="agregarAlPedido(9)">Agregar al pedido</button>
            </div>
        </div>




        <div class="div-botones-submenu" data-button-number="10">
            <div class="div-producto">

                <div class="carousel-container">
                    <div class="carousel-images" id="carousel-images-10">
                        <img src="./img-pro/WTA-1200-3.webp" alt="Imagen 1" class="carousel-image">
                        <img src="./img-pro/WTA-1200-4.webp" alt="Imagen 2" class="carousel-image">
                        <img src="./img-pro/WTA-1200-5.webp" alt="Imagen 3" class="carousel-image">
                    </div>
                    <button class="carousel-button prev" onclick="prevImage(10)">&#10094;</button> <!-- flecha izquierda -->
                    <button class="carousel-button next" onclick="nextImage(10)">&#10095;</button> <!-- flecha derecha -->
                </div>


                <div class="div-parrafos">
                    <button class="sub-menu-button" data-button-number="10">Warmer Exhibidor de Comidas Calientes<br> Take Away Vertical<br> WTA 1200</button>
                    <div class="palabra-detalles">
                        <p onclick="toggleDetalles(10)" class="producto-detalles" style="
                        width: 117px;
                        font-size: 22px;
                    ">Detalles</p>
                    <span onclick="toggleDetalles(10)" id="flecha" class="flecha-detalles-abajo"></span>
                    </div>
                    <div class="detalles" data-button-number="10">
                    <ul style="line-height:120%">
                        <li>Medidas; 1200mm de Frente x 600mm de Fondo x 1900mm de Altura.</li>
                        <li>Patas de acero inoxidable, provistas de regatones regulables de PVC.</li>
                        <li>Construido Gabinete de Ac Inoxidable 430 esmerilado interior y exterior.</li>
                        <li>Aislación interior de lana mineral.</li>
                        <li>Iluminación y calefacción por medio de lámparas halogenas de cuarzo de bajo consumo.</li>
                        <li>Cuatro niveles de exhibición.</li>
                        <li>Provisto de interruptores por estante.</li>
                        <li>Laterales de vidrio laminado 3+3 mm de espesor.</li>  
                    </ul>
                    </div>
                    <div class="div-detalles">
                        <div>
                        <p>$1.990.000</p>
                        <p>+IVA 10,5%</p>
                    </div> 
                        <input class="radio-button" type="radio" name="Warmer Exhibidor de Comidas Calientes Take Away Vertical WTA1200" value="1990000" data-iva="10.5" style="margin: 0px;">
                        <button class="counter-button" onclick="updateCounter(10, 'decrement')">-</button>
                        <span class="counter-value" style="font-family: poppins;" poppins";"="">0</span>
                        <button class="counter-button" onclick="updateCounter(10, 'increment')">+</button>
                    </div>
                </div>   
            </div>     
            <div class="div-boton-agregar">
                <button class="boton-consulta" onclick="hacerConsulta(10)">Consultar</button>
                <button class="boton-agregar" onclick="agregarAlPedido(10)">Agregar al pedido</button>
            </div>
        </div>



        
        <div class="div-botones-submenu" data-button-number="11">
            <div class="div-producto">

                <div class="carousel-container">
                    <div class="carousel-images" id="carousel-images-11">
                        <img src="./img-pro/HTA-600.webp" alt="Imagen 1" class="carousel-image"
                        style="
                        height: 250px;">
                        <img src="./img-pro/HTA-600-2.webp" alt="Imagen 2" class="carousel-image"
                        style="width: 200px;
                        margin-left: 51px;
                        height: 250px;">
                    </div>
                    <button class="carousel-button prev" onclick="prevImage(11)">&#10094;</button> <!-- flecha izquierda -->
                    <button class="carousel-button next" onclick="nextImage(11)">&#10095;</button> <!-- flecha derecha -->
                </div>


                <div class="div-parrafos">
                    <button class="sub-menu-button" data-button-number="11">Heladera Exhibidora Take Away<br> HTA 600</button>
                   <div class="palabra-detalles">
                        <p onclick="toggleDetalles(11)" class="producto-detalles" style="
                        width: 117px;
                        font-size: 22px;
                    ">Detalles</p>
                    <span onclick="toggleDetalles(11)" id="flecha" class="flecha-detalles-abajo"></span>
                    </div>
                    <div class="detalles" data-button-number="11">
                    <ul style="line-height:120%">
                        <li><b>Medidas externas</b>: 60mm de frente x 850mm de fondo x 1900mm de altura.</li>
                        <li>Construida; Gabinete con paneles inyectados en poliuretano, ambas caras de acero inoxidable esmerilado.</li>
                        <li>Laterales y Estantes de Vidrio laminado4+4.</li>
                        <li>Cuatro niveles de exhibición; tres estantes mas piso, frentines de ac inox esmerilado.</li>
                        <li>Iluminación led en estantes y techo; provista de tecla de encendido independiente.</li>
                        <li>Cortina de cierre nocturno.</li>
                        <li>Refrigeración y descongelamiento controlados por medio de combistato digital programable.</li>
                        <li>Unidad condensadora 1/2hp, gas r404, 220volts.</li>
                        <li>Patas de ac inox, provistas de regatones regulables de PVC.</li>    
                    </ul>
                    </div>
                    <div class="div-detalles">
                        <p>$7200</p>
                        <input class="radio-button" type="radio" name="Heladera Exhibidora Take Away HTA600" value="7200" style="margin: 0px;">
                        <button class="counter-button" onclick="updateCounter(11, 'decrement')">-</button>
                        <span class="counter-value" style="font-family: poppins;" poppins";"="">0</span>
                        <button class="counter-button" onclick="updateCounter(11, 'increment')">+</button>
                    </div>
                </div>   
            </div>     
            <div class="div-boton-agregar">
                <button class="boton-consulta" onclick="hacerConsulta(11)">Consultar</button>
                <button class="boton-agregar" onclick="agregarAlPedido(11)">Agregar al pedido</button>
            </div>
        </div>

        <div class="div-botones-submenu" data-button-number="12">
            <div class="div-producto">

                <div class="carousel-container">
                    <div class="carousel-images" id="carousel-images-12">
                        <img src="./img-pro/HTA-900.webp" alt="Imagen 1" class="carousel-image">
                        <img src="./img-pro/HTA-900-2.webp" alt="Imagen 2" class="carousel-image">
                        <img src="./img-pro/HTA-900-3.webp" alt="Imagen 3" class="carousel-image">
                    </div>
                    <button class="carousel-button prev" onclick="prevImage(12)">&#10094;</button> <!-- flecha izquierda -->
                    <button class="carousel-button next" onclick="nextImage(12)">&#10095;</button> <!-- flecha derecha -->
                </div>
                <div class="div-parrafos">
                    <button class="sub-menu-button" data-button-number="12">Heladera Exhibidora Take Away <br>HTA 900</button>
                    <div class="palabra-detalles">
                        <p onclick="toggleDetalles(12)" class="producto-detalles" style="
                        width: 117px;
                        font-size: 22px;
                    ">Detalles</p>
                    <span onclick="toggleDetalles(12)" id="flecha" class="flecha-detalles-abajo"></span>
                    </div>
                    <div class="detalles" data-button-number="12">
                    <ul style="line-height:120%">
                        <li><b>Medidas Externas</b>: 900mm de frente x 850mm de fondo x 1900mm de altura.</li>
                        <li>Construida; Gabinete con paneles inyectados en poliuretano, ambas caras de acero inoxidable esmerilado.</li>
                        <li>Laterales y Estantes de vidrio laminado 4+4.</li>
                        <li>Cuatro niveles de exhibición; tres estantes mas piso, frentines de ac inox esmerilado.</li>
                        <li>Iluminacion led en estantes y techo; provista de tecla de encendido independiente.</li>
                        <li>Cortina para cierre nocturno.</li>
                        <li>Refrigeración y descongelamiento controlados por medio de combistato digital programable.</li>
                        <li>Unidad Condensadora 3/4hp, gas r404, 220volts.</li>
                        <li>Patas de ac inox, provistas de regatones regulables de PVC.</li>
                    </ul>
                    </div>
                    <div class="div-detalles">
                        <p>$7200</p>
                        <input class="radio-button" type="radio" name="Heladera Exhibidora Take Away HTA900" value="7200" style="margin: 0px;">
                        <button class="counter-button" onclick="updateCounter(12, 'decrement')">-</button>
                        <span class="counter-value" style="font-family: poppins;" poppins";"="">0</span>
                        <button class="counter-button" onclick="updateCounter(12, 'increment')">+</button>
                    </div>
                </div>   
            </div>     
            <div class="div-boton-agregar">
                <button class="boton-consulta" onclick="hacerConsulta(12)">Consultar</button>
                <button class="boton-agregar" onclick="agregarAlPedido(12)">Agregar al pedido</button>
            </div>
        </div>

        <div class="div-botones-submenu" data-button-number="13">
            <div class="div-producto">


                <div class="carousel-container">
                    <div class="carousel-images" id="carousel-images-13">
                        <img src="./img-pro/HTA-1200-7.webp" alt="Imagen 1" class="carousel-image">
                        <img src="./img-pro/HTA-1200-10.webp" alt="Imagen 2" class="carousel-image">
                        <img src="./img-pro/HTA-1200-11.webp" alt="Imagen 3" class="carousel-image">
                    </div>
                    <button class="carousel-button prev" onclick="prevImage(13)">&#10094;</button> <!-- flecha izquierda -->
                    <button class="carousel-button next" onclick="nextImage(13)">&#10095;</button> <!-- flecha derecha -->
                </div>


                <div class="div-parrafos">
                    <button class="sub-menu-button" data-button-number="13">Heladera Exhibidora Take Away<br> HTA 1200</button>
                    <div class="palabra-detalles">
                        <p onclick="toggleDetalles(13)" class="producto-detalles" style="
                        width: 117px;
                        font-size: 22px;
                    ">Detalles</p>
                    <span onclick="toggleDetalles(13)" id="flecha" class="flecha-detalles-abajo"></span>
                    </div>
                    <div class="detalles" data-button-number="13">
                    <ul style="line-height:120%">
                        <li><b>Medidas Externas</b>: 1200mm de frente x 850mm de fondo x 1900mm de altura.</li>
                        <li>Construida; Gabinete con paneles inyectados en poliuretano ambas caras de acero inoxidable esmerilado.</li>
                        <li>Laterales y Estantes de vidrio laminado 4+4.</li>
                        <li>Cuatro niveles de exhibición; tres estantes mas piso, frentines de ac inox esmerilado.</li>
                        <li>Iluminación Led en estantes y techo; provista de tecla de encendido independiente.</li>
                        <li>Cortina para cierre nocturno.</li>
                        <li>Refrigeración y descongelamiento controlados por medio de combistato digital programable.</li>
                        <li>Unidad Condensadora 1hp, gas r404, 220volts.</li>
                        <li>Patas de ac inox, provistas de regatones regulables de PVC.</li>   
                    </ul>
                    </div>
                    <div class="div-detalles">
                        <p>$7200</p>
                        <input class="radio-button" type="radio" name="Heladera Exhibidora Take Away HTA1200" value="7200" style="margin: 0px;">
                        <button class="counter-button" onclick="updateCounter(13, 'decrement')">-</button>
                        <span class="counter-value" style="font-family: poppins;" poppins";"="">0</span>
                        <button class="counter-button" onclick="updateCounter(13, 'increment')">+</button>
                    </div>
                </div>   
            </div>     
            <div class="div-boton-agregar">
                <button class="boton-consulta" onclick="hacerConsulta(13)">Consultar</button>
                <button class="boton-agregar" onclick="agregarAlPedido(13)">Agregar al pedido</button>
            </div>
        </div>
        `;


        subMenuDos.innerHTML = buttonsHTML;

        subMenuDosVisible = true;
        subMenuDos.style.display = "flex";
        subMenuDos.offsetHeight;
        subMenuDos.style.opacity = "1";
        subMenuDos.style.transform = "translateY(0)";
        subMenuDos.style.visibility = "visible";
        subMenuDos.style.flexDirection = "column";
        subMenuDos.style.rowGap = "10px";
        subMenuDos.style.alignItems = "center"

        // Agrega la clase 'active' al botón1 cuando se despliega el submenú
        boton2.classList.add('active');
        subMenuDos.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        event.preventDefault();
    } else {
        const subMenuDosButtons = document.querySelectorAll('.menu-button');
        subMenuDosButtons.forEach(button => {
            button.classList.remove('initial');
        });
        setTimeout(() => {
            subMenuDos.innerHTML = '';
        }, subMenuDosButtons.length * 100);

        subMenuDosVisible = false;

        subMenuDos.style.opacity = "0";
        subMenuDos.style.transform = "translateY(-20px)";
        setTimeout(() => {
            subMenuDos.style.visibility = "hidden";
            subMenuDos.style.display = "none";
        }, 800);

        // Quita la clase 'active' al botón1 cuando se contrae el submenú
        boton2.classList.remove('active');
    }
}

function toggleSubMenuTres() {
    event.preventDefault();
    const subMenuTres = document.getElementById('subMenuTres');
    const boton3 = document.getElementById('boton3');

    if (!subMenuTresVisible) {
        const buttonsHTML = `
        <div class="div-botones-submenu" data-button-number="14">
            <div class="div-producto">

                <div class="carousel-container">
                    <div class="carousel-images" id="carousel-images-14">
                        <img src="./img-pro/MPC-800-3.webp" alt="Imagen 1" class="carousel-image">
                        <img src="./img-pro/MPC-800-6.webp" alt="Imagen 2" class="carousel-image">
                        <img src="./img-pro/MPC-800-9.webp" alt="Imagen 3" class="carousel-image">
                    </div>
                    <button class="carousel-button prev" onclick="prevImage(14)">&#10094;</button> <!-- flecha izquierda -->
                    <button class="carousel-button next" onclick="nextImage(14)">&#10095;</button> <!-- flecha derecha -->
                </div>


                <div class="div-parrafos">
                    <button class="sub-menu-button" data-button-number="14">Mantenedor de Pedidos Calientes Sobremesada <br>MPC 800</button>
                    <div class="palabra-detalles">
                        <p onclick="toggleDetalles(14)" class="producto-detalles" style="
                        width: 117px;
                        font-size: 22px;
                    ">Detalles</p>
                    <span onclick="toggleDetalles(14)" id="flecha" class="flecha-detalles-abajo"></span>
                    </div>
                    <div class="detalles" data-button-number="14">
                    <ul style="line-height:120%">
                        <li><b>Medidas Externas</b>: 800mm de Frente x 500mm de Fondo x 700mm de Altura.</li>
                        <li>Construido Gabinete; interior y exterior de acero inoxidable 430 esmerilado.</li>
                        <li>Iluminación y calefacción por medio de lámparas halogenas de cuarzo de bajo consumo.</li>
                        <li>Dos circuitos de Iluminación/calefacción con interruptores independientes.</li>
                        <li>Opcional estante interior.</li>
                        <li>Aislación de lana mineral.</li>
                    </ul>
                    </div>
                    <div class="div-detalles">
                        <p>$595.000</p>
                        <input class="radio-button" type="radio" name="Mantenedor de Pedidos Calientes Sobremesada MP800" value="595000" style="margin: 0px;">
                        <button class="counter-button" onclick="updateCounter(14, 'decrement')">-</button>
                        <span class="counter-value" style="font-family: poppins;" poppins";"="">0</span>
                        <button class="counter-button" onclick="updateCounter(14, 'increment')">+</button>
                    </div>
                </div>   
            </div>    
            <div class="div-boton-agregar">
                <button class="boton-consulta" onclick="hacerConsulta(14)">Consultar</button>
                <button class="boton-agregar" onclick="agregarAlPedido(14)">Agregar al pedido</button>
            </div>
        </div>




        <div class="div-botones-submenu" data-button-number="15">
            <div class="div-producto">

                <div class="carousel-container">
                    <div class="carousel-images" id="carousel-images-15">
                        <img src="./img-pro/MPV-600.webp" alt="Imagen 1" class="carousel-image"
                        style="width: 200px;
                        margin-left: 51px;
                        height: 250px;">
                        <img src="./img-pro/MPV-600-3.webp" alt="Imagen 2" class="carousel-image"
                        style="width: 200px;
                        margin-left: 99px;
                        height: 250px;">
                        <img src="./img-pro/MPV-600-4.webp" alt="Imagen 3" class="carousel-image"
                        style="width: 200px;
                        margin-left: 99px;
                        height: 250px;">
                    </div>
                    <button class="carousel-button prev" onclick="prevImage(15)">&#10094;</button> <!-- flecha izquierda -->
                    <button class="carousel-button next" onclick="nextImage(15)">&#10095;</button> <!-- flecha derecha -->
                </div>


                <div class="div-parrafos">
                    <button class="sub-menu-button" data-button-number="15">Mantenedor de Pedidos Calientes Vertical<br> MPV 600</button>
                    <div class="palabra-detalles">
                        <p onclick="toggleDetalles(15)" class="producto-detalles" style="
                        width: 117px;
                        font-size: 22px;
                    ">Detalles</p>
                    <span onclick="toggleDetalles(15)" id="flecha" class="flecha-detalles-abajo"></span>
                    </div>
                    <div class="detalles" data-button-number="15">
                    <ul style="line-height:120%">
                        <li><b>Medidas</b>: 600mm de frente x 600mm de Fondo x 1900mm de Altura.</li>
                        <li>Construido; Gabinete interior y exterior de acero inoxidable 430 esmerilado.</li>
                        <li>Aislación de lana mineral.</li>
                        <li>Iluminación y calefacción por medio de lámparas halogenas de cuarzo de bajo consumo.</li>
                        <li>Cuatro niveles de exhibición.</li>
                        <li>Provisto de interruptores por estante.</li>
                        <li>Patas de acero inoxidable provistas de regatones regulables de PVC. </li>
                    </ul>

                    </div>

                    <div class="div-detalles">
                        <div>
                        <p>$1.790.000</p>
                        <p>+IVA 10,5%</p>
                    </div> 
                        <input class="radio-button" type="radio" name="Mantenedor de Pedidos Calientes Vertical MPV600" value="1790000" data-iva="10.5" style="margin: 0px;">
                        <button class="counter-button" onclick="updateCounter(15, 'decrement')">-</button>
                        <span class="counter-value" style="font-family: poppins;" poppins";"="">0</span>
                        <button class="counter-button" onclick="updateCounter(15, 'increment')">+</button>
                    </div>
                </div>   
            </div>     
            <div class="div-boton-agregar">
                <button class="boton-consulta" onclick="hacerConsulta(15)">Consultar</button>
                <button class="boton-agregar" onclick="agregarAlPedido(15)">Agregar al pedido</button>
            </div>
        </div>
        `;


        subMenuTres.innerHTML = buttonsHTML;

        subMenuTresVisible = true;
        subMenuTres.style.display = "flex";
        subMenuTres.offsetHeight;
        subMenuTres.style.opacity = "1";
        subMenuTres.style.transform = "translateY(0)";
        subMenuTres.style.visibility = "visible";
        subMenuTres.style.flexDirection = "column";
        subMenuTres.style.rowGap = "10px";
        subMenuTres.style.alignItems = "center"

        // Agrega la clase 'active' al botón1 cuando se despliega el submenú
        boton3.classList.add('active');
        subMenuTres.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        event.preventDefault();
    } else {
        const subMenuTresButtons = document.querySelectorAll('.menu-button');
        subMenuTresButtons.forEach(button => {
            button.classList.remove('initial');
        });
        setTimeout(() => {
            subMenuTres.innerHTML = '';
        }, subMenuTresButtons.length * 100);

        subMenuTresVisible = false;

        subMenuTres.style.opacity = "0";
        subMenuTres.style.transform = "translateY(-20px)";
        setTimeout(() => {
            subMenuTres.style.visibility = "hidden";
            subMenuTres.style.display = "none";
        }, 800);

        // Quita la clase 'active' al botón1 cuando se contrae el submenú
        boton3.classList.remove('active');
    }
}

function toggleSubMenuCuatro() {
    event.preventDefault();
    const subMenuCuatro = document.getElementById('subMenuCuatro');
    const boton4 = document.getElementById('boton4');

    if (!subMenuCuatroVisible) {
        const buttonsHTML = `
        <div class="div-botones-submenu" data-button-number="16">
            <div class="div-producto">

                <div class="carousel-container">
                    <div class="carousel-images" id="carousel-images-16">
                        <img src="./img-pro/HM2P.webp" alt="Imagen 1" class="carousel-image">
                        <img src="./img-pro/HM2P-2.webp" alt="Imagen 2" class="carousel-image">
                        <img src="./img-pro/HM2P-3.webp" alt="Imagen 3" class="carousel-image">
                    </div>
                    <button class="carousel-button prev" onclick="prevImage(16)">&#10094;</button> <!-- flecha izquierda -->
                    <button class="carousel-button next" onclick="nextImage(16)">&#10095;</button> <!-- flecha derecha -->
                </div>


                <div class="div-parrafos">
                    <button class="sub-menu-button" data-button-number="16">Heladera Bajo Mesada<br> 2 Puertas c/motor incorporado<br> HM2P</button>
                    <div class="palabra-detalles">
                        <p onclick="toggleDetalles(16)" class="producto-detalles" style="
                        width: 117px;
                        font-size: 22px;
                    ">Detalles</p>
                    <span onclick="toggleDetalles(16)" id="flecha" class="flecha-detalles-abajo"></span>
                    </div>
                    <div class="detalles" data-button-number="16">
                    <ul style="line-height:120%">
                        <li><b>Medidas</b>: 1400mm de frente x 700mm de fondo x 850mm de altura.</li>
                        <li>Provista de dos rejillas metálicas pintadas con pintura epoxi.</li>
                        <li>Refrigeración y descongelamiento controlado por medio de combistato digital programable.</li>
                        <li>Frío estático.</li>
                        <li>Unidad condensadora 1/2hp, gas r22, 220 volts.</li>
                        <li>Motor incorporado.</li>
                        <li>Provista de bandeja evaporativa.</li>
                        <li>Patas de acero inoxidable provistas de regatones regulables de pvc.</li>
                        <li>Gabinete, construido con paneles de acero inoxidable esmerilado inyectados en poliuretano de alta densidad.</li>
                        <li> Dos puertas de acero inoxidable interior y exterior, inyectados en poliuretano, provistas de burletes magnéticos y bisagras retornables.</li>
                    </ul>
                    </div>
                    <div class="div-detalles">
                        <p>$8200</p>
                        <input class="radio-button" type="radio" name="Heladera Bajo Mesada 2 Puertas c/motor incorporado HM1400" value="8200" style="margin: 0px;">
                        <button class="counter-button" onclick="updateCounter(16, 'decrement')">-</button>
                        <span class="counter-value" style="font-family: poppins;" poppins";"="">0</span>
                        <button class="counter-button" onclick="updateCounter(16, 'increment')">+</button>
                    </div>
                </div>   
            </div>    
            <div class="div-boton-agregar">
                <button class="boton-consulta" onclick="hacerConsulta(16)">Consultar</button>
                <button class="boton-agregar" onclick="agregarAlPedido(16)">Agregar al pedido</button>
            </div>
        </div>




        <div class="div-botones-submenu" data-button-number="17">
            <div class="div-producto">



                <div class="carousel-container">
                    <div class="carousel-images" id="carousel-images-17">
                        <img src="./img-pro/HM3P.webp" alt="Imagen 1" class="carousel-image">
                        <img src="./img-pro/HM3P-5.webp" alt="Imagen 2" class="carousel-image">
                        <img src="./img-pro/HM3P-6.webp" alt="Imagen 3" class="carousel-image">
                    </div>
                    <button class="carousel-button prev" onclick="prevImage(17)">&#10094;</button> <!-- flecha izquierda -->
                    <button class="carousel-button next" onclick="nextImage(17)">&#10095;</button> <!-- flecha derecha -->
                </div>

                <div class="div-parrafos">
                    <button class="sub-menu-button" data-button-number="17">Heladera Bajo Mesada <br>3 Puertas c/motor incorporado <br>HM3P</button>
                   <div class="palabra-detalles">
                        <p onclick="toggleDetalles(17)" class="producto-detalles" style="
                        width: 117px;
                        font-size: 22px;
                    ">Detalles</p>
                    <span onclick="toggleDetalles(17)" id="flecha" class="flecha-detalles-abajo"></span>
                    </div>
                    <div class="detalles" data-button-number="17">
                    <ul style="line-height:120%">
                        <li><b>Medidas</b>: 1900mm de frente x 700mm de fondo x 850mm de altura.</li>
                        <li>Patas de acero inoxidable provistas de regatones regulables de pvc.</li>
                        <li>Provista de bandeja evaporativa.</li>
                        <li>Motor incorporado.</li>
                        <li>Gabinete, construido con paneles de acero inoxidable esmerilado inyectados en poliuretano de alta densidad.</li>
                        <li> Tres puertas de acero inoxidable interior y exterior, inyectados en poliuretano, provistas de burletes magnéticos y bisagras retornables.</li>
                        <li>Provista de tres rejillas metálicas pintadas con pintura epoxi.</li>
                        <li>Refrigeración y descongelamiento controlados por medio de combistato digital programable.</li>
                        <li>Frío estático.</li>
                        <li>Unidad condensadora 1/2hp, gas r22, 220 volts.</li>
                    </ul>
                    </div>
                    <div class="div-detalles">
                        <p>$7200</p>
                        <input class="radio-button" type="radio" name="Heladera Bajo Mesada 3 Puertas c/motor incorporado HM1900" value="7200" style="margin: 0px;">
                        <button class="counter-button" onclick="updateCounter(17, 'decrement')">-</button>
                        <span class="counter-value" style="font-family: poppins;" poppins";"="">0</span>
                        <button class="counter-button" onclick="updateCounter(17, 'increment')">+</button>
                    </div>
                </div>   
            </div>     
            <div class="div-boton-agregar">
                <button class="boton-consulta" onclick="hacerConsulta(17)">Consultar</button>
                <button class="boton-agregar" onclick="agregarAlPedido(17)">Agregar al pedido</button>
            </div>
        </div>



        
        <div class="div-botones-submenu" data-button-number="18">
            <div class="div-producto">

                <div class="carousel-container">
                    <div class="carousel-images" id="carousel-images-18">
                        <img src="./img-pro/HM4P.webp" alt="Imagen 1" class="carousel-image"
                        style="
                        height: 250px;">
                        <img src="./img-pro/HM4P-6.webp" alt="Imagen 2" class="carousel-image"
                        style="width: 200px;
                        margin-left: 51px;
                        height: 250px;">
                        <img src="./img-pro/HM4P-7.webp" alt="Imagen 3" class="carousel-image"
                        style="width: 200px;
                        margin-left: 99px;
                        height: 250px;">
                    </div>
                    <button class="carousel-button prev" onclick="prevImage(18)">&#10094;</button> <!-- flecha izquierda -->
                    <button class="carousel-button next" onclick="nextImage(18)">&#10095;</button> <!-- flecha derecha -->
                </div>


                <div class="div-parrafos">
                    <button class="sub-menu-button" data-button-number="18">Heladera Bajo Mesada <br>4 Puertas c/motor incorporado<br> HM4P</button>
                    <div class="palabra-detalles">
                        <p onclick="toggleDetalles(18)" class="producto-detalles" style="
                        width: 117px;
                        font-size: 22px;
                    ">Detalles</p>
                    <span onclick="toggleDetalles(18)" id="flecha" class="flecha-detalles-abajo"></span>
                    </div>
                    <div class="detalles" data-button-number="18">
                    <ul style="line-height:120%">
                        <li><b>Medidas</b>: 2400mm de frente x 700mm de fondo x 850mm de altura. </li>
                        <li>Gabinete, construido con paneles de acero inoxidable esmerilado inyectados en poliuretano de alta densidad.</li>
                        <li>Cuatro puertas de acero inoxidable interior y exterior, inyectados en poliuretano, provistas de burletes magnéticos y bisagras retornables.</li>
                        <li>Provista de cuatro rejillas metálicas pintadas con pintura epoxi.</li>
                        <li>Refrigeración y descongelamiento controlados por medio de combistato digital programable.</li>
                        <li>Frío estático.</li>
                        <li>Unidad condensadora 1/2hp+, gas r22, 220 volts.</li>
                        <li>Motor incorporado.</li>
                        <li>Provista de bandeja evaporativa.</li>
                        <li>Patas de acero inoxidable provistas de regatones regulables de pvc.</li>
                    </ul>
                    </div>
                    <div class="div-detalles">
                        <p>$7200</p>
                        <input class="radio-button" type="radio" name="Heladera Bajo Mesada 4 Puertas c/motor incorporado HM2400" value="7200" style="margin: 0px;">
                        <button class="counter-button" onclick="updateCounter(18, 'decrement')">-</button>
                        <span class="counter-value" style="font-family: poppins;" poppins";"="">0</span>
                        <button class="counter-button" onclick="updateCounter(18, 'increment')">+</button>
                    </div>
                </div>   
            </div>     
            <div class="div-boton-agregar">
                <button class="boton-consulta" onclick="hacerConsulta(18)">Consultar</button>
                <button class="boton-agregar" onclick="agregarAlPedido(18)">Agregar al pedido</button>
            </div>
        </div>

        <div class="div-botones-submenu" data-button-number="19">
            <div class="div-producto">


                <div class="carousel-container">
                    <div class="carousel-images" id="carousel-images-19">
                        <img src="./img-pro/HT-1000.webp" alt="Imagen 1" class="carousel-image">
                        <img src="./img-pro/HT-1000-2.webp" alt="Imagen 1" class="carousel-image">
                    </div>
                    <button class="carousel-button prev" onclick="prevImage(19)">&#10094;</button> <!-- flecha izquierda -->
                    <button class="carousel-button next" onclick="nextImage(19)">&#10095;</button> <!-- flecha derecha -->
                </div>

                <div class="div-parrafos">
                    <button class="sub-menu-button" data-button-number="19">Heladera Exhibidora de Tortas <br>Cupula Recta <br>HT 1000</button>
                   <div class="palabra-detalles">
                        <p onclick="toggleDetalles(19)" class="producto-detalles" style="
                        width: 117px;
                        font-size: 22px;
                    ">Detalles</p>
                    <span onclick="toggleDetalles(19)" id="flecha" class="flecha-detalles-abajo"></span>
                    </div>
                    <div class="detalles" data-button-number="19">
                    <ul style="line-height:120%">
                        <li><b>Medidas</b>:  1000mm de frente x 850mm de fondo x 1250mm de altura.</li>
                        <li>Construida Gabinete de paneles acero inoxidable esmerilado inyectados en poliuretano.</li>
                        <li>Cúpula de vidrio termopanel 4+9+6mm.</li>
                        <li>Estantes de vidrio laminado 3+3mm.</li>
                        <li>Iluminación led en techo y estante.</li>
                        <li>Tres niveles de exposición, dos estantes mas piso.</li>
                        <li>Patas de acero inoxidable con regatones regulables de PVC. </li>
                        <li>Provista de bandeja de desague evaporativa.</li>
                        <li>Refrigeración y descongelamiento por medio de combistato digital programable.</li>
                        <li>Unidad condensadora 1/2hp, gas r404, 220volts.</li>
                        <li>Frio forzado. </li>
                    </ul>
                    </div>
                    <div class="div-detalles">
                        <p>$7200</p>
                        <input class="radio-button" type="radio" name="Heladera Exhibidora de Tortas Cupula Recta HT1000" value="7200" style="margin: 0px;">
                        <button class="counter-button" onclick="updateCounter(19, 'decrement')">-</button>
                        <span class="counter-value" style="font-family: poppins;" poppins";"="">0</span>
                        <button class="counter-button" onclick="updateCounter(19, 'increment')">+</button>
                    </div>
                </div>   
            </div>     
            <div class="div-boton-agregar">
                <button class="boton-consulta" onclick="hacerConsulta(19)">Consultar</button>
                <button class="boton-agregar" onclick="agregarAlPedido(19)">Agregar al pedido</button>
            </div>
        </div>

        <div class="div-botones-submenu" data-button-number="20">
            <div class="div-producto">

                <div class="carousel-container">
                    <div class="carousel-images" id="carousel-images-20">
                        <img src="./img-pro/HTA-1200-2.webp" alt="Imagen 1" class="carousel-image">
                    </div>
                    <button class="carousel-button prev" onclick="prevImage(20)">&#10094;</button> <!-- flecha izquierda -->
                    <button class="carousel-button next" onclick="nextImage(20)">&#10095;</button> <!-- flecha derecha -->
                </div>


                <div class="div-parrafos">
                    <button class="sub-menu-button" data-button-number="20">Heladera Exhibidora de Tortas<br> Cupula Recta<br> HT 1200</button>
                    <div class="palabra-detalles">
                        <p onclick="toggleDetalles(20)" class="producto-detalles" style="
                        width: 117px;
                        font-size: 22px;
                    ">Detalles</p>
                    <span onclick="toggleDetalles(20)" id="flecha" class="flecha-detalles-abajo"></span>
                    </div>
                    <div class="detalles" data-button-number="20">
                    <ul style="line-height:120%">
                        <li><b>Medidas</b>: 1200mm de frente x 850mm de fondo x 1250mm de altura.</li>
                        <li>Construida Gabinete de paneles acero inoxidable esmerilado inyectados en poliuretano.</li>
                        <li>Cúpula de vidrio termopanel 4+9+6mm.</li>
                        <li>Estantes de vidrio laminado 3+3mm.</li>
                        <li>Iluminación led en techo y estante.</li>
                        <li>Tres niveles de exposición, dos estantes mas piso.</li>
                        <li>Patas de acero inoxidable con regatones regulables de PVC. </li>
                        <li>Provista de bandeja de desague evaporativa.</li>
                        <li>Refrigeración y descongelamiento por medio de combistato digital programable.</li>
                        <li>Unidad condensadora 1/2hp, gas r404, 220volts. </li>
                        <li>Frio forzado. </li>
                    </ul>
                    </div>
                    <div class="div-detalles">
                        <p>$7200</p>
                        <input class="radio-button" type="radio" name="Heladera Exhibidora de Tortas Cupula Recta HT1200" value="7200" style="margin: 0px;">
                        <button class="counter-button" onclick="updateCounter(20, 'decrement')">-</button>
                        <span class="counter-value" style="font-family: poppins;" poppins";"="">0</span>
                        <button class="counter-button" onclick="updateCounter(20, 'increment')">+</button>
                    </div>
                </div>   
            </div>     
            <div class="div-boton-agregar">
                <button class="boton-consulta" onclick="hacerConsulta(20)">Consultar</button>
                <button class="boton-agregar" onclick="agregarAlPedido(20)">Agregar al pedido</button>
            </div>
        </div>


        <div class="div-botones-submenu" data-button-number="21">
            <div class="div-producto">

                <div class="carousel-container">
                    <div class="carousel-images" id="carousel-images-21">
                        <img src="./img-pro/HT-1500.webp" alt="Imagen 1" class="carousel-image"
                        style="width: 200px;
                        margin-left: 51px;
                        height: 250px;">
                        <img src="./img-pro/HT-1500-2.webp" alt="Imagen 2" class="carousel-image"
                        style="width: 200px;
                        margin-left: 99px;
                        height: 250px;">
                    </div>
                    <button class="carousel-button prev" onclick="prevImage(21)">&#10094;</button> <!-- flecha izquierda -->
                    <button class="carousel-button next" onclick="nextImage(21)">&#10095;</button> <!-- flecha derecha -->
                </div>


                <div class="div-parrafos">
                    <button class="sub-menu-button" data-button-number="21">Heladera Exhibidora de Tortas<br> Cupula Recta<br> HT 1500</button>
                    <div class="palabra-detalles">
                        <p onclick="toggleDetalles(21)" class="producto-detalles" style="
                        width: 117px;
                        font-size: 22px;
                    ">Detalles</p>
                    <span onclick="toggleDetalles(21)" id="flecha" class="flecha-detalles-abajo"></span>
                    </div>
                    <div class="detalles" data-button-number="21">
                    <ul style="line-height:120%">
                        <li><b>Medidas</b>: 1500mm de frente x 850mm de fondo x 1250mm de altura.</li>
                        <li>Construida Gabinete de paneles acero inoxidable esmerilado inyectados en poliuretano.</li>
                        <li>Cúpula de vidrio termopanel 4+9+6mm.</li>
                        <li>Estantes de vidrio laminado 3+3mm.</li>
                        <li>Iluminación led en techo y estante.</li>
                        <li>Tres niveles de exposición, dos estantes mas piso.</li>
                        <li>Patas de acero inoxidable con regatones regulables de PVC. </li>
                        <li>Provista de bandeja de desague evaporativa.</li>
                        <li>Refrigeración y descongelamiento por medio de combistato digital programable.</li>
                        <li>Unidad condensadora 3/4hp, Gas r404,  220volts. </li>
                        <li>Frio forzado. </li>
                    </ul>
                    </div>
                    <div class="div-detalles">
                        <p>$7200</p>
                        <input class="radio-button" type="radio" name="Heladera Exhibidora de Tortas Cupula Recta HT1500" value="7200" style="margin: 0px;">
                        <button class="counter-button" onclick="updateCounter(21, 'decrement')">-</button>
                        <span class="counter-value" style="font-family: poppins;" poppins";"="">0</span>
                        <button class="counter-button" onclick="updateCounter(21, 'increment')">+</button>
                    </div>
                </div>   
            </div>     
            <div class="div-boton-agregar">
                <button class="boton-consulta" onclick="hacerConsulta(21)">Consultar</button>
                <button class="boton-agregar" onclick="agregarAlPedido(21)">Agregar al pedido</button>
            </div>
        </div>
        `;


        subMenuCuatro.innerHTML = buttonsHTML;

        subMenuCuatroVisible = true;
        subMenuCuatro.style.display = "flex";
        subMenuCuatro.offsetHeight;
        subMenuCuatro.style.opacity = "1";
        subMenuCuatro.style.transform = "translateY(0)";
        subMenuCuatro.style.visibility = "visible";
        subMenuCuatro.style.flexDirection = "column";
        subMenuCuatro.style.rowGap = "10px";
        subMenuCuatro.style.alignItems = "center"

        // Agrega la clase 'active' al botón1 cuando se despliega el submenú
        boton4.classList.add('active');
        subMenuCuatro.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        event.preventDefault();
    } else {
        const subMenuCuatroButtons = document.querySelectorAll('.menu-button');
        subMenuCuatroButtons.forEach(button => {
            button.classList.remove('initial');
        });
        setTimeout(() => {
            subMenuCuatro.innerHTML = '';
        }, subMenuCuatroButtons.length * 100);

        subMenuCuatroVisible = false;

        subMenuCuatro.style.opacity = "0";
        subMenuCuatro.style.transform = "translateY(-20px)";
        setTimeout(() => {
            subMenuCuatro.style.visibility = "hidden";
            subMenuCuatro.style.display = "none";
        }, 800);

        // Quita la clase 'active' al botón1 cuando se contrae el submenú
        boton4.classList.remove('active');
    }
}


function toggleSubMenuCinco() {
    event.preventDefault();
    const subMenuCinco = document.getElementById('subMenuCinco');
    const boton5 = document.getElementById('boton5');

    if (!subMenuCincoVisible) {
        const buttonsHTML = `
        <div class="div-botones-submenu" data-button-number="22">
            <div class="div-producto">

                <div class="carousel-container">
                    <div class="carousel-images" id="carousel-images-22">
                    </div>
                    <button class="carousel-button prev" onclick="prevImage(22)">&#10094;</button> <!-- flecha izquierda -->
                    <button class="carousel-button next" onclick="nextImage(22)">&#10095;</button> <!-- flecha derecha -->
                </div>
                <div class="div-parrafos">
                    <button class="sub-menu-button" data-button-number="22">Warmer Economico<br> Sobremesada - WE400</button>
                   <div class="palabra-detalles">
                        <p onclick="toggleDetalles(22)" class="producto-detalles" style="
                        width: 117px;
                        font-size: 22px;
                    ">Detalles</p>
                    <span onclick="toggleDetalles(22)" id="flecha" class="flecha-detalles-abajo"></span>
                    </div>
                    <div class="detalles" data-button-number="22">
                    <ul style="line-height:120%">
                        <li><b>Nombre</b>: Warmer - Mantenedor/Exhibidor de Comidas Calientes Sobremesada 2 Estantes. Línea Económica. WESM400.</li>
                        <li><b>Materiales</b>:Construido, Gabinete y Estantes Totalmente de Ac Inox Esmerilado.
                            Cúpula y de Vidrio de 6mm de espesor.
                            Tres niveles de exhibición, dos pisos y estantes.
                            Iluminación y Calefacción por medio de lámparas halogenas de cuarzo de bajo consumo.</li>
                            Construido, Gabinete y Estantes Totalmente de Ac Inox Esmerilado.

                            <li><b>Temperatura</b>: 
                                Alimentacion 220 volts, consumo aproximado 2 amperes.
                                Med. 400mm de Frente x 600mm de Fondo x 800mm de Altura con dos estantes.</li>
                    </ul>
                    </div>





                    <div class="div-detalles">
                        <p>$760.000</p>
                        <input class="radio-button" type="radio" name="Warmer-Economico-Sobremesada-WE40" value="760000" style="margin: 0px;">
                        <button class="counter-button" onclick="updateCounter(22, 'decrement')">-</button>
                        <span class="counter-value" style="font-family: poppins;" poppins";"="">0</span>
                        <button class="counter-button" onclick="updateCounter(22, 'increment')">+</button>
                    </div>
                </div>   
            </div>    
            <div class="div-boton-agregar">
                <button class="boton-consulta" onclick="hacerConsulta(22)">Consultar</button>
                <button class="boton-agregar" onclick="agregarAlPedido(22)">Agregar al pedido</button>
            </div>
        </div>




        <div class="div-botones-submenu" data-button-number="23">
            <div class="div-producto">

                <div class="carousel-container">
                    <div class="carousel-images" id="carousel-images-23">
                        <img src="producto-1-1.webp" alt="Imagen 1" class="carousel-image">
                        <img src="producto-1-2.webp" alt="Imagen 2" class="carousel-image">
                        <img src="producto-1-3.webp" alt="Imagen 3" class="carousel-image">
                    </div>
                    <button class="carousel-button prev" onclick="prevImage(23)">&#10094;</button> <!-- flecha izquierda -->
                    <button class="carousel-button next" onclick="nextImage(23)">&#10095;</button> <!-- flecha derecha -->
                </div>

                <div class="div-parrafos">
                    <button class="sub-menu-button" data-button-number="23">Warmer Economico<br>Sobremesada - WE600</button>
                   <div class="palabra-detalles">
                        <p onclick="toggleDetalles(23)" class="producto-detalles" style="
                        width: 117px;
                        font-size: 22px;
                    ">Detalles</p>
                    <span onclick="toggleDetalles(23)" id="flecha" class="flecha-detalles-abajo"></span>
                    </div>
                    <div class="detalles" data-button-number="23">
                    <ul style="line-height:120%">
                        <li><b>Medidas</b>: 20cm Ancho, 15cm Alto & 30cm Profundidad.</li>
                        <li><b>Materiales</b>:</li>
                        <li><b>Temperatura</b>:</li>
                    </ul>
                    </div>
                    <div class="div-detalles">
                        <p>$7200</p>
                        <input class="radio-button" type="radio" name="Warmer-Economico-Sobremesada-WE600" value="7200" style="margin: 0px;">
                        <button class="counter-button" onclick="updateCounter(23, 'decrement')">-</button>
                        <span class="counter-value" style="font-family: poppins;" poppins";"="">0</span>
                        <button class="counter-button" onclick="updateCounter(23, 'increment')">+</button>
                    </div>
                </div>   
            </div>     
            <div class="div-boton-agregar">
                <button class="boton-consulta" onclick="hacerConsulta(23)">Consultar</button>
                <button class="boton-agregar" onclick="agregarAlPedido(23)">Agregar al pedido</button>
            </div>
        </div>



        
        <div class="div-botones-submenu" data-button-number="24">
            <div class="div-producto">


                <div class="carousel-container">
                    <div class="carousel-images" id="carousel-images-24">
                        <img src="producto-1-1.webp" alt="Imagen 1" class="carousel-image">
                        <img src="producto-1-2.webp" alt="Imagen 2" class="carousel-image">
                        <img src="producto-1-3.webp" alt="Imagen 3" class="carousel-image">
                    </div>
                    <button class="carousel-button prev" onclick="prevImage(24)">&#10094;</button> <!-- flecha izquierda -->
                    <button class="carousel-button next" onclick="nextImage(24)">&#10095;</button> <!-- flecha derecha -->
                </div>

                <div class="div-parrafos">
                    <button class="sub-menu-button" data-button-number="24">Warmer Exhibidor <br>Sobremesada - WSM500</button>
                    <div class="palabra-detalles">
                        <p onclick="toggleDetalles(24)" class="producto-detalles" style="
                        width: 117px;
                        font-size: 22px;
                    ">Detalles</p>
                    <span onclick="toggleDetalles(24)" id="flecha" class="flecha-detalles-abajo"></span>
                    </div>
                    <div class="detalles" data-button-number="24">
                    <ul style="line-height:120%">
                        <li><b>Medidas</b>: 500mm de Frente x 600mm de Fondo x 650mm de Altura.</li>
                        <li>Construido Gabinete totalmente en Ac Inoxidable 430 esmerilado.</li>
                        <li>Cúpula y Estante de vidrio templado de 6mm de espesor.</li>
                        <li>Dos niveles de Exhibición.</li>
                        <li>Piso y estante calefaccionados por medio de lámparas halogenas de 150 watts c/u.</li>
                        <li>Dos circuitos de iluminación con interruptor independiente.</li>
                        <li>Provisto de Dimmer Regulador de Temperatura.</li>
                        <li>Alimentacion 220 volts, Consumo aproximado maximo 3 amperes.</li>
                    </ul>
                    </div>
                    <div class="div-detalles">
                        <p>$7200</p>
                        <input class="radio-button" type="radio" name="Warmer-Exhibidor-Sobremesada-WSM500" value="7200" style="margin: 0px;">
                        <button class="counter-button" onclick="updateCounter(24, 'decrement')">-</button>
                        <span class="counter-value" style="font-family: poppins;" poppins";"="">0</span>
                        <button class="counter-button" onclick="updateCounter(24, 'increment')">+</button>
                    </div>
                </div>   
            </div>     
            <div class="div-boton-agregar">
                <button class="boton-consulta" onclick="hacerConsulta(24)">Consultar</button>
                <button class="boton-agregar" onclick="agregarAlPedido(24)">Agregar al pedido</button>
            </div>
        </div>

        <div class="div-botones-submenu" data-button-number="25">
            <div class="div-producto">


                <div class="carousel-container">
                    <div class="carousel-images" id="carousel-images-25">
                        <img src="producto-1-1.webp" alt="Imagen 1" class="carousel-image">
                        <img src="producto-1-2.webp" alt="Imagen 2" class="carousel-image">
                        <img src="producto-1-3.webp" alt="Imagen 3" class="carousel-image">
                    </div>
                    <button class="carousel-button prev" onclick="prevImage(25)">&#10094;</button> <!-- flecha izquierda -->
                    <button class="carousel-button next" onclick="nextImage(25)">&#10095;</button> <!-- flecha derecha -->
                </div>

                <div class="div-parrafos">
                    <button class="sub-menu-button" data-button-number="25">Warmer Exhibidor<br>Sobremesada - WSM800</button>
                    <div class="palabra-detalles">
                        <p onclick="toggleDetalles(25)" class="producto-detalles" style="
                        width: 117px;
                        font-size: 22px;
                    ">Detalles</p>
                    <span onclick="toggleDetalles(25)" id="flecha" class="flecha-detalles-abajo"></span>
                    </div>
                    <div class="detalles" data-button-number="25">
                    <ul style="line-height:120%">
                        <li><b>Medidas</b>: 800mm de Frente x 600mm de Fondo x 650mm de Altura.</li>
                        <li>Construido Gabinete totalmente en Ac Inoxidable 430 esmerilado.</li>
                        <li>Cúpula y Estante de vidrio templado de 6mm de espesor.</li>
                        <li>Dos niveles de Exhibicion.</li>
                        <li>Piso y estante calefaccionados por medio de lámparas halogenas de 150 watts c/u.</li>
                        <li>Dos circuitos de iluminación con interruptor independiente. </li>
                        <li>Provisto de Dimmer Regulador de Temperatura.</li>
                        <li>Alimentación 220 volts, Consumo aproximado máximo 3 amperes. </li>
                    </ul>
                    </div>
                    <div class="div-detalles">
                        <p>$7200</p>
                        <input class="radio-button" type="radio" name="Warmer-Exhibidor-Sobremesada-WSM800" value="7200" style="margin: 0px;">
                        <button class="counter-button" onclick="updateCounter(25, 'decrement')">-</button>
                        <span class="counter-value" style="font-family: poppins;" poppins";"="">0</span>
                        <button class="counter-button" onclick="updateCounter(25, 'increment')">+</button>
                    </div>
                </div>   
            </div>     
            <div class="div-boton-agregar">
                <button class="boton-consulta" onclick="hacerConsulta(25)">Consultar</button>
                <button class="boton-agregar" onclick="agregarAlPedido(25)">Agregar al pedido</button>
            </div>
        </div>

        <div class="div-botones-submenu" data-button-number="26">
            <div class="div-producto">


                <div class="carousel-container">
                    <div class="carousel-images" id="carousel-images-26">
                        <img src="producto-1-1.webp" alt="Imagen 1" class="carousel-image">
                        <img src="producto-1-2.webp" alt="Imagen 2" class="carousel-image">
                        <img src="producto-1-3.webp" alt="Imagen 3" class="carousel-image">
                    </div>
                    <button class="carousel-button prev" onclick="prevImage(26)">&#10094;</button> <!-- flecha izquierda -->
                    <button class="carousel-button next" onclick="nextImage(26)">&#10095;</button> <!-- flecha derecha -->
                </div>

                <div class="div-parrafos">
                    <button class="sub-menu-button" data-button-number="26">Warmer Exhibidor<br>Sobremesada - WSM1200</button>
                    <div class="palabra-detalles">
                        <p onclick="toggleDetalles(26)" class="producto-detalles" style="
                        width: 117px;
                        font-size: 22px;
                    ">Detalles</p>
                    <span onclick="toggleDetalles(26)" id="flecha" class="flecha-detalles-abajo"></span>
                    </div>
                    <div class="detalles" data-button-number="26">
                    <ul style="line-height:120%">
                        <li><b>Medidas</b>: 1200mm de Frente x 600mm de Fondo x 650mm de Altura.</li>
                        <li>Alimentación 220 volts, Consumo aproximado maximo 6 amperes.</li>
                        <li>Provisto de Dimmer Regulador de Temperatura.</li>
                        <li>Dos circuitos de iluminación con interruptor independiente.</li>
                        <li>Piso y estante calefaccionados por medio de lámparas halogenas de 150watts c/u.</li>
                        <li>Dos niveles de Exhibición.</li>
                        <li>Cúpula y Estante de vidrio templado de 6mm de espesor.</li>
                        <li>Construido Gabinete totalmente en Ac Inoxidable 430 esmerilado.</li>
                    </ul>
                    </div>
                    <div class="div-detalles">
                        <p>$7200</p>
                        <input class="radio-button" type="radio" name="Warmer-Exhibidor-Sobremesada-WSM1200" value="7200" style="margin: 0px;">
                        <button class="counter-button" onclick="updateCounter(26, 'decrement')">-</button>
                        <span class="counter-value" style="font-family: poppins;" poppins";"="">0</span>
                        <button class="counter-button" onclick="updateCounter(26, 'increment')">+</button>
                    </div>
                </div>   
            </div>     
            <div class="div-boton-agregar">
                <button class="boton-consulta" onclick="hacerConsulta(26)">Consultar</button>
                <button class="boton-agregar" onclick="agregarAlPedido(26)">Agregar al pedido</button>
            </div>
        </div>



        <div class="div-botones-submenu" data-button-number="27">
            <div class="div-producto">

                <div class="carousel-container">
                    <div class="carousel-images" id="carousel-images-27">
                        <img src="./img-pro/ME-1200.webp" alt="Imagen 1" class="carousel-image">
                        <img src="./img-pro/ME-1200-1" alt="Imagen 2" class="carousel-image">
                        <img src="./img-pro/ME-1200-2" alt="Imagen 3" class="carousel-image">
                    </div>
                    <button class="carousel-button prev" onclick="prevImage(27)">&#10094;</button> <!-- flecha izquierda -->
                    <button class="carousel-button next" onclick="nextImage(27)">&#10095;</button> <!-- flecha derecha -->
                </div>


                <div class="div-parrafos">
                    <button class="sub-menu-button" data-button-number="27">Mantenedor<br>Exhibidor de Empanadas Calientes<br>ME1200</button>
                    <p class="producto-detalles" style="
                        width: 206px;
                        border-bottom: solid 2px #d92c2c;
                    ">Detalles</p>
                    <ul style="line-height:120%">
                        <li><b>Medidas</b>: 20cm Ancho, 15cm Alto & 30cm Profundidad.</li>
                        <li><b>Materiales</b>:</li>
                        <li><b>Temperatura</b>:</li>
                    </ul>
                    <div class="div-detalles">
                        <p>$7200</p>
                        <input class="radio-button" type="radio" name="Mantenedor-Exhibidor-Empanadas-Calientes-ME1200" value="7200" style="margin: 0px;">
                        <button class="counter-button" onclick="updateCounter(27, 'decrement')">-</button>
                        <span class="counter-value" style="font-family: poppins;" poppins";"="">0</span>
                        <button class="counter-button" onclick="updateCounter(27, 'increment')">+</button>
                    </div>
                </div>   
            </div>     
            <div class="div-boton-agregar">
                <button class="boton-consulta" onclick="hacerConsulta(27)">Consultar</button>
                <button class="boton-agregar" onclick="agregarAlPedido(27)">Agregar al pedido</button>
            </div>
        </div>


        <div class="div-botones-submenu" data-button-number="28">
            <div class="div-producto">

                <div class="carousel-container">
                    <div class="carousel-images" id="carousel-images-28">
                        <img src="producto-1-1.webp" alt="Imagen 1" class="carousel-image">
                        <img src="producto-1-2.webp" alt="Imagen 2" class="carousel-image">
                        <img src="producto-1-3.webp" alt="Imagen 3" class="carousel-image">
                    </div>
                    <button class="carousel-button prev" onclick="prevImage(28)">&#10094;</button> <!-- flecha izquierda -->
                    <button class="carousel-button next" onclick="nextImage(28)">&#10095;</button> <!-- flecha derecha -->
                </div>



                <div class="div-parrafos">
                    <button class="sub-menu-button" data-button-number="28">Mantenedor<br>Exhibidor de Empanadas Calientes<br>ME1800</button>
                   <div class="palabra-detalles">
                        <p onclick="toggleDetalles(28)" class="producto-detalles" style="
                        width: 117px;
                        font-size: 22px;
                    ">Detalles</p>
                    <span onclick="toggleDetalles(28)" id="flecha" class="flecha-detalles-abajo"></span>
                    </div>
                    <div class="detalles" data-button-number="28">
                    <ul style="line-height:120%">
                        <li><b>Medidas</b>: 20cm Ancho, 15cm Alto & 30cm Profundidad.</li>
                        <li><b>Materiales</b>:</li>
                        <li><b>Temperatura</b>:</li>
                    </ul>
                    </div>
                    <div class="div-detalles">
                        <p>$1.690.000</p>
                        <input class="radio-button" type="radio" name="Mantenedor-Exhibidor-Empanadas-Calientes-ME1800" value="1690000" style="margin: 0px;">
                        <button class="counter-button" onclick="updateCounter(28, 'decrement')">-</button>
                        <span class="counter-value" style="font-family: poppins;" poppins";"="">0</span>
                        <button class="counter-button" onclick="updateCounter(28, 'increment')">+</button>
                    </div>
                </div>   
            </div>     
            <div class="div-boton-agregar">
                <button class="boton-consulta" onclick="hacerConsulta(28)">Consultar</button>
                <button class="boton-agregar" onclick="agregarAlPedido(28)">Agregar al pedido</button>
            </div>
        </div>


        <div class="div-botones-submenu" data-button-number="29">
            <div class="div-producto">

                <div class="carousel-container">
                    <div class="carousel-images" id="carousel-images-29">
                        <img src="producto-1-1.webp" alt="Imagen 1" class="carousel-image">
                        <img src="producto-1-2.webp" alt="Imagen 2" class="carousel-image">
                        <img src="producto-1-3.webp" alt="Imagen 3" class="carousel-image">
                    </div>
                    <button class="carousel-button prev" onclick="prevImage(29)">&#10094;</button> <!-- flecha izquierda -->
                    <button class="carousel-button next" onclick="nextImage(29)">&#10095;</button> <!-- flecha derecha -->
                </div>


                <div class="div-parrafos">
                    <button class="sub-menu-button" data-button-number="29">Mantenedor<br>Exhibidor de Empanadas Calientes<br>ME2400</button>
                    <div class="palabra-detalles">
                        <p onclick="toggleDetalles(29)" class="producto-detalles" style="
                        width: 117px;
                        font-size: 22px;
                    ">Detalles</p>
                    <span onclick="toggleDetalles(29)" id="flecha" class="flecha-detalles-abajo"></span>
                    </div>
                    <div class="detalles" data-button-number="29">
                    <ul style="line-height:120%">
                        <li><b>Medidas</b>: 20cm Ancho, 15cm Alto & 30cm Profundidad.</li>
                        <li><b>Materiales</b>:</li>
                        <li><b>Temperatura</b>:</li>
                    </ul>
                    </div>
                    <div class="div-detalles">
                        <p>$1.990.000</p>
                        <input class="radio-button" type="radio" name="Mantenedor-Exhibidor-Empanadas-Calientes-ME2400" value="1990000" style="margin: 0px;">
                        <button class="counter-button" onclick="updateCounter(29, 'decrement')">-</button>
                        <span class="counter-value" style="font-family: poppins;" poppins";"="">0</span>
                        <button class="counter-button" onclick="updateCounter(29, 'increment')">+</button>
                    </div>
                </div>   
            </div>     
            <div class="div-boton-agregar">
                <button class="boton-consulta" onclick="hacerConsulta(29)">Consultar</button>
                <button class="boton-agregar" onclick="agregarAlPedido(29)">Agregar al pedido</button>
            </div>
        </div>
        `;


        subMenuCinco.innerHTML = buttonsHTML;

        subMenuCincoVisible = true;
        subMenuCinco.style.display = "flex";
        subMenuCinco.offsetHeight;
        subMenuCinco.style.opacity = "1";
        subMenuCinco.style.transform = "translateY(0)";
        subMenuCinco.style.visibility = "visible";
        subMenuCinco.style.flexDirection = "column";
        subMenuCinco.style.rowGap = "10px";
        subMenuCinco.style.alignItems = "center"

        // Agrega la clase 'active' al botón1 cuando se despliega el submenú
        boton5.classList.add('active');
        subMenuCinco.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        event.preventDefault();
    } else {
        const subMenuCincoButtons = document.querySelectorAll('.menu-button');
        subMenuCincoButtons.forEach(button => {
            button.classList.remove('initial');
        });
        setTimeout(() => {
            subMenuCinco.innerHTML = '';
        }, subMenuCincoButtons.length * 100);

        subMenuCincoVisible = false;

        subMenuCinco.style.opacity = "0";
        subMenuCinco.style.transform = "translateY(-20px)";
        setTimeout(() => {
            subMenuCinco.style.visibility = "hidden";
            subMenuCinco.style.display = "none";
        }, 800);

        // Quita la clase 'active' al botón1 cuando se contrae el submenú
        boton5.classList.remove('active');
    }
}

function updateCounter(buttonNumber, action) {
    const counterValue = document.querySelector(`.div-botones-submenu[data-button-number="${buttonNumber}"] .counter-value`);
    const selectedInput = document.querySelector(`.div-botones-submenu[data-button-number="${buttonNumber}"] input:checked`);

    if (counterValue && selectedInput && selectedInput.value) {
        if (!counters[buttonNumber]) {
            counters[buttonNumber] = 0;
        }

        let itemPrice = parseFloat(selectedInput.value);

        switch (action) {
            case 'increment':
                counters[buttonNumber]++;
                total += itemPrice;
                break;
            case 'decrement':
                if (counters[buttonNumber] > 0) {
                    counters[buttonNumber]--;
                    total -= itemPrice;
                }
                break;
            default:
                break;
        }

        counterValue.textContent = counters[buttonNumber];
    }

}


function agregarAlPedido(buttonNumber) {
    const itemNameElement = document.querySelector(`.div-botones-submenu[data-button-number="${buttonNumber}"] .sub-menu-button`);
    const selectedInputElement = document.querySelector(`.div-botones-submenu[data-button-number="${buttonNumber}"] input:checked`);
    const ivaPercentage = parseFloat(selectedInputElement.getAttribute('data-iva'));

    if (!itemNameElement || !selectedInputElement) {
        console.error('No se encontraron elementos necesarios para agregar al pedido');
        return;
    }

    const itemName = itemNameElement.textContent;
    const itemPrice = parseFloat(selectedInputElement.value);
    const itemCount = parseInt(document.querySelector(`.div-botones-submenu[data-button-number="${buttonNumber}"] .counter-value`).textContent);

    // Calcular el IVA
    const ivaAmount = itemPrice * (ivaPercentage / 100);

    // Calcular el precio total con IVA
    const precioTotalProducto = itemPrice * itemCount + ivaAmount * itemCount;

    const pedido = {
        producto: {
            nombre: itemName,
            cantidad: itemCount,
            precio: itemPrice * itemCount,
            precioTotal: precioTotalProducto,
            iva: ivaPercentage // Agregar la propiedad iva
        }
    };

    productos.push(pedido);

    localStorage.setItem('pedido', JSON.stringify(productos));

    // Reiniciar el contador y el input
    const counterValue = document.querySelector(`.div-botones-submenu[data-button-number="${buttonNumber}"] .counter-value`);
    if (counterValue) {
        counterValue.textContent = 0;
    }

    // Deseleccionar el input
    selectedInputElement.checked = false;

    // Actualizar el total en la interfaz
    actualizarTotal();
    // Actualizar el total del pedido en localStorage
    actualizarTotalPedido();

    // Reiniciar el contador
    counters[buttonNumber] = 0;

    // Mostrar el botón de hacer pedido si hay productos
    if (productos.length > 0) {
        document.getElementById('hacerPedidoButton').style.display = 'block';
    }

    const btnTuPedido = document.getElementById("tuPedidoBtn");
    btnTuPedido.style.justifyContent = 'center'
    btnTuPedido.style.display = productos.length > 0 ? 'flex' : 'none';
}


function actualizarTotal() {
    // Obtener la lista de productos del localStorage
    const productosGuardados = JSON.parse(localStorage.getItem('pedido'));

    // Inicializar el total de productos
    let totalProductos = 0;

    if (productosGuardados && productosGuardados.length > 0) {
        // Sumar los precios totales de los productos en el pedido
        totalProductos = productosGuardados.reduce((total, producto) => {
            return total + producto.producto.precioTotal;
        }, 0);
    }

    // Sumar el total de productos con el total de extras
    const totalFinal = totalProductos;

    // Actualiza el total en el elemento HTML
    const totalElement = document.getElementById('total');
    if (totalElement) {
        totalElement.textContent = `$${totalFinal.toFixed(2)}`;
    }
}

function actualizarTotalPedido() {
    const productosGuardados = JSON.parse(localStorage.getItem('pedido'));

    let totalPedido = 0;

    if (productosGuardados && productosGuardados.length > 0) {
        totalPedido = productosGuardados.reduce((total, producto) => total + producto.producto.precioTotal, 0);
    }

    localStorage.setItem('totalPedido', totalPedido);
}

function toggleDropdown() {
    const tuPedidoBtn = document.getElementById('tuPedidoBtn');
    const pedidoDropdown = document.getElementById('pedidoDropdown');
    const flecha = document.getElementById('flecha')

    // Togglear la visibilidad del div al hacer clic en el botón "Tu Pedido"
    if (pedidoDropdown.style.display === 'none') {
        actualizarPedido(); // Actualizar la lista de productos en el pedido
        pedidoDropdown.style.display = 'flex';
        pedidoDropdown.style.transition = 'transform 1s, opacity 1s';
        pedidoDropdown.style.transform = 'translateY(0px)';
        pedidoDropdown.style.opacity = '1';
        flecha.classList.remove('flecha-abajo');
        flecha.classList.add('flecha-arriba');
    } else {
        pedidoDropdown.style.transition = 'transform 1s , opacity 1s';
        pedidoDropdown.style.transform = 'translateY(-50px)';
        pedidoDropdown.style.opacity = '0';
        flecha.classList.remove('flecha-arriba');
        flecha.classList.add('flecha-abajo');
        // Retrasar la ocultación para permitir que la transición tenga lugar
        setTimeout(() => {
            pedidoDropdown.style.display = 'none';
        }, 800);
    }
}


function actualizarPedido() {
    const pedidoDropdown = document.getElementById('pedidoDropdown');
    const tuPedidoBtn = document.getElementById('tuPedidoBtn');
    const btnHacerPedido = document.getElementById("hacerPedidoButton")

    pedidoDropdown.innerHTML = '';

    const productosGuardados = JSON.parse(localStorage.getItem('pedido'));

    if (productosGuardados && productosGuardados.length > 0) {
        let productoAnterior = null;

        productosGuardados.forEach((producto, index) => {
            const productoDiv = document.createElement('div');
            productoDiv.className = 'producto-pedido';

            productoDiv.innerHTML = `${producto.producto.nombre} Cantidad: ${producto.producto.cantidad} Precio Total: $${producto.producto.precioTotal}`;

            if (producto.producto.extras && producto.producto.extras.length > 0) {
                productoDiv.innerHTML += ' (E)';
            }

            const eliminarBtn = document.createElement('button');
            eliminarBtn.textContent = 'x';
            eliminarBtn.className = 'eliminar-producto';
            eliminarBtn.onclick = function () {
                eliminarDelPedido(index);
                actualizarPedido();
            };
            productoDiv.appendChild(eliminarBtn);

            pedidoDropdown.appendChild(productoDiv);

            productoAnterior = { producto };
        });

        pedidoDropdown.style.display = 'flex';
        tuPedidoBtn.style.display = 'flex';
    } else {
        pedidoDropdown.style.display = 'none';
        tuPedidoBtn.style.display = 'none';
        btnHacerPedido.style.display = "none"

    }
}

function eliminarDelPedido(index) {
    const btnHacerPedido = document.getElementById("hacerPedidoButton")
    const total = document.getElementById("total")

    productos.splice(index, 1);
    localStorage.setItem('pedido', JSON.stringify(productos));
    actualizarTotal(); // Actualizar el total en la interfaz
    actualizarTotalPedido(); // Actualizar el total del pedido en localStorage

    if (total.textContent == '$0.00') {
        btnHacerPedido.style.display = "none"
    }
}

function eliminarDelPedido(index) {
    const productoEliminado = productos[index];
    const precioProductoEliminado = productoEliminado.producto.precioTotal;

    productos.splice(index, 1); // Eliminar el producto del array de productos
    localStorage.setItem('pedido', JSON.stringify(productos)); // Actualizar el localStorage con la nueva lista de productos

    // Restar el precio del producto eliminado del total del pedido
    const totalProductos = preciosTotalesProductos.reduce((total, precio) => total + precio, 0);
    const totalPedidoActualizado = totalProductos - precioProductoEliminado;

    preciosTotalesProductos = productos.map(producto => producto.producto.precioTotal); // Actualizar los precios totales de los productos

    // Actualizar el totalPedido en cada objeto de producto
    productos.forEach(producto => {
        producto.totalPedido = totalPedidoActualizado;
    });

    actualizarTotal(); // Actualizar el total en la interfaz
    actualizarPedido(); // Actualizar el pedido mostrado en la interfaz
}

function enviarPedidoWhatsApp() {
    // Obtener la lista de productos del almacenamiento local
    const productosGuardados = JSON.parse(localStorage.getItem('pedido'));
    let totalPedido = JSON.parse(localStorage.getItem('totalPedido'));

    if (productosGuardados && productosGuardados.length > 0) {
        // Crear el mensaje para WhatsApp
        let mensajeWhatsApp = `¡Hola ThermoBox! Quiero realizar el siguiente pedido:\n\n`;

        // Recorrer cada producto en la lista de productos guardados
        productosGuardados.forEach((producto) => {
            const nombre = producto.producto.nombre;
            const cantidad = producto.producto.cantidad;
            const precio = producto.producto.precio;
            const ivaPercentage = producto.producto.iva; // Acceder a la propiedad iva

            const ivaAmount = precio * (ivaPercentage / 100);
            const precioTotalProducto = precio * cantidad + ivaAmount * cantidad;

            mensajeWhatsApp += `${nombre} - Cantidad: ${cantidad} - Precio: $${precio} - IVA: ${ivaPercentage}% - Precio con IVA: $${precio + ivaAmount}\n`;
            mensajeWhatsApp += `Precio Total del Producto: $${precioTotalProducto}\n\n`;
        });

        // Agregar el precio total del pedido obtenido del localStorage
        mensajeWhatsApp += `Total del pedido: $${totalPedido}\n\n Muchas Gracias!`;

        // Reemplazar 'NUMERO_DE_TELEFONO' con el número de WhatsApp al que deseas enviar el mensaje, asegurándote de quitar espacios o guiones
        const numeroWhatsApp = '541141436784';

        // Crear el enlace de WhatsApp utilizando 'https://wa.me/'
        const enlaceWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensajeWhatsApp)}`;

        // Redirigir a WhatsApp
        window.location.href = enlaceWhatsApp;

        // Imprimir en la consola para verificar el flujo
        console.log('Pedido enviado por WhatsApp.');
    } else {
        console.error('No se encontró información de pedido almacenada.');
    }
}


function hacerConsulta(buttonNumber) {
    const subMenuButtons = document.querySelectorAll('.sub-menu-button');
    const radioButtons = document.querySelectorAll('.radio-button');

    let productName = '';

    // Busca el nombre del producto basado en el número del botón
    subMenuButtons.forEach(button => {
        if (button.dataset.buttonNumber === buttonNumber.toString()) {
            productName = button.textContent.trim();
        }
    });

    // Si no se encontró el nombre del producto en los botones, buscar en los radio buttons
    if (productName === '') {
        radioButtons.forEach(radioButton => {
            if (radioButton.name.includes(buttonNumber.toString())) {
                productName = radioButton.name;
            }
        });
    }

    // Forma el mensaje para enviar a WhatsApp
    const message = `Hola Thermobox, quiero realizar una consulta sobre: ${productName}`;


    const whatsappMessage = encodeURIComponent(message);

    const numeroWhatsApp = '541141436784';

    window.location.href = `https://wa.me/${numeroWhatsApp}?text=${whatsappMessage}`;
}

function toggleDetalles(buttonNumber) {
    // Encuentra el elemento de detalles correspondiente al número de botón
    var detalles = document.querySelector('.detalles[data-button-number="' + buttonNumber + '"]');


    // Verifica si los detalles están visibles o no
    if (detalles.style.display === 'none' || detalles.style.display === '') {
        // Si están ocultos o no tienen un estilo de display, muéstralos con una transición suave
        detalles.style.display = 'flex';

        setTimeout(function () {
            detalles.style.opacity = '1';
            detalles.style.transform = 'translateY(0)';

        }, 10); // Añade un pequeño retraso para permitir que se aplique el cambio de display antes de la transición
    } else {
        // Si están visibles, ocúltalos con una transición suave
        detalles.style.opacity = '0';
        detalles.style.transform = 'translateY(-50px)';

        setTimeout(function () {
            detalles.style.display = 'none';
        }, 500); // Espera 500 milisegundos (0.5 segundos) antes de ocultarlos
    }
}

// Agrega un evento onclick a todos los elementos .producto-detalles
document.querySelectorAll('.producto-detalles').forEach(function (parrafo) {
    // Obtiene el número de botón asociado al parrafo
    var buttonNumber = parrafo.parentElement.nextElementSibling.getAttribute('data-button-number');

    // Agrega el evento onclick
    parrafo.onclick = function () {
        toggleDetalles(buttonNumber);
    };
});

function prevImage(carouselId) {
    const carouselImages = document.getElementById(`carousel-images-${carouselId}`);
    const totalImages = carouselImages.children.length;
    let currentIndex = carouselImages.dataset.currentIndex ? parseInt(carouselImages.dataset.currentIndex) : 0;

    currentIndex = (currentIndex - 1 + totalImages) % totalImages; // permite el bucle hacia atrás
    carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
    carouselImages.dataset.currentIndex = currentIndex;
}

function nextImage(carouselId) {
    const carouselImages = document.getElementById(`carousel-images-${carouselId}`);
    const totalImages = carouselImages.children.length;
    let currentIndex = carouselImages.dataset.currentIndex ? parseInt(carouselImages.dataset.currentIndex) : 0;

    currentIndex = (currentIndex + 1) % totalImages; // permite el bucle hacia adelante
    carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
    carouselImages.dataset.currentIndex = currentIndex;
}