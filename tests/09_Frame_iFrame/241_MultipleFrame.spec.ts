import { test, expect } from '@playwright/test';

    test('Multiple frames', async ({ page }) => {

        await page.goto('https://app.thetestingacademy.com/playwright/frames/multi-frames');

        let mainframe =await page.frameLocator('[name = 'main']');
        let h2text = mainframe.locator('h2').innerText();
        console.log(h2text);

        let sideframe =await page.frameLocator('[name = 'side']');

        
       Page.getByText(“Click for JS Alert”)


    });