let pedidos = []; //arreglo vacio se guardaran todos los pedidos
let totalAcumulado = 0; //contara cada pedido agregado

// funcion para agregar un nuevo pedido
function agregarPedido(producto, cantidad, precio){

    let total = cantidad * precio; //se calcula el total de los pedidos

    let pedido = { //objeto con los datos
                  producto: producto, 
                  cantidad: cantidad, 
                  total: total};

    pedidos.push(pedido); // se agrega el pedido
    totalAcumulado += total; // suma del pedido al Acumulado

    console.log("Pedido agregado");
}

function mostrarPedidos() { //funcion para mostrar todos los pedidos registardos

    console.log("LISTA DE PEDIDOS");

    if (pedidos.length == 0){
        console.log("No hay pedidos");
    }else {

        pedidos.forEach(function(pedido){ // recorre cada pedido y lo imprime en la consola
            console.log(pedido.producto + pedido.cantidad + "= $" + pedido.total); // Muestra producto, cantidad y total

        });
    }

    console.log("Total acumulado: $ " + totalAcumulado); // Muestra el total acumulado de todos los pedidos
}