describe('Login Page Tests', () => {
  beforeEach(() => {
      cy.visit('login.html');
  });

  it('Should log in successfully with correct credentials', () => {
      cy.get('#login-email').type('seuemail@example.com');
      cy.get('#login-password').type('suasenha');
      cy.get('#btn-login').click();
  });

  it('Should show an error message with incorrect credentials', () => {
      cy.get('#login-email').type('cris@example.com');
      cy.get('#login-password').type('123'); 
      cy.get('#btn-login').click();
  });
});
