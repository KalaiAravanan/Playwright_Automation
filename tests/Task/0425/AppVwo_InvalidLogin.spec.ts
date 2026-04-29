import {test,expect} from '@playwright/test';

test('test invalid login', async({page})=>{

    await page.goto("https://app.vwo.com/#/login");
    await page.getByRole('textbox',{ name:'Email address'}).fill('kalai');
    await page.getByRole('textbox',{ name:'Password'}).fill('kalai123');
    await page.getByRole('button', { name: 'Sign in', exact: true }).click();
       
    let error_message = page.locator('#js-notification-box-msg');
    await expect(error_message).toContainText("Your email, password, IP address or location did not match");

});