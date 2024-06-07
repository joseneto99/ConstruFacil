it('Preenche e envia o formulário de contato', () => {
  cy.visit('http://127.0.0.1:5500/loginTrabalhador.html');
  cy.get('#email1').type('fulano@email.com');
  cy.get('#senha1').type('123.');
  cy.get('btn-login1').click();
});
