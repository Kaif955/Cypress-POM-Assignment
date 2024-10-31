import loginpage from "../../support/POM/Assign-login.cy";
import productpage from "../../support/POM/Assign-product.cy";
import Addtocart from "../../support/POM/Assign_cart.cy";
import checkout from "../../support/POM/Assign-checkout.cy";

describe('Assign product', () => {
    const log = new loginpage();
    const pro = new productpage();
    const cart = new Addtocart();
    const check = new checkout();
    it('Automation test', () => {
        cy.visit('https://automationteststore.com/');
        log.login_withCredntials();  //login page
        log.validate_login();  //click on login button
        pro.product_shirt();  //product page
        cart.addto_cart();  //add to cart
        check.check_out();  //checkout
    
        
    })
});