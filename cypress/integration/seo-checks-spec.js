describe('Apuestas Online SEO', () => {

  beforeEach( () => {
    cy.visit('https://apuestasonline.net/')
    cy.acceptLegalAgePopUp()
  })

  it('There is only on H1 element', function () {
    cy.get('h1').should('have.length', 1)
  })

  it('There are at least two H2 elements', function () {
    cy.get('h2').its('length').should('be.gte', 2)
  })

  it('All images have alt tags', function () {
    cy.get('img').should('have.attr', 'alt')
  })

  it('All images have alt tags', function () {
    cy.get('img').should('have.attr', 'alt')
  })

  //WIP @failing
  it.skip('Site has only one heading with with a title and meta description', function () {
    cy.get('head')
    .should('have.length', 1)
    
    cy.get('head title')
    .should('have.length', 1)
    
    cy.get('head meta')
    .should('have.attr', 'name')
    .and('equal', 'description')
  })

  it.skip('Site content is divided by multiple subheadings', function () {
    // Work in progress
  })

  it('Site has all canconicals valid', function () {
    cy.get('link')
    .should('have.attr', 'rel')
    .and('equal', 'canonical')
    
    cy.get('link')
    .should('have.attr', 'href')
    .and('not.be.empty') 
  })

  it('Site has an HTML lang set', () => {
    cy.get('html')
    .should('have.attr', 'lang')
    .and('not.be.empty')
  })
})
