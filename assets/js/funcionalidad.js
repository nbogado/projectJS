const contenedorCardsIndex = document.getElementById('contenedorCardsIndex');


//Array de los talles que van a tener todos los productos:
const tallesProductos = ["s", "m", "l"];

// Array de los productos que va a tener el e-Commerce:
const productos = [
    {
        id: 1,
        nombre: "Remera Chicago",
        precio: 6999.00,
        colores: ["Negro", "Blanco", "Gris"],
        talles: tallesProductos,
        img: "assets/img/remera_chicago.jpg"
    },
    {
        id: 2,
        nombre: "Camisa Lisa",
        precio: 19999.00,
        colores: ["Negro", "Celeste", "Blanco"],
        talles: tallesProductos,
        img: "assets/img/camisa_lisa.jpg"
    },
    {
        id: 3,
        nombre: "Buzo Oversize",
        precio: 14999.00,
        colores: ["Negro", "Azul", "Naranja", "Verde"],
        talles: tallesProductos,
        img: "assets/img/buzo_oversize.jpg"
    },
    {
        id: 4,
        nombre: "Campera Puffer",
        precio: 20999.99,
        colores: ["Negro", "Marron"],
        talles: tallesProductos,
        img: "assets/img/campera_puffer.jpg"
    },
    {
        id: 5,
        nombre: "Short Jean Classic",
        precio: 20,
        colores: ["Unico Color"],
        talles: tallesProductos,
        img: "assets/img/short_jean.jpg"
    },
    {
        id: 6,
        nombre: "Blazer Budapest",
        precio: 39999.00,
        colores: ["Verde", "Naranja", "Rosa"],
        talles: tallesProductos,
        img: "assets/img/blazer_budapest.jpg"
    },
    {
        id: 7,
        nombre: "Remera New York",
        precio: 6999.00,
        colores: ["Negro", "Blanco"],
        talles: tallesProductos,
        img: "assets/img/remera_new_york.jpg"
    },
    {
        id: 8,
        nombre: "Pantalon Encaje",
        precio: 25999.00,
        colores: ["Verde", "Naranja", "Rosa"],
        talles: tallesProductos,
        img: "assets/img/pantalon_encaje.jpg"
    }
];

//Array que va a llenarse con los productos que vaya seleccionado el usuario y agregando al carrito con el push:
let productosDelCarrito = [];


let div


//For para recorrer array de productos y funcion para mostrarlo en el html:
productos.forEach((items) => {
    let productItem = document.createElement('div');
    productItem.className = "col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3";
    productItem.innerHTML = `
        <div class="product">
            <img src="${items.img}" alt="Sweater gris polera">
        </div>
        <p class="title pt-4 pb-1">${items.nombre}</p>
        <p class="price">$ ${items.precio}</p>
        <button class="btn btn-primary" type="submit">Comprar</button>
    `
    
    contenedorCardsIndex.append(productItem);

});