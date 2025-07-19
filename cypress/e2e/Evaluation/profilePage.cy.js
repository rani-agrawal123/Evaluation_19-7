
import Profile from "../../EvalPages/Profile";

describe('',()=>{
    const prof = new Profile();
    before(()=>{
        cy.log('Starting of page');
    })
    beforeEach(()=>{
        cy.visit('https://www.skillsoft.com/book/web-automation')
    })
    it('Testing of Profile',()=>{
      prof.profile();
    })
})