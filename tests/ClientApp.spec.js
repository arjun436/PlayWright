const {test, expect} = require('@playwright/test');

test.only('Assignment Tests', async ({page}) => {
    const userName = page.locator('input#userEmail');
    const password = page.locator('input#userPassword');
    const signInBtn = page.locator('input#login');
    const cardTitles = page.locator(".card-body b");

    await page.goto("https://rahulshettyacademy.com/client");
    await userName.fill("arjun.miryala36@gmail.com");
    await password.fill("Test1234");
    await signInBtn.click();

    await expect(page).toHaveTitle("Let's Shop");

    // console.log( await cardTitles.first().textContent());
    // console.log(await cardTitles.last().textContent());

    //wait for network idle state so we can see all the cards are loaded. no need to wait for first element to be loaded
    await cardTitles.first().waitFor();
    await page.waitForLoadState('networkidle'); // discouraged as it is flaky sometimes
 
    let allTitles = await cardTitles.allTextContents();
    console.log(allTitles);

});