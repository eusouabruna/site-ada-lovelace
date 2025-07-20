document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario () {
    // Criação das variáveis para armazenar os valores dos campos
    var nome = document.getElementById("nome").value
    var email = document.getElementById("email").value
    var telefone = document.getElementById("telefone").value

    // Verificação se todos os campos foram preenchidos
    if(nome != "" && email != "" && telefone != ""){
        alert("Prontinho! Você receberá as novidades por email.")
    }else{
        alert("Por favor, preencha os campos nome, email e telefone!")
    }
}