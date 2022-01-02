describe('robots.txt related functionality', () => {

  before(function () {
    cy.fixture('apuestas-online.json').then((home) => {
      this.home = home
    })
  })

  it('has a robots meta tag', function () {
    cy.visit('')

    cy.get('head')
      .get('meta[name="robots"]')
      .should('have.prop', 'content')
      .and('equal', this.home.meta.robots)
  })

  it('Contains a robots.txt file', () => {
    cy.request(Cypress.env('robots'))
      .its('body')
      .should('include', 'Sitemap: ' + Cypress.env('sitemap'))
  })

  it('Contains a sitemap', () => {
    cy.request(Cypress.env('sitemap'))
      .its('body')
      .should('include', 'XML Sitemap')
  })
})
