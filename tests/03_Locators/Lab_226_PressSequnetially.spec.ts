import {test,expect} from '@playwright/test';

test('Verify entering firstnmame', async({page}) =>{

    await page.goto("https://awesomeqa.com/practice.html");
    
    //another way to find the texbox element
    //await page.getByRole("textbox", { name: "firstname" });

     await page.locator('[name ="firstname"]').pressSequentially("Hello" , {delay: 300});

});