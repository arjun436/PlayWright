const {test, expect} = require('@playwright/test');

// browser is globally available object it is a fixture
test('Page Playwright test', async ({page}) => {
    const userName = page.locator('input#username');
    const password = page.locator('input#password');
    const signInBtn = page.locator('#signInBtn');
    const cardTitles = page.locator(".card-body a");
    console.log("Hello Playwright");
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log( await page.title());
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");

    await userName.fill("rahulshetty");
    await password.fill("learning");
    await signInBtn.click();
    let text = await page.locator("[style*='block']").textContent() //.waitFor(); // explicit wait
    console.log(text);
    let failMessage = "Incorrect username/password.";
    expect(text).toContain(failMessage);
    expect(page.locator("[style*='block']")).toContainText(failMessage);

    await userName.fill("");
    await userName.fill("rahulshettyacademy");
    await signInBtn.click();

    console.log( await page.locator(".card-body a").nth(1).textContent());
    console.log( await page.locator(".card-body a").first().textContent());
    console.log( await page.locator(".card-body a").last().textContent());

    // this will only work in Playwright if only one of the elements is visible, since it is array of elements. it will show zero elementsif no element is visble and not autowait for any element to be visible
    let allTitles = await cardTitles.allTextContents();
    console.log(allTitles);
});

test('Browser context', async ({browser}) => {
    console.log("Hello Playwright");
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://google.com/");
    // get the title - assertion
    console.log( await page.title());
    await expect(page).toHaveTitle("Google");
});

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