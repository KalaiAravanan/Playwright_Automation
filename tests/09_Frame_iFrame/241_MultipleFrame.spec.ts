import { test, expect } from '@playwright/test';

    test('Multiple frames', async ({ page }) => {

        await page.goto('https://app.thetestingacademy.com/playwright/frames/multi-frames');

        let mainFrame  = page.frameLocator('[name="main"]'); // Playwright Locator
        let h2text = await mainFrame.locator('h2').innerText();  
        console.log(h2text);               
       
    });