/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/index.html')
  })

  it('Verifica se o botão de login está visível', () => {
    cy.visit('http://127.0.0.1:5500/index.html');
    cy.get('#Login-button').should('be.visible');
  });
})