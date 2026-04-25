import {test,expect} from '@playwright/test';


test('login functionality',async({page}) => {

    await page.goto("https://vwo.com/login/");

    //lazy page locators
    let usernamefield =await page.locator("#login-username");
    let passwordfield =await page.locator("#login-password");
    let loginbutton =await page.locator("#js-login-btn");

    await usernamefield.fill("kalai");
    await passwordfield.fill("kalai123");
    await loginbutton.click();

    await expect(page.locator(".notification-box-description"))
    .toHaveText("Your email, password, IP address or location did not match");
    
});