const contador = document.querySelector(".numero_carrito");
const URL = "../js/laminas.json";
const carritoLaminas = JSON.parse(localStorage.getItem("carritoLaminas")) || []
// const carritoLaminas = recuperarCarrito() || []

function guardarCarrito(carrito) {
if (carrito.length >= 0) {
localStorage.setItem("carritoLaminas", JSON.stringitfy(carrito));
}
}

function subtotal(){
    const total = carrito.reduce((acc, lamina) => acc + lamina.precio, 0).toFixed(2)
    // confirm(`El total es de $ ${total}`) PONERLO EN SWEET ALERT
}

const actualizarContador = () => {
	contador.innerHTML = carritoLaminas.length;
}

actualizarContador();


