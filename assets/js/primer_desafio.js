//crear una funcion que genere el total de producttos que tiene el carrito sin discriminar por tipo.
//crear una funcion que valide si camisa, remera o campera estan inicializadas y sino inicializarlas (flag).

let camisa = 0;
let remera = 0;
let campera = 0;
let confirmProduct;
const valueRemera = 10;
const valueCamisa = 50;
const valueCampera = 100;
let totalValue;

do {
    const product = (prompt('Por favor ingrese de a uno el producto que quiere comprar:\nRemera = $10\nCampera = $100\nCamisa  = $50')).toLowerCase();

    function totalCartValue(valorProducto) {
        if (totalValue == null) {
            totalValue = 0;
            totalValue += valorProducto;
        } else {
            totalValue += valorProducto;
        }
        return totalValue;
    }

    switch (product) {
        case "camisa":
            camisa++;
            totalCartValue(valueCamisa);
            break;
        case "remera":
            remera++;
            totalCartValue(valueRemera);
            break;
        case "campera":
            campera++;
            totalCartValue(valueCampera);
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
