describe('Site has robots.txt target', () => {

    before(function () {
      cy.fixture('apuestas-online.json').then((home) => {
        this.home = home
      })
    })

    it('has a robots meta tag', function () {
      cy.visit('https://apuestasonline.net/')
      cy.get('head')
        .get('meta[name="robots"]')
        .should('have.prop', 'content')
        .and('equal', this.home.metaRobots)
    })

    it('Contains a robots.txt', () => {
      cy.request('https://apuestasonline.net/robots.txt')
          .its('body').should('include', 'Sitemap: https://apuestasonline.net/sitemap_index.xml')
  })
})
