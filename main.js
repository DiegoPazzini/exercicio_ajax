// document.addEventListener("DOMContentLoaded", function(){
//     document.getElementById("btn-buscar-cep").addEventListener("click", function(){
//         const xhttp = new XMLHttpRequest()
//         const cep = document.getElementById("cep").value
//         const endpoint = `https://viacep.com.br/ws/${cep}/json`

//         xhttp.open("GET", endpoint)
//         xhttp.send()
//     })
// })

$(document).ready(function(){
    $("#cep").mask("00000-000")
    
    $("#btn-buscar-cep").click(function(){
        const cep = $("#cep").val()
        const endpoint = `https://viacep.com.br/ws/${cep}/json`
        const botao = $(this)
        $(botao).find("i").addClass("d-none")
        $(botao).find("span").removeClass("d-none")

        // $.ajax(endpoint).done(function (resposta) {
        //     const logradouro = resposta.logradouro
        //     const bairro = resposta.bairro
        //     const cidade = resposta.localidade
        //     const estado = resposta.uf
        //     const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`
        //     $("#endereco").val(endereco)

        //     setTimeout(() => {
        //         $(botao).find("i").removeClass("d-none")
        //         $(botao).find("span").addClass("d-none")
        //     }, 4000);
        // })

        fetch(endpoint) //chama o ajax sem a necessidade do Jquery
        .then(function (resposta) {
            return resposta.json()
        })
        .then(function (json) {
            const logradouro = json.logradouro
            const bairro = json.bairro
            const cidade = json.localidade
            const estado = json.uf
            const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`
            $("#endereco").val(endereco)
        })
        .catch(function(erro){
            alert("Ocorreu um erro ao buscar o endereço, tente novamente ou mais tarde.")
        })
        .finally(function(){  // trata o error (código bloqueante) e segue em diante independente do que aconteça
            setTimeout(() => {
                $(botao).find("i").removeClass("d-none")
                $(botao).find("span").addClass("d-none")
            }, 1000);
        })
    })

    $("#formulario-pedido").submit(function(evento) {  //function callback
        evento.preventDefault() // previne o comportamento padrão do formulário que é de carregar a página

        if ($("#nome").val().length == 0) {  //val retorna como uma string e length conta quantidade de caracteres
            throw new Error("Digite o nome")
        }
    })
})
