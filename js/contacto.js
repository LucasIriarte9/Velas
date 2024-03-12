const inputs = document.querySelectorAll("input"),
    message = document.querySelector("#message");

const userName = inputs[0],
    phone = inputs[1],
    email = inputs[2],
    check = inputs[3],
    btnSend = inputs[4];


//funcion para tocar el boton
btnSend.addEventListener("click", () => {
    if (check.checked) {
        guardarEnStorage("localStorage");
    } else {
        guardarEnStorage("sessionStorage");
    }
})

function guardarEnStorage(storage) {
    let user = {
        usuario: userName.value,
        phone: phone.value,
        email: email.value,
    };
    if (user.usuario == "" || user.phone == "" || user.email == "") {
        message.style.color="red";
        message.innerHTML = "Los campos con * no pueden estar vacios";
    } else {
        if (storage == "localStorage") {
            localStorage.setItem("user", JSON.stringify(user));
            message.style.color="green";
            message.innerHTML="Datos guardados y enviados correctamente";
        } else if (storage == "sessionStorage") {
            sessionStorage.setItem("user", JSON.stringify(user));
            message.style.color="green";
            message.innerHTML="Datos enviados correctamente";
        }
    }
}


