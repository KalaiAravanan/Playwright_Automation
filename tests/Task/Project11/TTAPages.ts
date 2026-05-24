import{ Page, locator, expect} from '@playwright/test';

export class TTAPages{

    readonly usernameinput: locator;
    readonly passwordinput: locator;
    readonly loginbutton: locator;

    readonly page: Page;

    readonly lookitembutton: locator;
    readonly addtocartbutton: locator;
    readonly verifycart: locator;
    readonly checkoutbutton: locator;
    
    readonly firstnameinput: locator;
    readonly lastnameinput: locator;
    readonly postalcodeinput: locator;
    readonly continuebutton: locator;
    
    readonly finishbutton: locator;


    constructor(page:Page){

        this.page = page;
        
        this.usernameinput =  page.locator('#user-name');
        this.passwordinput =  page.locator('#password');        
        this.loginbutton =  page.locator('[data-test="login-button"]');
        
        this.lookitembutton = page.locator('[data-test="item-tta-bike-light-title-link"]');
        this.addtocartbutton = page.locator('[data-test="add-to-cart"]');

        this.verifycart = page.locator('[data-test="shopping-cart-link" ]');
        this.checkoutbutton = page.locator('[data-test="checkout"]');

        this.firstnameinput = page.locator('[data-test="firstName"]');
        this.lastnameinput = page.locator('[data-test="lastName"]');
        this.postalcodeinput = page.locator('[data-test="postalCode"]');
        this.continuebutton = page.getByRole("button", { name: "Continue" }).or(page.getByTestId("continue")).or(page.locator("#continue-btn"));

        this.finishbutton = page.locator('[data-test="finish"]').or(page.locator('#finish-btn')).or(page.getByText("Finish")).or(page.getByRole("button", { name: "Finish" })).or(page.locator(".btn-primary"));
       
    }

    async goto(){
        await this.page.goto('https://app.thetestingacademy.com/playwright/ttacart/');
    }

    async Login(username: string, password: string){
        await this.usernameinput.fill(username);
        await this.passwordinput.fill(password);
        await this.loginbutton.click();
    }

    async selectitem(){
        await  this.lookitembutton.click();        
    }

    async addtocart(){       
        await this.addtocartbutton.click();
    }

    async verifyCart(){
        await expect(this.verifycart).toHaveText('1');
        await this.verifycart.click();
    }

    async checkout(){        
        await this.checkoutbutton.click();
    }

    async continue(firstname: string, lastname: string, postalcode: string){        
        this.firstnameinput.fill(firstname);
        this.lastnameinput.fill(lastname);
        this.postalcodeinput.fill(postalcode);
        await this.continuebutton.click();
    }

    async finish(){
        await this.page.waitForTimeout(5000);
        await this.finishbutton.click();
    }

}