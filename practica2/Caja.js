function
calcularSubtotal(pedidos){

    let subtotal = pedidos.reduce(function(total, pedido){
        return total + pedido.total;
    },0);
    return subtotal;
}

function calcularIVA(subtotal){

    let iva = subtotal * 0.16;
    return iva;
}

function mostrarResumen(pedidos){

    if (pedidos.length == 0){
        console.log("\nNo hay pedidos");
        return;
    }
}