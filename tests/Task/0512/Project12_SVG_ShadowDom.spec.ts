import {test,expect} from '@playwright/test';

test('SVG Shadow dom', async({page}) => {

    await page.goto('https://www.flipkart.com/search?q=&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off');
    await page.waitForTimeout(3000);
    
    //search for macmini in the search box and click on the search icon
    await page.getByPlaceholder('Search for products, brands and more').fill('macmini');
    await page.locator('svg').first().click();
    await page.waitForLoadState('networkidle'); // Wait for the search results to load

    // Sort the results by clickin on "Price -- Low to High" 
    await page.getByText('Price -- Low to High').click();
    await page.waitForLoadState('networkidle'); // Wait for the sorted results to load

    // Validate that the first product in the sorted results is visible and print its title
    const firstResult: Locator = page.locator('//div[contains(@data-id,"CPU")]/div/a[2]');
    await expect(firstResult.first()).toBeVisible({ timeout: 15000 });
    console.log(`Cheapest product title: ${await firstResult.first().textContent()}`);

    // Validate that the price of the first product is visible and print it
    const firstResultPrice: Locator = page.locator('(//div[contains(@data-id,"CPU")]/div/a/div/div)[3]');
    await expect(firstResultPrice.first()).toBeVisible({ timeout: 15000 });
    const cheapestProductTitle: string | null = await firstResultPrice.first().textContent();
    console.log(`Cheapest Macmini: ${cheapestProductTitle}`);

    await page.waitForTimeout(2000);

});
