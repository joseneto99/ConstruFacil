document.addEventListener("DOMContentLoaded", function() {
    console.log("Script carregado e DOM totalmente carregado");

    // Inicializa o Parse
    Parse.initialize("Dt5qsyIvBF3KLozPDHVAnhdjxS8CBIIW6BI6chcM", "OjADQ3UETevvC09vTTCYX2MqKM7Wx6gwLW4JLMuE");
    Parse.serverURL = "https://parseapi.back4app.com/";

    const voltarBtn = document.getElementById("btn-voltar");
    if (voltarBtn) {
        voltarBtn.addEventListener("click", function() {
            window.location.href = "principal.html";
        });
    } else {
        console.error("Botão de voltar não encontrado");
    }

    const profissionalBtn = document.getElementById("btn-profissional");
    if (profissionalBtn) {
        profissionalBtn.addEventListener("click", function() {
            window.location.href = "loginPro.html";
        });
    } else {
        console.error("Botão de voltar não encontrado");
    }

    // Cadastro de usuário
    const cadastrarBtn = document.getElementById("btn-cadastrar");
    if (cadastrarBtn) {
        cadastrarBtn.addEventListener("click", async function() {
            const nome = document.getElementById("signup-nome").value;
            const email = document.getElementById("signup-email").value;
            const senha = document.getElementById("signup-password").value;

            console.log("Tentando cadastrar usuário:", nome, email);

            const usuario = new Parse.User();
            usuario.set("username", email);
            usuario.set("password", senha);
            usuario.set("email", email);
            usuario.set("nome", nome);

            try {
                await usuario.signUp();
                alert("Usuário cadastrado com sucesso!");
                console.log("Usuário cadastrado com sucesso!");
                // Redirecionar para a página de login ou outra página apropriada
            } catch (error) {
                console.error("Erro ao cadastrar usuário:", error);
                alert("Erro ao cadastrar usuário: " + error.message);
            }
        });
    } else {
        console.error("Botão de cadastro não encontrado");
    }

    // Login de usuário
    const loginBtn = document.getElementById("btn-login");
    if (loginBtn) {
        loginBtn.addEventListener("click", async function() {
            const email = document.getElementById("login-email").value;
            const senha = document.getElementById("login-password").value;

            console.log("Tentando login com:", email);

            try {
                await Parse.User.logIn(email, senha);
                alert("Login realizado com sucesso!");
                console.log("Login realizado com sucesso!");
                window.location.href = "index.html";
            } catch (error) {
                console.error("Erro ao fazer login:", error);
                alert("Erro ao fazer login: " + error.message);
            }
        });
    } else {
        console.error("Botão de login não encontrado");
    }

    // Toggle container
    const container = document.getElementById('container');
    const registerBtnToggle = document.getElementById('register');
    const loginBtnToggle = document.getElementById('login');

    if (registerBtnToggle) {
        registerBtnToggle.addEventListener('click', () => {
            container.classList.add("active");
        });
    } else {
        console.error("Botão de toggle de registro não encontrado");
    }

    if (loginBtnToggle) {
        loginBtnToggle.addEventListener('click', () => {
            container.classList.remove("active");
        });
    } else {
        console.error("Botão de toggle de login não encontrado");
    }
});
