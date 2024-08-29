const productos = [
  {
    id: "Camiseta-1",
    titulo: "Camiseta-01",
    imagen: "fotos/camiseta-01.jfif",
    categoria: {
      nombre: "Camisetas",
      id: "camisetas",
    },
    precio: 1000,
  },
  {
    id: "Camiseta-2",
    titulo: "Camiseta-2",
    imagen: "fotos/camiseta-2.jpeg",
    categoria: {
      nombre: "Camisetas",
      id: "camisetas",
    },
    precio: 1000,
  },
  {
    id: "Short-01",
    titulo: "Short-01",
    imagen: "fotos/short-01.jfif",
    categoria: {
      nombre: "short",
      id: "short",
    },
    precio: 3000,
  },
  {
    id: "Short-02",
    titulo: "Short-02",
    imagen: "fotos/short-02.jfif",
    categoria: {
      nombre: "short",
      id: "short",
    },
    precio: 3000,
  },
  {
    id: "campera-01",
    titulo: "campera-01",
    imagen: "fotos/campera-01.jfif",
    categoria: {
      nombre: "Campera",
      id: "Campera",
    },
    precio: 25000,
  },
  {
    id: "campera-01",
    titulo: "campera-01",
    imagen: "fotos/campera-02.jfif",
    categoria: {
      nombre: "Campera",
      id: "Campera",
    },
    precio: 25000,
  },
];

const contenedorProductos = document.querySelector("#contenedorProductos");
const botonesCategorias = document.querySelectorAll(".botonCategoria");
const tituloPrincipal = document.querySelector(".tituloPrincipal");

function mostrarProductos(productos) {
  contenedorProductos.innerHTML = "";
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
}
mostrarProductos(productos);
botonesCategorias.forEach((boton) => {
  boton.addEventListener("click", (e) => {
    botonesCategorias.forEach((boton) => boton.classList.remove("active"));
    e.currentTarget.classList.add("active");
    if (e.currentTarget.id != "todos") {
      const productoCategoria = productos.find(producto => producto.categoria.nombre === e.currentTarget.id);
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
