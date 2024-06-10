describe('Página Principal - Verificação de Cards', () => {
    beforeEach(() => {
      cy.visit('http://127.0.0.1:5500/principal.html');
    });
  
    it('Verifica se os cards de serviços estão visíveis', () => {
      cy.contains('Arquitetura').should('be.visible');
      cy.contains('Engenharia Civil').should('be.visible');
      cy.contains('Eletricista').should('be.visible');
      cy.contains('Pedreiro').should('be.visible');
      cy.contains('Encanador').should('be.visible');
      cy.contains('Pintor').should('be.visible');
    });
  });
  