describe('Meta SEO checklist', () => {

    before( () => {
        cy.visit('')
      })

    beforeEach( function () {
      cy.fixture('apuestas-online.json').then((home) => {
        this.home = home
      })
    })

    it('has a viewport meta tag', function () {
        cy.get('head')
          .get('meta[name="viewport"]')
          .should('have.prop', 'content')
          .and('equal', this.home.meta.viewport)
      })

    it('has a title tag and a meta description tag', function () {
        cy.get('head title')
        .should('have.length', 1)
        .and('have.text', this.home.meta.title)
      
      cy.get('head')
        .get('meta[name="description"]')
        .should('have.prop', 'content')
        .and('equal', this.home.meta.descriptionText)
        .its('length').and('be.gte', 50)
        .and('be.lt', 160)
    })
})
