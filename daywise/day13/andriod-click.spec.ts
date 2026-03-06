import {test} from '../../playwrightt/node_modules/@playwright/test'

test("andriod-12", async ({page}) => {
    await page.goto("https://www.amazon.in");
    let srch = await page.locator('//input[@id="twotabsearchtextbox"]')
    await srch.fill("Phones");
    let srchBtn = await page.locator('//input[@id="nav-search-submit-button"]')
    await srchBtn.click();
    let radioBtn = await page.locator('//li[@id="p_n_g-1003517064111/51258733031"]/span/a/div/label/i');
    await radioBtn.click();
})