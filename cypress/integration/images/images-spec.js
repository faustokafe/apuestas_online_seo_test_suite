describe('Images SEO checklist', () => {

    before( () => {
        cy.visit('')
      })

    it('has alt tags on all images and defined width and height', () => {
        cy.get('img').then(($img) => {
          expect($img).to.have.attr('alt').not.to.be.empty
          expect($img).to.have.attr('width')
          expect($img).to.have.attr('height')
        })
    })

    it('responds 200 OK for all image requests', () => {
        cy.get('img')
            .each(img => {
                cy.request(img.attr('src'))
        })
    })

    it('all PNG image sizes are less than 150kb', () => {
        cy.get('img')
            .each(img => {
                if ( img.attr('src').includes('.png') )
                    cy.request(img.attr('src'))
                        .its('headers')
                        .its('content-length')
                        .then((contentLength) => {                            
                            expect(parseInt(contentLength)).to.be.lessThan(150000)
                        })
            })
    })
})
