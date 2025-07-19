
describe('', () => {
    it('', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        // // cy.log(cy.get('.brand').text());

        // // to use text command we need to handle the promise 
         
        //   cy.get('.brand').then(($logo)=>{
        //      cy.log($logo.text());
        //   })




        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('[placeholder="Username"]').then((inp)=>{
            inp.val("Admin");
            inp.css("color",'red');
        })
    })

    it.only('',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        // cy.get('#checkBoxOption1').click();
        // cy.get('#checkBoxOption2').click();
        cy.get('#checkBoxOption3').click();

        cy.get('.radioButton').eq(2).click()
        cy.get('.radioButton').eq(0).click()


        cy.get('select').select('Option2');
    })
})