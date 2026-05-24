import { test, expect } from '@playwright/test';

    test('Select Programming language & years of experience', async({page}) => {
        page.goto('https://www.rahulshettyacademy.com/AutomationPractice/');
        page.locator('#lang-trigger').click();
        //let newtext = await page.locator('#lang-trigger').textContent();
        //console.log(newtext);
    });

    