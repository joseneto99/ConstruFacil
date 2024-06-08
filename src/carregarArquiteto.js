// Inicializa o Parse
Parse.initialize("Dt5qsyIvBF3KLozPDHVAnhdjxS8CBIIW6BI6chcM", "OjADQ3UETevvC09vTTCYX2MqKM7Wx6gwLW4JLMuE");
Parse.serverURL = 'https://parseapi.back4app.com/';

// Função para buscar usuários por profissão
async function fetchUsersByProfession(profession) {
  const User = Parse.Object.extend("_User");  // Use "_User" para a classe de usuários
  const query = new Parse.Query(User);
  query.equalTo("profissao", profession);  // Certifique-se de que o campo 'profissao' está correto
  try {
    const results = await query.find();
    displayUsers(results);
  } catch (error) {
    console.error("Error while fetching users: ", error);
  }
}

// Função para exibir usuários
function displayUsers(users) {
  const cardsContainer = document.querySelector('.cards');
  cardsContainer.innerHTML = ''; // Limpa o container de cards

  users.forEach(user => {
    const card = document.createElement('li');
    card.className = 'card';

    const userImage = user.get('image'); // Supondo que o campo da imagem seja uma URL
    const userName = user.get('nome');
    const userBudget = user.get('orcamento');
    const userPhone = user.get('telefone');
    const userProfession = user.get('profissao');

    card.innerHTML = `
      <a href="pagina-${userProfession}.html">
        <img src="${userImage}" alt="img">
        <h2>${userName}</h2>
        <h3>${userProfession}</h3>
        <p>Orçamento: ${userBudget}</p>
        <p>Telefone: ${userPhone}</p>
      </a>
    `;

    cardsContainer.appendChild(card);
  });
}

// Chame a função com a profissão desejada
document.addEventListener('DOMContentLoaded', (event) => {
  fetchUsersByProfession("arquiteto");  // Ajuste a profissão conforme necessário
});
