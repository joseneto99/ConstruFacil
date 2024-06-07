/// <reference types="cypress" />

context('Window', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/index.html')
  })

  it('cy.window() - get the global window object', () => {
    // https://on.cypress.io/window
    cy.window().should('have.property', 'top')
  })

  it('cy.document() - get the document object', () => {
    // https://on.cypress.io/document
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
  })


})
