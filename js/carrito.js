const botonCompra = document.querySelector("#boton_compra");
const divTotal = document.querySelector("#total-carrito");
const laminas = [];
const tablaLaminasCarrito = document.querySelector("#laminas_carrito");
const botonVaciarCarrito = document.querySelector("#boton_vaciar_carrito");

function retornoLaminaCarrito(lamina) {
                        return `<tr>
                            <th scope="row">
                            <img class="img_obras_carrito" src="${lamina.imagen}" alt="${lamina.alt}">
                            </th>

                            <td class="carrito-laminas-titulo">
                                <small class="negrita">Título</small>
                                <p>${lamina.nombre}</p>
                            </td>
                            <td class="carrito-lamina-tamano">
                                <small>Tamaño</small>
                                <p>${lamina.tamano}</p>
                            </td>
                            <td class="carrito-lamina-precio">
                                <small>Precio</small>
                                <p>$${lamina.precio}</p>
                            </td>

                            <td>
                                <button id="borrar-${lamina.id}" class="carrito-laminas-eliminar">
                                <i class="bi bi-trash-fill"></i>
                                </button>
                            </td>

                        </tr>`
}

const agregarEventos = () => {
    carritoLaminas.forEach(lamina => {
    const botonEliminar = document.getElementById("borrar-" + lamina.id)
    botonEliminar.addEventListener("click", () => {
        console.log("borrar", lamina)

            let indexLamina = carritoLaminas.findIndex(lamina => lamina.id === parseInt(lamina.id))
            carritoLaminas.splice(indexLamina, 1)
            guardarCarrito()
            cargarLaminas()
            actualizarContador()
    })
})
}

function cargarLaminas() {
    tablaLaminasCarrito.innerHTML = ""
    if (carritoLaminas.length >= 0){
        carritoLaminas.forEach((lamina) => { 
            tablaLaminasCarrito.innerHTML += retornoLaminaCarrito(lamina)})
            // clickBotonEliminar()
            divTotal.innerHTML = "$" + subtotal()
    }
    else{
        tablaLaminasCarrito.innerHTML = "¡Tu carrito está vacío! 😞"
        divTotal.innerHTML = "$" + "0"
    }
    agregarEventos()
}

cargarLaminas();

function cargarLaminasCarrito() {
laminas.forEach(lamina => laminasCarrito.innerHTML += retornoLaminaCarrito(lamina));
}            

function subtotal(){
    return carritoLaminas.reduce((acc, lamina) => acc + lamina.precio, 0)
}

subtotal();

function guardarCarrito() {
		localStorage.setItem("carritoLaminas", JSON.stringify(carritoLaminas));
}

function agregarAlCarrito(id) {
	let resultado = laminas.find((lamina) => lamina.id === parseInt(id));
	if (resultado !== undefined) {
		carritoLaminas.push(resultado);
		console.log("Se agregó la lámina", resultado.nombre, "al carrito.");
		guardarCarrito(carritoLaminas);
	}
    console.log(carritoLaminas);
    actualizarContador();
}

function clickBotonAgregar() {
	const buttons = document.querySelectorAll("button.carrito-laminas-eliminar")
	console.log(buttons);
	for (boton of buttons) {
		boton.addEventListener("click", (e) => {
			agregarAlCarrito(e.target.id) ;
		});
	}
}


botonCompra.addEventListener("click", ()=>{
    Swal.fire({
        title: `El total es de $ ${subtotal()}`,
        text: "¿Desea confirmar la compra?",
        showCancelButton: true,
        confirmButtonColor: 'rgba(250, 77, 189, 0.823)',
        cancelButtonColor: 'rgb(86, 85, 87)',
        confirmButtonText: 'SI'
        }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
            '¡Muchas gracias!',
            '¡Que disfrutes tus láminas!',
            'success'
            )
            }
        })
        })

const vaciarCarrito = () =>{
    carritoLaminas.splice (0, carritoLaminas.length)
    localStorage.setItem("carritoLaminas", JSON.stringify(carritoLaminas))
    actualizarContador()
}

botonVaciarCarrito.addEventListener("click", ()=>{
        vaciarCarrito()
        cargarLaminas()

        })








