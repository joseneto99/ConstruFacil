it('Preenche e envia o formulário de contato', () => {
  cy.visit('http://127.0.0.1:5500/loginNormal.html');
  cy.get('#Email').type('fulano@email.com');
  cy.get('#Senha').type('123.');
  cy.get('#btn-login').click();
});

