const readline = require("readline/promises");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let pedidos = [
    {
        producto: "Pizza",
        cantidad: 2,
        total: 240
    },
    {
        producto: "Hamburguesa",
        cantidad: 1,
        total: 80
    },
    {
        producto: "Refresco",
        cantidad: 2,
        total: 60
    }
];

function listarPedidos() {
    console.log("");
    console.log(" PEDIDOS ");
    if (pedidos.length == 0){
        console.log("no hay pedidos");
    }else {
        pedidos.forEach(function(pedido) {
            console.log(
                `${pedido.producto} x${pedido.cantidad} = $${pedido.total}`
            );
            console.log("")
        });
    }
}

function calcularSubtotal() {
    let subtotal = pedidos.reduce(function(total, pedido) {
        return total + pedido.total;
    }, 0);
    return subtotal;
}

function calcularIVA() {
    let subtotal = calcularSubtotal();
    let iva = subtotal * 0.16;
    return iva;
}

function calcularTotal() {
    let subtotal = calcularSubtotal();
    let iva = subtotal * 0.16;
    let total = subtotal + iva;
    return total;
}

function mostrarResumen() {
    console.log("");
    console.log("");
    console.log(" RESUMENe DE CAJA");
    console.log("");
    pedidos.forEach(function(pedido) {
        let {
            producto,
            cantidad,
            total
        } = pedido;
        console.log(
            `${producto} x${cantidad} = $${total}`
        );
    });

    let subtotal = calcularSubtotal();
    let iva = calcularIVA();
    let total = calcularTotal();

    console.log("");
    console.log(`Subtotal: $${subtotal.toFixed(2)}`);
    console.log(`IVA: $${iva.toFixed(2)}`);
    console.log(`Total: $${total.toFixed(2)}`);
    console.log("");
}
async function menu() {
    let opcion;
    do {
        console.log(`
            CAJA
1. Mostrar pedidos
2. Calcular subtotal
3. Calcular IVA
4. Calcular total
5. Mostrar resumen
6. Salir
`);

        opcion = await rl.question("Elige una opción: ");
        if (opcion == "1") {
            listarPedidos();
        }
        else if (opcion == "2") {
            console.log(
                "Subtotal: $",
                calcularSubtotal().toFixed(2)
            );
        }
        else if (opcion == "3") {
            console.log(
                "IVA: $",
                calcularIVA().toFixed(2)
            );
        }
        else if (opcion == "4") {
            console.log(
                "Total: $",
                calcularTotal().toFixed(2)
            );
        }
        else if (opcion == "5") {
            mostrarResumen();
        }
        else if (opcion == "6") {
            console.log("Saliendo del modulo Caja.");
        }
        else {
            console.log("Opción no válida.");
        }
    } while (opcion != "6");
    rl.close();
}
menu();