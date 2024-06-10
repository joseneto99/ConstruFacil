document.addEventListener("DOMContentLoaded", function() {
    console.log("Script carregado e DOM totalmente carregado");

    // Inicializa o Parse
    Parse.initialize("Dt5qsyIvBF3KLozPDHVAnhdjxS8CBIIW6BI6chcM", "OjADQ3UETevvC09vTTCYX2MqKM7Wx6gwLW4JLMuE");
    Parse.serverURL = "https://parseapi.back4app.com/";

    const voltarBtn = document.getElementById("btn-voltar");
    if (voltarBtn) {
        voltarBtn.addEventListener("click", function() {
            window.location.href = "index.html";
        });
    } else {
        console.error("Botão de voltar não encontrado");
    }

    // Cadastro do profissional
    const cadastrarBtn = document.getElementById("btn-cadastrar");
    if (cadastrarBtn) {
        cadastrarBtn.addEventListener("click", async function() {
            const nome = document.getElementById("signup-nome").value;
            const email = document.getElementById("signup-email").value;
            const senha = document.getElementById("signup-password").value;
            const profissao = document.getElementById("signup-profissao").value;
            const telefone = document.getElementById("signup-telefone").value;
            const orcamento = document.getElementById("signup-orcamento").value;

            console.log("Tentando cadastrar parceiro:", nome, email);

            const profissional = new Parse.Object("Profissional");
            profissional.set("Nome", nome);
            profissional.set("Email", email);
            profissional.set("Senha", senha);
            profissional.set("Profissao", profissao);
            profissional.set("Telefone", telefone);
            profissional.set("Orcamento", Number(orcamento));

            try {
                await profissional.save();
                alert("Parceiro cadastrado com sucesso!");
                console.log("Parceiro cadastrado com sucesso!");
                // Redirecionar para a página de login ou outra página apropriada
            } catch (error) {
                console.error("Erro ao cadastrar parceiro:", error);
                alert("Erro ao cadastrar parceiro: " + error.message);
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

            const Profissional = Parse.Object.extend("Profissional");
            const query = new Parse.Query(Profissional);
            query.equalTo("Email", email);
            query.equalTo("Senha", senha);

            try {
                const result = await query.first();
                if (result) {
                    alert("Login realizado com sucesso!");
                    console.log("Login realizado com sucesso!");
                    localStorage.setItem("profissionalId", result.id);
                    window.location.href = "principal.html";
                } else {
                    throw new Error("Email ou senha incorretos");
                }
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
