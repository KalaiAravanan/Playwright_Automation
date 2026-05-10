import { test, expect } from '@playwright/test';

    test('select and access frames', async ({ page }) => {

        await page.goto('https://app.thetestingacademy.com/playwright/frames/');

        let frammname = page.frameLocator('#frame-one');
        await frammname.locator('#RESULT_TextField-1').fill('car');
        await frammname.locator('#RESULT_TextField-2').fill('Kalaiselvi');
        
        await frammname.locator('#RESULT_RadioButton-1').selectOption('Electric');
        await frammname.locator('#RESULT_TextField-4').fill('2020');
        await frammname.locator('#RESULT_TextArea-1').fill('Its amazing car with good deal');

        await frammname.locator('#vehicle-submit').click();           
        await page.waitForTimeout(2000);

    });