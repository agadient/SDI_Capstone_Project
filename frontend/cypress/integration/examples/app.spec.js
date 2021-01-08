/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  // https://on.cypress.io/interacting-with-elements

  it('has input field sample data', () => {
    
    cy.get('.sampledata')
      .type('sample data').should('have.value', 'sample data')

      
  })

  

  
})
