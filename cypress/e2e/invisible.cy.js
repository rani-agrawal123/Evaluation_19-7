
// elements might be made invisible when element requirement is not clear or TO MAKE SURE
//  other element are functioning properly (ex:- alert pop up , lets say
//  you are particular element, you may have to hide onne of the element to make 
// sure that pop up is displayed properly)

describe('',()=>{
 it('',()=>{
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    
    cy.get('#displayed-text').should('be.visible');
    cy.get('#hide-textbox').click({force : true});
    cy.get('#displayed-text').should('not.be.visible');
    cy.get('#show-textbox').click();

    cy.get('#displayed-text',{timeout:3000}).should('be.visible');

 })

//  it.only('',()=>{
//     cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
//     cy.get('.search-keyword').type('ca');
//  })


it.only('',()=>{
    cy.visit('https://selectorshub.com/xpath-practice-page/')
    // cy.get('#pizza').type('testing');

    // why element are hidder or under shadow root
    // some element to keep their css properties & behaviour 
    // constant and to vavoid overlaping of element ,
    // some element are  written inside shadowroot

    cy.get('#userName',{timeout:5000}).shadow().find('#app2').shadow().find('#pizza').type('testing')
})
})