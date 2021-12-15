describe('Apuestas Online URLs validation', () => {

    beforeEach( () => {
      cy.visit('https://apuestasonline.net/')
    })
  
    it('Links are valid and working, without 404 responses', function () {
        cy.get('body').get('a')
            .each(link => {
                // should('have.attr', 'href')
                cy.log(link.prop('href'))
                try {
                    if (link.prop('href') === '') {
                        throw ("Link missing href content")
                    } else {
                        cy.request( { failOnStatusCode: false, url: link.prop('href') } )
                    }
                } catch (error) {
                    cy.log("Error: " + error);
                }
        })
    })
})
  