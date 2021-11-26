Cypress.Commands.add('acceptLegalAgePopUp', () => { 
    cy.get('.approve', { timeout: 900000}).click()
 })
 