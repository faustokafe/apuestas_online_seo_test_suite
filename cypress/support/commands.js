Cypress.Commands.add('acceptLegalAgePopUp', () => { 
    cy.get('.approve', { timeout: 9000}).click()
 })
 