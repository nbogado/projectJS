const contenedorCardsIndex = document.getElementById('contenedorCardsIndex');
let productosDelCarrito = []; //Array que va a llenarse con los productos que vaya seleccionado el usuario y agregando al carrito con el push
const botonCarrito = document.getElementById('botonCarrito');
const contenedorCardsMiCarrito = document.getElementById('contenedorCardsMiCarrito');


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
    `
    contenedorCardsIndex.append(productItem);

    let btnComprar = document.createElement("button");
    btnComprar.innerText = "Comprar";
    btnComprar.className = "btn btn-primary";
    btnComprar.id = "btnComprar";
    productItem.append(btnComprar);
    
    btnComprar.addEventListener("click", () => {
        productosDelCarrito.push({
            id: items.id,
            nombre: items.nombre,
            precio: items.precio,
            img: items.img,
        });
        console.log(productosDelCarrito);


    });
});

botonCarrito.addEventListener("click", () => {
    contenedorCardsMiCarrito.innerHTML = "";
    contenedorCardsMiCarrito.style.display = "flex";
    const modalCabeceraCarrito = document.createElement("div");
    modalCabeceraCarrito.className = "modalCabeceraCarrito";
    modalCabeceraCarrito.innerHTML = `
    <p class="modal-Cabecera-Carrito">Mi Carrito</p>
    `;
    contenedorCardsMiCarrito.append(modalCabeceraCarrito);

    const modalBotonCierre = document.createElement("button");
    modalBotonCierre.innerText = "X";
    modalBotonCierre.className = "modal-Boton-Cierre.cabecera";

    modalCabeceraCarrito.append(modalBotonCierre);

    modalBotonCierre.addEventListener("click", () => {
        contenedorCardsMiCarrito.style.display = "none";
    });



    
    productosDelCarrito.forEach((items) => {
        let contenedorCarrito = document.createElement('div');
        contenedorCarrito.className = "contenedor-carrito";
        contenedorCarrito.innerHTML = `
        <img src="${items.img}">
        <p>${items.nombre}</p>
        <p>$ ${items.precio}</p>
        `
        contenedorCardsMiCarrito.append(contenedorCarrito);
    });

    let total = productosDelCarrito.reduce((acc, el) => acc + el.precio, 0);

    const contenedorPrecioTotalModal = document.createElement("div");
    contenedorPrecioTotalModal.className = "contenedorPrecioTotalModal";
    contenedorPrecioTotalModal.innerHTML = `Total:$ ${total}`;

    contenedorCardsMiCarrito.append(contenedorPrecioTotalModal);
});


