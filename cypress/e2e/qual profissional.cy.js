describe('Verificação de Profissionais para um Serviço', () => {
  beforeEach(() => {
    cy.visit('pagina-arquiteto.html');
  });

  it('Deve verificar se os profissionais adequados estão listados', () => {
    cy.get('.cards').should('exist');
    cy.get('.cards .card').should('have.length.gt', 0);
    cy.get('.cards .card').each(($card) => {
      cy.wrap($card).find('h3').invoke('text').then((text) => {
        if (text.includes('Arquiteto')) {
          cy.wrap($card).find('p:contains("Orçamento:")').should('be.visible');
        }
      });
    });
  });
});
