context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/principal.html')
  })
  it('Preenche e envia o formulário de contato', () => {
    cy.visit('http://127.0.0.1:5500/login.html');
    cy.get('login-email').type('fulano@email.com');
    cy.get('login-password').type('123.');
  
  });
})
