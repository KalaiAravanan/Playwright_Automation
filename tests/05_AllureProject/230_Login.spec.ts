import {test,expect} from '@playwright/test';
import * as allure from 'allure-js-commons';


test('login functionality',async({page}) => {

    await allure.epic("Login Functionality");
    await allure.feature("Login Feature");
    await allure.description("This test case is to verify the login functionality of VWO application with invalid credentials");    
    await allure.story("Login with invalid credentials");

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