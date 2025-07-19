
class Dashboard{
    dashboard(){
        cy.log('Welcome To This Page');
        cy.contains('Certificate Verification').trigger('mouseover');
    }
}