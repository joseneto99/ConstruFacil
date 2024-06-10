describe('Inserção de Email no Cadastro', () => {
    beforeEach(() => {
      cy.visit('loginPro.html');
    });
  
    it('Deve verificar se é possível inserir o email dos profissionais no cadastro', () => {
      cy.get('#signup-email').should('exist').and('be.visible');
      const email = 'teste@teste.com';
      cy.get('#signup-email').type(email).should('have.value', email);
    });
});
