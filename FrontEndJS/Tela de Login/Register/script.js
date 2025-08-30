function registrarInformacoes() {
 
    const nome = document.getElementById("nome").value.trim();
    const endereco = document.getElementById("endereco").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!nome || !endereco || !telefone || !email) {
        mostrarAlerta("Por favor, preencha todos os campos obrigatórios.");
        return;
    }

    const tabela = document.getElementById("tabelaInformacoes");
    const novaLinha = tabela.insertRow(-1);

    const colunaNome = novaLinha.insertCell(0);
    const colunaEndereco = novaLinha.insertCell(1);
    const colunaTelefone = novaLinha.insertCell(2);
    const colunaEmail = novaLinha.insertCell(3);

   
    colunaNome.textContent = nome;
    colunaEndereco.textContent = endereco;
    colunaTelefone.textContent = telefone;
    colunaEmail.textContent = email;

 
    document.getElementById("RegistrarForms").reset();
}

function mostrarAlerta(mensagem) {
    document.getElementById("mensagemAlerta").textContent = mensagem;
    document.getElementById("alertaCustom").style.display = "block";
}

function fecharAlerta() {
    document.getElementById("alertaCustom").style.display = "none";
}
