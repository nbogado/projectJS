//crear una funcion que valide si camisa, remera o campera estan inicializadas y sino inicializarlas (flag).Usar funcion que torne otra funcion(true/false).
// Puedo hacer un metodo de busqueda .map y luego un .reduce para calcular el precio total a pagar en el carrito. y tmb para el total de productos q tengo en el carrito sobre el array de productos y de los valores
// Array con los productos que tengo para comprar o objeto con array para pner las propiedades de cada prodcuto como color, talle y precio?
// El carrito tiene que ser un array vacio que se deberia llenar a medida que se agregan productos, y eliminar en caso q se eliminen, modificar en caso que hahya un modificacion de color o demas.

// Array de los productos que va a tener el e-Commerce
const productos = [
    {
        nombre: "remera",
        precio: 20,
        colores: ["negra", "azul"],
        talles: ["s", "m", "l"]
    },
    {
        nombre: "camisa",
        precio: 20,
        colores: ["negra", "azul"],
        talles: ["s", "m", "l"]
    },
    {
        nombre: "buzo",
        precio: 20,
        colores: ["negra", "azul"],
        talles: ["s", "m", "l"]
    },
    {
        nombre: "campera",
        precio: 20,
        colores: ["negra", "azul"],
        talles: ["s", "m", "l"]
    },
    {
        nombre: "short",
        precio: 20,
        colores: ["negra", "azul"],
        talles: ["s", "m", "l"]
    },
    {
        nombre: "saco",
        precio: 20,
        colores: ["negra", "azul"],
        talles: ["s", "m", "l"]
    },
];

//Array que va a llenarse con los productos que se vayan seleccionando y agregando al carrito con el push:
let carritoProducto = [];

let camisa = 0;
let remera = 0;
let campera = 0;
let confirmProduct;
const valueRemera = 10;
const valueCamisa = 50;
const valueCampera = 100;
let totalValue;

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
