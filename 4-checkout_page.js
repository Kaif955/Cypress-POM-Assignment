class checkout{
    check_out() {
         //click on payment simulation.
         cy.xpath('(//a[@class="btn btn-default btn-xs"])[2]').click();
         //fill the comment        
         cy.xpath('//textarea[@rows="3"]').type('hii kaif this side')
         //return policy check
         cy.get('#payment_agree').check();
         //click on continoue button.
         cy.get('.col-md-12 > .btn-orange').should('be.visible').click();
         //click on confirm order.
         cy.get('#checkout_btn').click();
        //verify order completion page.
        cy.contains('Your Order Has Been Processed!').should('be.visible');
    }
}
export default checkout;