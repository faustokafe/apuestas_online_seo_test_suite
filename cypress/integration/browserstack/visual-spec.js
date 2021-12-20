describe('Visual Inspection', () => {

    it.only("renders correcly the page layout", () => {
        cy.visit("https://apuestasonline.net/")
        cy.percySnapshot()
    })
})
  