
describe('', () => {
    it('iframe', () => {
    
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

       cy.frameLoaded();
       cy.wait(3000);
       cy.iframe().find('[href="mentorship"]').eq(0).click()
       cy.wait(3000);

       cy.iframe().find('.pricing-title').should('have.length',2)
    })
})