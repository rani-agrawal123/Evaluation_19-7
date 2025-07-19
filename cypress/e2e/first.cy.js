
describe('collection of test suite',()=>{
    it('test',()=>{
     cy.visit('https://the-internet.herokuapp.com/login')
    })
})

// cli command --> to execute in terminal
// npx cypress run --> this will execute all specs in the given folder
// npx cypress run --browser chrome --> 
// npx cypress run --browser chroome --headed --> 
// only one spec file want to run so we use --> npx cypress run --spec "cypress\e2e\first.cy.js"
// npx cypress run --browser chrome --headed --spec "cypress\e2e\first.cy.js"