
class Login{
    loginh(){
        cy.visit('https://www.skillport.in/default.aspx');
        cy.wait(30000);
        cy.enterEmail('agrawal2003r@gmail.com',8678765787,"Rani");
        cy.get('#conversion_cta_text').click();
    }
}
export default Login;