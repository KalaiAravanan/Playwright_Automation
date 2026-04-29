import {test,expect} from '@playwright/test';

test('VWO Free Trial',async({page}) => {
    await page.goto(" https://vwo.com/free-trial/?utm_medium=website&utm_source=login-page&utm_campaign=mof_eg_loginpage");
    await page.getByRole('textbox', {name: 'email'}).fill('kalai@gmail.com');

    await page.getByRole('checkbox', { name: 'I agree to VWO\'s Privacy' }).check();
    await page.getByRole('button', { name: 'Create a Free Trial Account' }).click();

    let errormsg =  page.getByText("gmail.com doesn\'t look like a business domain. Please use your business email.");
    await expect(errormsg).toContainText("gmail.com doesn\'t look like a business domain. Please use your business email.");
    
});