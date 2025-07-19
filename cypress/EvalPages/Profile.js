
class Profile{
    profile(){

        cy.get('.siteHeader__brand').then((logo)=>{
            cy.log(log.text('skillsoft'));
        })
    }
}
export default Profile;