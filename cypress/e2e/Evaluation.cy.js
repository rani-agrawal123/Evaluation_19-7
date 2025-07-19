
describe('',()=>{
    it('Dropdown interaction',()=>{
        cy.visit("https://www.letskodeit.com/practice",{timeout:10000});
        // cy.wait(10000);
        // cy.get('#carselect').click();
        // cy.contains('Honda').should('include','Honda').click();

    })

    // it('Radio Button Selection',()=>{
    //     cy.get('#bmwradio').click();
    // })

    // it('Checkbox Validation',()=>{
    //     cy.wait(1000);
    //     cy.get('select').select(' Benz ').should('have.value',' Benz ').click();
    // })

    // it('Handling Alerts',()=>{
    //     cy.wait(3000);
    //     cy.get('#alertbtn').click();
    //     cy.on('window:alert',(text)=>{
    //         expect(text).to.eq('Hello , share this practice page and share your knowledge');
    //     })
    // })

    // it('Hiding and Showing Elements',()=>{
    //     cy.get('#displayed-text').should('be.visible');

    //     cy.get('#hide-textbox').click();
    //     cy.get('#displayed-text').should('not.be.visible');

    //     cy.get('#show-textbox').click();
    //     cy.get('#displayed-text').should('be.visible');
    // })
})