import { test, expect } from "@playwright/test";

test("browser_popup_tab", async({browser}) =>{
    let context = await browser.newContext();
    let page = await context.newPage();
    await page.goto('https://demoapps.qspiders.com/ui/browser/newTab?sublist=1');
    let page2promise  = page.waitForEvent('popup');
    await page.locator('//button[text()="view more"][1]').first().click();
    const page2 = await page2promise;
    let price = await page2.locator('//div/p[@class="text-gray-800 font-semibold text-lg mb-3"]').textContent();
    console.log(price);
    await page2.close();
    page2promise = page.waitForEvent('popup');
    await page.locator('//button[text()="view more"][1]').first().click();
    const page3 = await page2promise;
    let price3 = await page3.locator('//div/p[@class="text-gray-800 font-semibold text-lg mb-3"]').textContent();
    console.log(price3);
    // await page3.close();

    // let [page2] = await Promise.all([page.waitForEvent('popup'), page.locator('//button[text()="view more"][1]').first().click()]);
    // let price = await page2.locator('//div/p[@class="text-gray-800 font-semibold text-lg mb-3"]').textContent();
    // console.log(price);

})