const form = document.querySelector('#subscribeForm');
const modalsito = document.querySelector('#subscriptionModal'); // Seleccionamos el modal por su ID

const cerrar=document.querySelector(".cerrartodo")
const yaaaa=document.querySelector(".container-fluid")

const modalgozu=document.querySelector(".modal")

const parrafo=document.querySelector("#botatuga")

const error=document.querySelector(".error_message")

const emailver=document.querySelector("#email")

form.addEventListener('submit', abrir);
function abrir(e) {
    e.preventDefault(); 
    let formdatita = new FormData(form);
    const correo = formdatita.get("email");
    let arraycorreo = correo.split("@");
    
    console.log(correo);
    
    if (correo.includes("@") && arraycorreo.length <= 2 && arraycorreo[1].includes(".")) {
        modales();
        agregaralmodal(correo)
        error.textContent=""
        emailver.classList.remove("input-invalid")
    }else{
        error.textContent="Valid Email Requerid"
        emailver.classList.add("input-invalid")
    }
    form.reset()
}

function modales() {
    const myModal = new bootstrap.Modal(modalsito); 
    myModal.show(); 
    yaaaa.classList.toggle("apartito")
    console.log(yaaaa)
}


cerrar.addEventListener('click', function() {
    yaaaa.classList.remove("apartito"); 
    const myModal = bootstrap.Modal.getInstance(modalsito); 
    myModal.hide(); 
});

function agregaralmodal(correo) {
    let modales=""
    modales=`A confirmation email has been sent to <strong>`+correo+`</strong>. Please open it and click the button inside to confirm your subscription.`
    parrafo.innerHTML=modales
}