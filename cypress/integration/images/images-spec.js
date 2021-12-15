describe('Images SEO checklist', () => {

    before( () => {
        cy.visit('https://apuestasonline.net/')
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
                cy.log(img.attr('src'))
                cy.request(img.attr('src'))
        })
    })
})
