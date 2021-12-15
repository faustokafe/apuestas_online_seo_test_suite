describe('HMTL Specs', () => {

    it.skip("HTML5 should be valid", () => {
        cy.visit("https://apuestasonline.net/");
        cy.htmlvalidate();
    })
})

  