document.addEventListener("DOMContentLoaded", function() {
    // Inicializa o Parse
    Parse.initialize("Dt5qsyIvBF3KLozPDHVAnhdjxS8CBIIW6BI6chcM", "OjADQ3UETevvC09vTTCYX2MqKM7Wx6gwLW4JLMuE");
    Parse.serverURL = "https://parseapi.back4app.com/";

    document.getElementById("btn-login").addEventListener("click", async function() {
        console.log("Botão 'Cadastrar' foi clicado");

        // Obtenha os valores dos campos de entrada
        const email = document.getElementById('input-email').value;
        const senha = document.getElementById('input-password').value;
        const trabalho = document.getElementById('input-trabalho').value;
        const orcamento = document.getElementById('input-orcamento').value.replace("R$ ", "").replace(",", ".");
        const formacao = document.getElementById('input-formação').value;
        const descricao = document.querySelector('textarea[name="message"]').value;

        // Log para verificar os valores capturados
        console.log("Email:", email);
        console.log("Senha:", senha);
        console.log("Profissão:", trabalho);
        console.log("Orçamento:", orcamento);
        console.log("Formação:", formacao);
        console.log("Descrição:", descricao);

        // Cria um novo objeto Parse para a classe Trabalhador
        const Trabalhador = Parse.Object.extend("Trabalhador");
        const trabalhador = new Trabalhador();

        // Define os valores do objeto
        trabalhador.set("email", email);
        trabalhador.set("senha", senha);
        trabalhador.set("profissao", trabalho);
        trabalhador.set("orcamentoMedio", parseFloat(orcamento));
        trabalhador.set("formacao", formacao);
        trabalhador.set("descricao", descricao);

        try {
            // Salva o objeto no Back4App
            await trabalhador.save();
            alert("Trabalhador cadastrado com sucesso!");
            console.log("Trabalhador cadastrado com sucesso!");
        } catch (error) {
            console.error("Erro ao cadastrar trabalhador:", error);
            alert("Ocorreu um erro ao cadastrar o trabalhador. Tente novamente.");
        }
    });
});


function formatCurrency() {
    let value = this.value.replace(/[^\d,]/g, '').replace(',', '.');
    let num = parseFloat(value); 

    if (!isNaN(num)) {
        this.value = `R$ ${num.toFixed(2).replace('.', ',')}`;
    } else {
        this.value = "R$ 0,00";
    }
}
