document.addEventListener("DOMContentLoaded", function() {
    // Inicializa o Parse
    Parse.initialize("Dt5qsyIvBF3KLozPDHVAnhdjxS8CBIIW6BI6chcM", "OjADQ3UETevvC09vTTCYX2MqKM7Wx6gwLW4JLMuE");
    Parse.serverURL = "https://parseapi.back4app.com/";

    document.getElementById("btn-cadastrar").addEventListener("click", async function() {
        console.log("Botão 'Cadastrar' foi clicado");

        // Obtenha os valores dos campos de entrada
        const nome = document.getElementById("input-nome").value;
        const email = document.getElementById("input-email").value;
        const senha = document.getElementById("input-password").value;

        // Log para verificar os valores capturados
        console.log("Nome:", nome);
        console.log("Email:", email);
        console.log("Senha:", senha);

        // Cria um novo objeto Parse para a classe Usuario
        const Usuario = Parse.Object.extend("Usuario");
        const usuario = new Usuario();

        // Define os valores do objeto
        usuario.set("nome", nome);
        usuario.set("email", email);
        usuario.set("senha", senha);

        try {
            // Salva o objeto no Back4App
            await usuario.save();
            alert("Usuário cadastrado com sucesso!");
            console.log("Usuário cadastrado com sucesso!");
        } catch (error) {
            console.error("Erro ao cadastrar usuário:", error);
            alert("Ocorreu um erro ao cadastrar o usuário. Tente novamente.");
        }
    });
});
