
describe('',()=>{
    it('',()=>{
        // cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        // cy.url().should('include','orangehrmlive.com');
        // cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        // cy.url().should('contain','orangehrmlive');
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.url().should('include','orangehrmlive.com')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain','orangehrmlive')
        .and('not.contain','green');



        // explicite assertion
         
        
    })
})