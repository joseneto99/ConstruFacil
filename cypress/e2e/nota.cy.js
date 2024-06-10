describe('Verificação de Nota dos Profissionais', () => {
    beforeEach(() => {
      cy.visit('pagina-arquiteto.html');
    });
  
    it('Deve verificar se a nota dos profissionais está visível', () => {
      cy.get('.cards').should('exist');
      cy.get('.cards .card').should('have.length.gt', 0);
      cy.get('.cards .card').each(($card) => {
        cy.wrap($card).find('p:contains("Nota:")').should('be.visible');
      });
    });
});
