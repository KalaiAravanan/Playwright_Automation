import {test,expect} from '@playwright/test';

test('keyboard actions', async({page}) => {

 page.goto('https://www.toptal.com/developers/keycode');
 await page.waitForTimeout(2000);
 
 //press A in the keyboard and take the screenshot
 page.keyboard.press('A');
 await page.screenshot({ path: './tests/10_Keyboard_Hover_Drag_Drop/A.png', fullPage: true });

page.keyboard.press('ArrowLeft');
await page.screenshot({ path: './tests/10_Keyboard_Hover_Drag_Drop/ArrowLeft.png', fullPage: true });

page.keyboard.press('Shift');
await page.screenshot({ path: './tests/10_Keyboard_Hover_Drag_Drop/Shift.png', fullPage: true });

});
