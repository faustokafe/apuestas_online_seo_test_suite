describe('Apuestas Online URLs validation', () => {

    beforeEach( () => {
      cy.visit('')
    })
  
    it.skip('Links are valid and working, without 404 responses', function () {
        cy.get('body').get('a')
            .each(link => {
                cy.log(link.prop('href'))
                try {
                    if (link.prop('href') === '') {
                        throw ("Link missing href content")
                    } 
                    else if (link.prop('href').includes('/ir/')) {
                        cy.log('Affiliate link detected')
                        cy.request( { url: link.prop('href'), failOnStatusCode: false, followRedirect: false } ).as('links')
                        cy.get('@links').then((response) => {
                            expect(response.status).to.equal(301)
                        }) 
                    }
                    else if (link.prop('href').includes('#')) {
                        cy.log('Internal anchor link detected')
                        cy.request( { url: link.prop('href'), failOnStatusCode: false, followRedirect: false } ).as('links')
                        cy.get('@links').then((response) => {
                            expect(response.status).to.equal(200)
                        })
                    }
                    else if (link.prop('href').includes('linkedin')) {
                        cy.log('LinkedIn link detected')
                        cy.request( { url: link.prop('href'), failOnStatusCode: false, followRedirect: false } ).as('links')
                        cy.get('@links').then((response) => {
                            expect(response.status).to.equal(999)
                        }) 
                    }
                    else {
                        cy.request( { url: link.prop('href'), failOnStatusCode: false, followRedirect: false } ).as('links')
                        cy.get('@links').then((response) => {
                            expect(response.status).to.equal(200)
                        })
                    }
                } catch (error) {
                    cy.log("Error: " + error);
                }
        })
    })
})
  