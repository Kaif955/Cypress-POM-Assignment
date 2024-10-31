class Addtocart{
    addto_cart() {
         //modify increse quantity.
         cy.xpath('//input[@size="3"]').clear().type('5');
         //click on update.
         cy.get('#cart_update').click()
        //proceed to checkout.
        cy.get('#cart_checkout1').click();
    }
}
export default Addtocart;