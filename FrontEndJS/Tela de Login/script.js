function fazerlogin() {
    const usuario = document.getElementById("input-usuario").value.trim()
    const senha = document.getElementById("input-senha").value.trim()

    if (!usuario || !senha)
        mostrarAlerta("Por favor, preencha todos os campos obrigatórios.")
        return;
     
}

function mostrarAlerta(mensagem){
    document.getElementById("mensagemAlerta").textContent = mensagem ;
    document.getElementById("Alerta").style.display = "block" ;
}

function fecharAlerta() {
    document.getElementById("Alerta").style.display = "none";
}

