let pedidos = [];
let totalAcumulado = 0;

function agregarPedido(producto, cantidad, precio){

    let total = cantidad * precio;

    let pedido = {producto: producto, cantidad: cantidad, total: total};

    pedidos.push(pedido);
    totalAcumulado += total;

    console.log("Pedido agregado");
}

function mostrarPedidos() {

    console.log("LISTA DE PEDIDOS");

    if (pedidos.length == 0){
        console.log("No hay pedidos");
    }else {

        pedidos.forEach(function(pedido){
            console.log(pedido.producto + pedido.cantidad + "= $" + pedido.total);

        });
    }

    console.log("Total acumulado: $ " + totalAcumulado);
}