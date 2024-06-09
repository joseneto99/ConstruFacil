// Inicializa o Parse
Parse.initialize("Dt5qsyIvBF3KLozPDHVAnhdjxS8CBIIW6BI6chcM", "OjADQ3UETevvC09vTTCYX2MqKM7Wx6gwLW4JLMuE");
Parse.serverURL = 'https://parseapi.back4app.com/';

// Função para buscar usuários por profissão
async function fetchUsersByProfession(profession) {
  displayUsers(profession);
}

// Função para exibir usuários
async function displayUsers(users) {
  const query = new Parse.Query("Profissional");
  query.equalTo("Profissao", "Eletricista");
  const valor = await query.find();
  console.log(valor[0].get("Nome"));

  var ul = document.getElementById("gerar");

  for(let i = 0; i < valor.length; i++) {
    var li = document.createElement("li");
    li.classList.add("card");

    var img = document.createElement("img");
    img.src = "images/usuario.png";
    img.alt = "img";

    var h3 = document.createElement("h3");
    h3.textContent = "Nome: " + valor[i].get("Nome");

    var p1 = document.createElement("p");
    p1.textContent = "Telefone: " + valor[i].get("Telefone");

    var p2 = document.createElement("p");
    p2.textContent = "Orçamento: " + valor[i].get("Orcamento");

    var p3 = document.createElement("p");
    p3.textContent = "Nota: 5.0";

    li.appendChild(img);
    li.appendChild(h3);
    li.appendChild(p1);
    li.appendChild(p2);
    li.appendChild(p3);

    ul.appendChild(li);
  };
}

// Chame a função com a profissão desejada
document.addEventListener('DOMContentLoaded', (event) => {
  fetchUsersByProfession("eletricista");  // Ajuste a profissão conforme necessário
});
