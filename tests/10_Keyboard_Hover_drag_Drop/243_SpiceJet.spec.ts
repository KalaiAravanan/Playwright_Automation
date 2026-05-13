import {test,expect} from '@playwright/test';

test('verify spicejetard actions', async({page}) => {

    await page.goto('https://www.spicejet.com');
    await page.waitForTimeout(3000);

    await page.getByText('Add-ons', {exact: true}).hover();
    await page.getByText('FlyEarly').click();
    await page.waitForTimeout(3000);
    
    //another url has hover menu    
    await page.goto('https://app.thetestingacademy.com/playwright/widgets/hover-menu');
    await page.waitForTimeout(3000);

    await page.getByText('Add-ons', {exact: true}).hover();
    await page.getByText('test-id-Wifi').click();  
    
    let result = await page.getByTestId('hover-output');
    await expect(result).toHaveText('Wifi');
    
});