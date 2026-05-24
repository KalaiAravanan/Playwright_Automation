import { test, expect } from '@playwright/test';

    test('Verify Rohan.Mehta exists in table', async ({ page }) => {

        await page.goto('https://app.thetestingacademy.com/playwright/webtable.html');
        await page.locator('#employee-search').fill('Rohan.Mehta');
        await page.locator('#select-cloud-qa').click();        
        await page.waitForTimeout(3000);
       
        await page.locator("//td[text()='Aarav.Sharma']/preceding-sibling::td/input[@type='checkbox']").click();

        await page.locator("tr:has(td:text('Rohan.Mehta'))").locator("td").first().click();

         
        
    });