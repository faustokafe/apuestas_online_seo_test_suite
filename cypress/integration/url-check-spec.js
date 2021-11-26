describe('Apuestas Online URLs validation', () => {

    beforeEach( () => {
      cy.visit('https://apuestasonline.net/')
      cy.acceptLegalAgePopUp()
    })
  
    it('Links are valid and working, without 404 responses', function () {
        cy.get('body').get('a')
            .should('have.attr', 'href')

        cy.get('body').get('a')
            .each(link => {
                cy.log(link.prop('href'))
                cy.request(link.prop('href'))
        })
    })
})
  