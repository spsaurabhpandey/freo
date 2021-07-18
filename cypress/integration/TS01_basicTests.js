describe('basic checks on homepage of freo.nl',()=>{

    it('check title after page load',()=>{
        cy.visit('https://www.freo.nl/');
        cy.title().should('eq','Geld lenen bij Freo - Bereken direct en sluit online af - Freo');
        cy.url().should('contain', 'https://www.freo.nl/');
    })
})