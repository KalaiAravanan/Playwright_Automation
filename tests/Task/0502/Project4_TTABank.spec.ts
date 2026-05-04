import {test, expect} from '@playwright/test';


test('TTABank login functionality', async({page}) => {

    await page.goto("https://tta-bank-digital-973242068062.us-west1.run.app/");
    
    // Click on Sign Up Button
    await page.getByRole('button', { name : 'Sign Up'}).click();

    //Fill out the sign up form
    await page.getByPlaceholder("John Doe").fill("kalai");
    await page.getByPlaceholder("you@example.com").fill("kalai@gmail.com");
    await page.getByPlaceholder("••••••••").fill("kalaigmail");
    await page.getByText("Create Account").click();

    //Transfer funds
    await page.getByText("Transfer Funds").click();
    await page.getByPlaceholder("0.00").fill("5000");
    await page.getByPlaceholder("e.g. Rent for October").fill("Rent");
    await page.getByText("Continue").click();
     
    //Confirm transfer
    await page.getByText("Confirm Transfer").click();
    await page.getByText("Dashboard").click();
   
    //validate the transfer amount on dashboard
    await expect(page.locator(".mt-2.text-3xl.font-bold")).toBeVisible();
    await expect(page.locator(".mt-2.text-3xl.font-bold")).toHaveText("$45,000.00");

});