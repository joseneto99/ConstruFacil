describe('Página Principal - Verificação de Cards', () => {
    beforeEach(() => {
      // Altere o caminho conforme necessário para apontar para a sua página principal
      cy.visit('http://127.0.0.1:5500/principal.html');
    });
  
    it('Verifica se os cards de serviços estão visíveis', () => {
      // Verifica o card de Arquitetura
      cy.contains('Arquitetura').should('be.visible');
      
      // Verifica o card de Engenharia Civil
      cy.contains('Engenharia Civil').should('be.visible');
      
      // Verifica o card de Eletricista
      cy.contains('Eletricista').should('be.visible');
      
      // Verifica o card de Pedreiro
      cy.contains('Pedreiro').should('be.visible');
      
      // Verifica o card de Encanador
      cy.contains('Encanador').should('be.visible');
      
      // Verifica o card de Pintor
      cy.contains('Pintor').should('be.visible');
    });
  });
  