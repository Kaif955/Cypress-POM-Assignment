class loginpage{
    login_withCredntials(){
        cy.contains('Login or register').click();
        cy.url().should('include','account/login');
        cy.get('#loginFrm_loginname').should('be.visible').type('kaifbeg12');
        cy.get('#loginFrm_password').should('be.visible').type('123456');
        cy.xpath('(//button[@class="btn btn-orange pull-right"])[2]').should('be.visible').click();
    }
    validate_login(){
        cy.url().should('include','account');
    }
    
}
export default loginpage;