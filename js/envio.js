const inputs = document.querySelectorAll("input"),
    message = document.querySelector("#message");

const userName = inputs[0],
    apellido = inputs[1],
    phone = inputs[2],
    email = inputs[3],
    ciudad = inputs[4],
    nomCalle = inputs [5],
    numCalle = inputs [6],
    check = inputs[7],
    btnSend = inputs[8];

    //funcion para tocar el boton
btnSend.addEventListener("click", () => {
    if (check.checked) {
        guardarEnStorage("localStorage");
    } else {
        guardarEnStorage("sessionStorage");
    }
});

function guardarEnStorage(storage) {
    let user = {
        usuario: userName.value,
        phone: phone.value,
        email: email.value,
        ciudad : ciudad.value,
        nomCalle : nomCalle.value,
        numCalle : numCalle.value,
    };
    if (user.usuario == "" || user.phone == "" || user.email == "" || user.ciudad == "" || user.nomCalle == "" || user.numCalle =="") {
        message.style.color="red";
        message.innerHTML = "Los campos con * no pueden estar vacios";
    } else {
        if (storage == "localStorage") {
            localStorage.setItem("user", JSON.stringify(user));
            message.style.color="green";
            message.innerHTML="Datos guardados y enviados correctamente";
            Swal.fire("Compra realizada!");
            setTimeout(()=>{
                window.location.href = "../index.html";
            },1500);
        } else if (storage == "sessionStorage") {
            sessionStorage.setItem("user", JSON.stringify(user));
            message.style.color="green";
            message.innerHTML="Datos enviados correctamente";
            Swal.fire("Compra realizada!");
            setTimeout(()=>{
                window.location.href = "../index.html";
            },1500);
        }
    }
}
