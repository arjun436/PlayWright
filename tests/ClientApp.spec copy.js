const {test, expect} = require('@playwright/test');

test.only('Assignment', async ({page}) => {
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
    await page.waitForLoadState('networkidle');
 
    let allTitles = await cardTitles.allTextContents();
    console.log(allTitles);

});