describe('Site has robots.txt target', () => {

    beforeEach( () => {
      cy.visit('https://apuestasonline.net/')
      cy.acceptLegalAgePopUp()
    })
  
    it('Contains a robots.txt', function () {
        cy.request('https://apuestasonline.net/robots.txt')
            .its('body').should('include', 'Sitemap: https://apuestasonline.net/sitemap_index.xml')
    })
})
