const pesquisar = document.getElementById("pesquisar");
const cep = document.getElementById("cep");
const limpar = document.getElementById("limpar");

const localidade = document.getElementById("localidade");
const logradouro = document.getElementById("logradouro");
const bairro = document.getElementById("bairro");

async function pesquisarCep() {
    const cep_valor = cep.value;
    if (cepInvalido(cep_valor)) {
        const viacep_url = `https://viacep.com.br/ws/${cep_valor}/json/`;
        const cep_dados = await fetch(viacep_url);
        const cep_json = await cep_dados.json();
        console.log(cep_json);
        inserirDados(cep_json);
        redirencionarGit()
    }
}

function limparDados() {
    document.getElementById("cep").value = "";
    localidade.innerHTML = "";
    logradouro.innerHTML = "";
    bairro.innerHTML = "";
}

async function inserirDados(cep_json) {
    localidade.innerHTML = "Localidade: " + cep_json.localidade;
    logradouro.innerHTML = "Rua: " + cep_json.logradouro;
    bairro.innerHTML = "Bairro: " + cep_json.bairro;

}

function redirencionarGit() {
    let valor = confirm("Gostaria de Acessar o GitHUb do desenvolvedor?")
    if (valor) {
        window.location = "https://github.com/wesley180320?tab=repositories"
    }
}

function cepInvalido(cep) {
    if (cep.length == 8) {
        return true
    } else {
        confirm("Cep Invalido")
        document.getElementById("cep").value = "";
    }
}

pesquisar.addEventListener("click", pesquisarCep);
limpar.addEventListener("click", limparDados);