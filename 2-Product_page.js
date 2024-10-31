class productpage{
    product_shirt(){
        cy.visit('https://automationteststore.com/'); 
        //verify navigate to product "Apparel & Accessories and select t-shirt"
        cy.xpath('//a[text()="Apparel & accessories"]').invoke('show')
        cy.contains('T-shirts').click({force: true});

        //select tha product "https://automationteststore.com/index.php?rt=product/product&path=68_70&product_id=121"
        cy.get(':nth-child(3) > .fixed_wrapper > .fixed > .prdocutname').click();

        //select the color.
        cy.get('#option350').select('775');

        //cy.get('#option351').select('Small  Out of Stock');  we can't select this option because it's disabled.

        //select the quantity.
        cy.get('#product_quantity').clear().type('2');

        //click on add to cart.
        cy.contains('Add to Cart').click();
        cy.url().should('include', 'checkout');
    }
}

export default productpage;