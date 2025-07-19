
describe('',()=>{
    it('',()=>{
        // cy.visit('https://www.tutor ialspoint.com/selenium/practice/webtables.php');
        // cy.get('table tbody tr').each((row)=>{
        //     cy.wrap(row).should('be.visible')
        // })

        // cy.get('table tbody tr td:nth-child(2)').invoke('text').should('contain','Vega')

        // cy.get('.btn-secondary',{timeout:3000}).rightclick();



        cy.visit('https://www.tutorialspoint.com/selenium/practice/buttons.php')
        cy.get('.btn-success').dblclick()
        cy.get("#doublec").should('contain','You have Double clicked ');
        // cy.go(-1);
        cy.get('.external-link').trigger('mouseover')

    })
})