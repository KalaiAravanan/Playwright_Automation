import { test, expect } from '@playwright/test';

test.describe('Web Table Tests', () => {

    test('Verify that Helen Bennett is actually living in the UK', async ({ page }) => {

        await page.goto('https://awesomeqa.com/webtable.html');
      
        const rows = await page.locator('//table[@id="customers"]/tbody/tr').count();
        const cols = await page.locator('//table[@id="customers"]/tbody/tr[2]/td').count();


});

});
