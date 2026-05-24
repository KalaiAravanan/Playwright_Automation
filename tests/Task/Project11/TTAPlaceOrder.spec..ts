import {test,expect} from '@playwright/test';
import { TTAPages} from './TTAPages.ts';


test.describe.serial('To Place order in TTA Cart', () => {

    test('Login with valid credentials', async ({ page }) => {

        await page.waitForTimeout(10000);
        console.log('Login with valid credentials');
        
        // Create an instance of the TTAPages class
        const ttapage = new TTAPages(page);
        await ttapage.goto();   

        //login with valid credentials
        await ttapage.Login("standard_user", "tta_secret");
        await expect(page).toHaveURL('https://app.thetestingacademy.com/playwright/ttacart/inventory');
        console.log('Logged in successfully');

        //select item and add to cart
        await ttapage.selectitem();
        await expect(page).toHaveURL('https://app.thetestingacademy.com/playwright/ttacart/inventory-item?id=tta-bike-light');
        console.log('Items selected successfully');

        //add to cart and verify
        await ttapage.addtocart();
        await ttapage.verifyCart();
        await expect(page).toHaveURL('https://app.thetestingacademy.com/playwright/ttacart/cart');        
        console.log('Items added to cart successfully');

        //verify the cart
        await ttapage.checkout();
        await expect(page).toHaveURL('https://app.thetestingacademy.com/playwright/ttacart/checkout-step-one');
        console.log('Checkout page');

        //fill out the details in checkout page
        await ttapage.continue("Riya", "Hatsun", "75035");
        await expect(page).toHaveURL('https://app.thetestingacademy.com/playwright/ttacart/checkout-step-one');
        console.log('Checkout overview page');

        //finish checkout and verify order placed
        await ttapage.finish();
        await expect(page).toHaveTitle('TTACart - Checkout: Your Information');
        console.log('Order placed successfully');

    });
});
