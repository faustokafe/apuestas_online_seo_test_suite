describe('HMTL Specs', () => {

    it("should be valid", () => {
        cy.visit("https://apuestasonline.net/");
        cy.htmlvalidate();
    })
})

  