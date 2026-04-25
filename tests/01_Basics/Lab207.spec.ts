import {test, expect} from '@playwright/test';

test('verify the title of the page', async({page}) =>{
    await page.goto("https://www.saucedemo.com/");
     await expect(page).toHaveTitle("Swag Labs");
});