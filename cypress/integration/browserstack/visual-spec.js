describe('Visual Inspection', () => {

    it("renders correcly the page layout", () => {
        cy.visit("https://apuestasonline.net/")
        cy.percySnapshot()
    })
})
  