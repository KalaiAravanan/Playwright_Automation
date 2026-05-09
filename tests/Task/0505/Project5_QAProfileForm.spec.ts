import{test,expect} from '@playwright/test'

test('verify element search', async({page}) => {

    //navigate to the profile form page
    await page.goto('https://app.thetestingacademy.com/playwright/tables/practice');
  
    //enter first name, last name and select gender
    await page.getByTestId('first-name').fill('Kalaiselvi');
    await page.getByTestId('last-name').fill('Pasupathy');
    await page.getByTestId('gender-female').click();

     //years of experience, profession and tool
    await page.locator('#years-experience').selectOption({ index: 6 });
    await page.getByTestId('profession-manual').click();
    await page.getByTestId('tool-selenium').click();

    await page.getByTestId('continent-north-america').click();    
    await page.getByTestId('profile-submit').click();    
    
});