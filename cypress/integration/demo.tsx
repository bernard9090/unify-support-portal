///<reference types="cypress"/>

describe('Demos a basic assertion', function () {
    it("Opens Component page", ()=>{
        cy.visit("/");
        cy
            .get(".text")
            .within(()=>{
            cy.contains("This")
        })

    })
});
export {}