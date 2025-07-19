
class Iframe{
    iframe(){
        cy.visit('https://www.skillsoft.com/book/web-automation');

        cy.frameLoaded('.hero');
        cy.wait(3000);
        cy.iframe().find('#_hjSafeContext_47441005').click();
    }
}
export default Iframe;