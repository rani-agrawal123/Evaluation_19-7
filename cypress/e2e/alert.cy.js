
describe('',()=>{
    // const url = "https://the-internet.herokuapp.com/javascript_alerts";
    it('',()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
        // cy.get('[onclick="jsAlert()"]').click();

        // cy.on('window:alert',(text)=>{
        //   expect(text).to.eq('I am a JS Alert')
        // })


        // cy.get('[onclick="jsConfirm()"]').click()
        // cy.on('window:confirm',(text)=>{
        //   expect(text).to.eq('I am a JS Confirm')
        //   return true;
        // })
        // cy.get('#result').should('contain','You clicked: Ok')






// prompt
cy.window().then(win=>{
    cy.stub(win,'prompt').returns("masai")
})

cy.get('[onclick="jsPrompt()"]').click();
    })

it.only('',()=>{
    
})
})