document.addEventListener("DOMContentLoaded", function() {
    Parse.initialize("Dt5qsyIvBF3KLozPDHVAnhdjxS8CBIIW6BI6chcM", "OjADQ3UETevvC09vTTCYX2MqKM7Wx6gwLW4JLMuE");
    Parse.serverURL = 'https://parseapi.back4app.com/';

    const container = document.getElementById('profile-container');

    function loadProfilesByProfession(profession) {
        const query = new Parse.Query("Encanador");
        query.equalTo("profissao", "Encanador");
        query.find().then(function(results) {
            results.forEach(function(trabalhador) {
                const perfilHTML = `
                    <div class="perfil">
                        <img src="images/${profession.toLowerCase()}.png" alt="Foto de Perfil">
                        <div class="informacoes">
                            <h2>${trabalhador.get("nome") || "Nome Indisponível"}</h2>
                            <p class="p">Email: ${trabalhador.get("email")}</p>
                            <p class="p">Profissão: ${trabalhador.get("profissao")}</p>
                            <p class="p">Formação: ${trabalhador.get("formacao")}</p>
                            <p class="p">Descrição: ${trabalhador.get("descricao")}</p>
                            <div class="avaliacoes">
                                <h3>Avaliações</h3>
                                <!-- Avaliações podem ser adicionadas aqui -->
                            </div>
                        </div>
                    </div>
                `;
                container.innerHTML += perfilHTML;
            });
        }).catch(function(error) {
            alert("Erro ao buscar dados: " + error.message);
        });
    }
    loadProfilesByProfession("Encanador");
});
