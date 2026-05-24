import { test, expect } from '@playwright/test';

    test('Verify Row count', async ({ page }) => {

         await page.goto('https://awesomeqa.com/webtable.html');
      
        //const rows = await page.locator('//table[@summary="Sample Table"]/thead/tr').count();
        //console.log(rows);

        const rows = await page.locator('table[summary="Sample Table"] tbody tr');
        const rowCount = await rows.count();
        console.log(rowCount);

        // Playwright Native Locator Strategy 

        for (let i = 1; i <= rowCount; i++) {
            const rowData = await rows.nth(i).locator('td').allInnerTexts();
            console.log(`Row ${i + 1}:`, rowData);
        }

    });
