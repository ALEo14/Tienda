let productos = [];
fetch("js/productos.json")
  .then(res => res.json())
  .then(data => {
    productos = data;
    mostrarProductos(productos);
    
  })

const contenedorProductos = document.querySelector("#contenedorProductos");
const botonesCategorias = document.querySelectorAll(".botonCategoria");
const tituloPrincipal = document.querySelector(".tituloPrincipal");
let botonesAgregar = document.querySelectorAll(".productoAgregar");
const numerito = document.querySelector(".numerito");


function mostrarProductos(productos) {
  contenedorProductos.innerHTML = " ";
  productos.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("producto");

    div.innerHTML = `<img class="imgProducto" src="${producto.imagen}" alt="${producto.titulo}" />
            <div class="productoDetalles">
                <h3 class="nombreProducto">${producto.titulo}</h3>
                <p class="precioProducto">${producto.precio}</p>
                <button class="productoAgregar" id="${producto.id}">Agregar</button>
            </div>

        `;
    contenedorProductos.append(div);
  });
  actualizarBotonesAgregar();
}

mostrarProductos(productos);

botonesCategorias.forEach((boton) => {
  boton.addEventListener("click", (e) => {
    botonesCategorias.forEach((boton) => boton.classList.remove("active"));
    e.currentTarget.classList.add("active");
    if (e.currentTarget.id != "todos") {
      const productoCategoria = productos.find(
        (producto) => producto.categoria.nombre === e.currentTarget.id
      );
      tituloPrincipal.innerHTML = e.currentTarget.id;
      const productosBoton = productos.filter(
        (producto) => producto.categoria.id === e.currentTarget.id
      );
      mostrarProductos(productosBoton);
    } else {
      tituloPrincipal.innerHTML = "Todos los productos";
      mostrarProductos(productos);
    }
  });
});

function actualizarBotonesAgregar() {
  botonesAgregar = document.querySelectorAll(".productoAgregar");
  botonesAgregar.forEach(boton => {
    boton.addEventListener('click', agregarAlCarrito);
    
  });
}


let productosEnCarrito ;
let productosCarritoLS = localStorage.getItem("productosCarrito");
if(productosCarritoLS){
  productosEnCarrito = JSON.parse( productosCarritoLS);
  actualizarNumerito();}
  else{

    productosEnCarrito = [];
  }

  function agregarAlCarrito(e) {
  const idBoton = e.currentTarget.id;
  const productoAgregado = productos.find((producto) => producto.id === idBoton);
  if (productosEnCarrito.some(producto => producto.id === idBoton) ) {
      const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
      productosEnCarrito[index].cantidad++;
  }else{
    productoAgregado.cantidad = 1;
    productosEnCarrito.push(productoAgregado);
  }
  actualizarNumerito();
  localStorage.setItem("productosEnCarrito", JSON.stringify(productosEnCarrito));
  
}

function actualizarNumerito() {
  let nuevoNumerito = productosEnCarrito.reduce((acc,producto) => acc + producto.cantidad, 0);
  numerito.innerHTML = nuevoNumerito;
}

