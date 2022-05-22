const pesquisar = document.getElementById("pesquisar");
const cep = document.getElementById("cep");
const limpar = document.getElementById("limpar");

const localidade = document.getElementById("localidade");
const logradouro = document.getElementById("logradouro");
const bairro = document.getElementById("bairro");

async function pesquisarCep() {
    const cep_valor = cep.value;

    if (cep_valor.length == 8) {
        const viacep_url = `https://viacep.com.br/ws/${cep_valor}/json/`;
        const cep_dados = await fetch(viacep_url);
        const cep_json = await cep_dados.json();

        console.log(cep_json);

        inserirDados(cep_json);
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

pesquisar.addEventListener("click", pesquisarCep);
limpar.addEventListener("click", limparDados);