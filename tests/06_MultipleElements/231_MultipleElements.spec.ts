import {test,expect} from '@playwright/test';

test.describe('Multiple elements', () => {

    test('verify mulitple elements', async ({page}) =>{
        await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");

        const allInnerTexts: string[] = await page.locator("list-group-item").allInnerTexts();
        console.log(allInnerTexts);

        for (let textlist of allInnerTexts){
            console.log(textlist);
            if(textlist == "My Account"){
                page.getByText("textlist").click();
                break;
            }
        }
    });

});