describe('HMTL Specs', () => {

    it("HTML5 should be valid", () => {
        cy.visit("https://apuestasonline.net/");
        cy.htmlvalidate();
    })
})

  