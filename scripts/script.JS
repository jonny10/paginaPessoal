window.location = "#TextoExplicativo-1";

const checkForm = {
    emailAlert: false,
    nomeAlert: false,
    numeroAlert: false,
    mensagemAlert: false,
}

document.getElementById('floatingInput').addEventListener('input', function (e) {
    const emailAlert = e.target.value;
    if (emailAlert.length < 1) {
        document.getElementById('emailAlert').style.display = "block";
        checkForm.emailAlert = false;
    } else {
        document.getElementById('emailAlert').style.display = "none";
        checkForm.emailAlert = true;
    }
    enableButton();
});

document.getElementById('floatingName').addEventListener('input', function (e) {
    const nomeAlert = e.target.value;
    if (nomeAlert.length > 50 || nomeAlert.length < 1) {
        document.getElementById('nomeAlert').style.display = "block";
        checkForm.nomeAlert = false;
    } else {
        document.getElementById('nomeAlert').style.display = "none";
        checkForm.nomeAlert = true;
    }
    enableButton();
});

document.getElementById('floatingNumero').addEventListener('input', function (e) {
    const numeroAlert = e.target.value;
    if (isNaN(numeroAlert) || numeroAlert.length != 11) {
        document.getElementById('numeroAlert').style.display = 'block';
        checkForm.numeroAlert = false;

    } else {
        document.getElementById('numeroAlert').style.display = 'none';
        checkForm.numeroAlert = true;

    }
    enableButton();
});

document.getElementById('floatingTextarea2').addEventListener('input', function (e) {
    const mensagemAlert = e.target.value;
    if (mensagemAlert.length > 255 || mensagemAlert.length < 1) {
        document.getElementById('mensagemAlert').style.display = "block";
        checkForm.mensagemAlert = false;
    } else {
        document.getElementById('mensagemAlert').style.display = "none";
        checkForm.mensagemAlert = true;
    }
    enableButton();
});


function enableButton() {
    const buttonEnviar = document.getElementById("buttonEnviar");
    if (checkForm.emailAlert &&
        checkForm.nomeAlert &&
        checkForm.numeroAlert &&
        checkForm.mensagemAlert) {
            buttonEnviar.disabled = false;
    } else {
        buttonEnviar.disabled = true;
    }
}