//Array de los talles que van a tener todos los productos:
const tallesProductos = ["s", "m", "l"];

// Array de los productos que va a tener el e-Commerce:
const productos = [
    {
        id: 1,
        nombre: "Remera Rise UP",
        precio: 6999.00,
        colores: ["Negro", "Blanco", "Gris"],
        talles: tallesProductos
    },
    {
        id: 2,
        nombre: "Camisa Lisa",
        precio: 19999.00,
        colores: ["Negro", "Celeste", "Blanco"],
        talles: tallesProductos
    },
    {
        id: 3,
        nombre: "Buzo Oversize",
        precio: 14999.00,
        colores: ["Negro", "Azul", "Naranja", "Verde"],
        talles: tallesProductos
    },
    {
        id: 4,
        nombre: "Campera Puffer",
        precio: 20999.99,
        colores: ["Negro", "Marron"],
        talles: tallesProductos
    },
    {
        id: 5,
        nombre: "Short Jean Classic",
        precio: 20,
        colores: ["Unico Color"],
        talles: talles
    },
    {
        id: 6,
        nombre: "Blazer Budapest",
        precio: 39999.00,
        colores: ["Verde", "Naranja", "Rosa"],
        talles: tallesProductos
    },
    {
        id: 7,
        nombre: "Remera New York",
        precio: 6999.00,
        colores: ["Negro", "Blanco"],
        talles: tallesProductos
    },
    {
        id: 8,
        nombre: "Pantalon Budapest",
        precio: 25999.00,
        colores: ["Verde", "Naranja", "Rosa"],
        talles: tallesProductos
    }
];

//Array que va a llenarse con los productos que vaya seleccionado el usuario y agregando al carrito con el push:
let carritoProducto = [];


//IMPORTANTE: MODIFICAR ESTO PARA VALIDAR Y VER DE INICIALIZARLO CUANDO CORRESPONDA:
let camisa = 0;
let remera = 0;
let campera = 0;


let confirmProduct;
let totalValue;

//IMPORTANTE: Esto deberia cambiarse y usar el precio que esta en el array de productos:
const valueRemera = 10; 
const valueCamisa = 50;
const valueCampera = 100;


do {
    const solicitarProduct = (prompt('Por favor ingrese de a uno el producto que quiere comprar:\nRemera = $10\nCampera = $100\nCamisa  = $50')).toLowerCase();

    function totalCartValue(valorProducto) {
        if (totalValue == null) {
            totalValue = 0;
            totalValue += valorProducto;
        } else {
            totalValue += valorProducto;
        }
        return totalValue;
    }

    switch (solicitarProduct) {
        case "camisa":
            camisa++;
            totalCartValue(valueCamisa);
            carritoProducto.push("camisa")
            break;
        case "remera":
            remera++;
            totalCartValue(valueRemera);
            carritoProducto.push("remera")
            break;
        case "campera":
            campera++;
            totalCartValue(valueCampera);
            carritoProducto.push("campera")
            break;
        default:
            alert('No vendemos el producto que ingresaste, solo puede elegir entre remera, campera o camisa');
            break;
    }
    confirmProduct = (prompt('¿Desea seguir agregando productos? Responda con "si" si desea agregar mas, de lo contraro ingrese "no"')).toLowerCase();
} while (confirmProduct != "no");

function messageFormation() {
    let message = 'Resumen de compra\n';
    if (camisa > 0) {
        message += 'Camisas: ' + camisa + '\n';
    }
    if (remera > 0) {
        message += 'Remeras: ' + remera + '\n';
    }
    if (campera > 0) {
        message += 'Camperas: ' + campera + '\n';
    }

    message += 'Total a pagar: ' + totalValue;

    return message;
}

alert(messageFormation());
//solo con fines de la entrega llamo en alert el array carrito para ver que esta guardando los productos que el usuario ingresa:
alert(carritoProducto);


