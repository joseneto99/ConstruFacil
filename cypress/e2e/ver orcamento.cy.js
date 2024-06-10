describe('Verificação de Orçamentos dos Cards', () => {
  beforeEach(() => {
    cy.visit('pagina-arquiteto.html');
  });

  it('Deve verificar se os orçamentos dos cards estão visíveis', () => {
    cy.get('.cards').should('exist');
    cy.get('.cards .card').should('have.length.gt', 0);
    cy.get('.cards .card').each(($card) => {
      cy.wrap($card).find('p:contains("Orçamento:")').should('be.visible');
    });
  });
});
