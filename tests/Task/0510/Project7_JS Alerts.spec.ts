import{test,expect} from '@playwright/test'

test('hover over menu', async({page}) => {

     // Navigate to the Hover-only menu page
    await page.goto('https://app.thetestingacademy.com/playwright/widgets/hover-menu');
    
    // Hover on the 'Add-ons' menu item
    await page.getByTestId('nav-add-ons').hover();

     // Click the Wifi on the menuitem
    await page.getByTestId('test-id-Wifi').click();

    //validate the output field contains the text Wi-Fi
    let verifyTest =await page.getByTestId('hover-output').innerText();
    expect(verifyTest).toContain('Wi-Fi');

});