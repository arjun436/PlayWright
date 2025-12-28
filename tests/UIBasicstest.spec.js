const {test, expect} = require('@playwright/test');

// browser is globally available object it is a fixture
test.only('Page Playwright test', async ({page}) => {
    console.log("Hello Playwright");
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log( await page.title());
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");

});

test.only('Browser context', async ({browser}) => {
    console.log("Hello Playwright");
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://google.com/");
    // get the title - assertion
    console.log( await page.title());
    await expect(page).toHaveTitle("Google");
});