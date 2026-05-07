# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Task\0507\Project6_WebTables.spec.ts >> verify element search
- Location: tests\Task\0507\Project6_WebTables.spec.ts:3:5

# Error details

```
Error: locator.click: Test ended.
Call log:
  - waiting for getByText('Select Cloud QA', { exact: true })

```

# Test source

```ts
  1  | import{test,expect} from '@playwright/test'
  2  | 
  3  | test('verify element search', async({page}) => {
  4  | 
  5  |     await page.goto('https://app.thetestingacademy.com/playwright/webtable');
  6  |     await page.locator('#employee-search').fill('Kabir')
  7  |     //await page.getByTestId('select-cloud-qa').click();
> 8  |     page.getByText('Select Cloud QA', { exact: true }).click();
     |                                                        ^ Error: locator.click: Test ended.
  9  |     
  10 | });
```