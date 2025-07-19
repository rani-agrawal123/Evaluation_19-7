
import Dashboard from "../../EvalPages/Dashboard.js";

describe('',()=>{
    const dash = new Dashboard();
    beforeEach(()=>{
        cy.visit('https://www.skillport.in/default.aspx');       
    })
    it('Testing DashboardPage',()=>{
        dash.dashboard();
        cy.url().should('include','skillport');
    })
    after(()=>{
        cy.log('end the dashboard page');
    })
})