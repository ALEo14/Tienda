let productosEnCarrito = localStorage.getItem("productosEnCarrito");
productosEnCarrito = JSON.parse(productosEnCarrito);
const contenedorCarritoVacio = document.querySelector("#carritoVacio");
const contenedorCarritoProductos = document.querySelector("#carritoProductos");
const contenedorCarritoAcciones = document.querySelector("#carritoAcciones");
const contenedorCarritoComprado = document.querySelector("#carritoComprado");
let botonVaciar = document.querySelector("#carritoAccionesVaciar");



function cargarCarrito() {

if (productosEnCarrito && productosEnCarrito.length > 0) {
     

    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoProductos.classList.remove("disabled");
    contenedorCarritoAcciones.classList.remove("disabled");
    contenedorCarritoComprado.classList.add("disabled");

    contenedorCarritoProductos.innerHTML = "";

    productosEnCarrito.forEach(producto => {
        
        const div = document.createElement("div");
        div.classList.add("carritoProducto");
        div.innerHTML = `<img class="carritoProductoImagen" src="${producto.imagen}" alt="" />
              <div class="carrutorProductoTitulo">
                <small>Titulo</small>
                <h3>${producto.titulo}</h3>
              </div>
              <div class="carritoProductoCantidad">
                <small>Cantidad</small>
                <p>${producto.cantidad}</p>
              </div>
              <div class="carritoProductoPrecio">
                <small>Precio</small>
                <p>${producto.precio}</p>
              </div>
              <div class="carritoProductoSubtotal">
                <small>Subtotal</small>
                <p>${producto.precio * producto.cantidad}</p>
              </div>
              <button class="carritoProductoEliminar" id="${producto.id}">
                <i class="bi bi-trash"></i>
              </button>`;
        contenedorCarritoProductos.append(div);
    })
}else{
    contenedorCarritoVacio.classList.remove("disabled");
    contenedorCarritoProductos.classList.add("disabled");
    contenedorCarritoAcciones.classList.add("disabled");
    contenedorCarritoComprado.classList.add("disabled");
}

actualizarBotonesEliminar();
}

cargarCarrito();

function actualizarBotonesEliminar() {
    botonVaciar = document.querySelectorAll(".carritoProductoEliminar");
    botonVaciar.forEach(boton => {
      boton.addEventListener('click', eliminarDelCarrito);
      
    });
  }
  
  function eliminarDelCarrito(e) {
    const idBoton = e.currentTarget.id;
    
    // Buscar el índice del producto a eliminar
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
    
    // Verificar si el producto existe en el carrito
    if (index !== -1) {
        productosEnCarrito.splice(index, 1);  // Eliminar el producto del array
        cargarCarrito();  // Volver a cargar el carrito para reflejar los cambios
        localStorage.setItem("productosEnCarrito", JSON.stringify(productosEnCarrito));  // Actualizar LocalStorage
        // actualizarNumerito();  // Actualizar el contador del carrito
    }
}
// botonVaciar.addEventListener('click', vaciarCarrito);
function  vaciarCarrito() { 
    productosEnCarrito.length=0;
    localStorage.setItem("productosEnCarrito", JSON.stringify(productosEnCarrito));
    cargarCarrito();
    // actualizarNumerito();

}