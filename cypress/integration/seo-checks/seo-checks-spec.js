describe('Apuestas Online SEO', () => {

  beforeEach( function () {
    cy.fixture('apuestas-online.json').then((home) => {
      this.home = home
    })
    cy.visit('https://apuestasonline.net/')
  })

  it('has only one H1 element', () => {
    cy.get('h1')
      .should('have.length', 1)
  })

  it('has at least two H2 elements', () => {
    cy.get('h2')
      .its('length')
      .should('be.gte', 2)
  })

  it('has only one heading with with a title and meta description', function () {
    cy.get('head')
      .should('have.length', 1)
    
    cy.get('head title')
      .should('have.length', 1)
      .and('have.text', this.home.metaTitle)
    
    cy.get('head')
      .get('meta[name="description"]')
      .should('have.prop', 'content')
      .and('equal', this.home.metaDescriptionText)
      .its('length').and('be.gte', 50)
      .and('be.lt', 160)
  })

  it('has a viewport meta tag', function () {
    cy.get('head')
      .get('meta[name="viewport"]')
      .should('have.prop', 'content')
      .and('equal', this.home.metaViewport)
  })

  it.skip('has content divided by multiple subheadings', () => {
    cy.get('.content')
      .get('h2')
      .should('have.length', 7)

    cy.get('.content')
      .get('h3')
      .should('have.length', 24)

    cy.get('.content')
      .get('h4')
      .should('have.length', 5)

    cy.get('.content')
      .get('h5')
      .should('have.length', 0)
  })

  it('has all the canonicals valid', () => {
    cy.get('link')
      .should('have.attr', 'rel')
      .and('equal', 'canonical')
    
    cy.get('link')
      .should('have.attr', 'href')
      .and('not.be.empty')

    cy.get('link')
      .should('have.attr', 'rel')
      .and('not.be.empty')
  })

  it('has a HTML lang set', () => {
    cy.get('html')
      .should('have.attr', 'lang')
      .and('not.be.empty')
  })

  it.skip('has less than 150 links', () => {
    cy.get('body')
      .find('a')
      .its('length').and('be.lt', 150)
  })
})
