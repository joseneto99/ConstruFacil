describe('Cadastro de Profissional', () => {
    beforeEach(() => {
      cy.visit('loginPro.html');
    });
  
    it('Deve cadastrar um novo profissional com sucesso', () => {
      cy.get('#signup-nome').type('Teste Profissional');
      cy.get('#signup-email').type('teste@profissional.com');
      cy.get('#signup-password').type('senha123');
      cy.get('#signup-profissao').type('Engenheiro');
      cy.get('#signup-telefone').type('123456789');
      cy.get('#signup-orcamento').type('1000');
  
      cy.get('#btn-cadastrar').click();
  
      cy.on('window:alert', (text) => {
        expect(text).to.contains('Parceiro cadastrado com sucesso!');
      });
    });
  });
  