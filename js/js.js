const enviar = document.querySelector(".btn");
const modal = document.querySelector(".modal");
const closeconsulta = document.querySelector(".modal__close");

enviar.addEventListener("click", () => {
    event.preventDefault();
    modal.classList.add("modal--show");
})

closeconsulta.addEventListener("click", () => {
    event.preventDefault();
    modal.classList.remove("modal--show");
})

function confirmarSuscripcion() {
    var correo = document.getElementById('correo').value;

    if (correo.trim() === '') {
        alert('Por favor, ingresa tu dirección de correo electrónico.');
        return;
    }

    var respuesta = confirm("¿Estás seguro de que quieres suscribirte?");
    if (respuesta) {
        alert("Te has suscrito correctamente.\nCorreo electrónico: " + correo);
        
    } else {
        alert("Has cancelado la suscripción.");
    }
}