import {test} from '../../playwrightt/node_modules/@playwright/test'

test("multi tabs", async ({ browser }) => {
  let context = await browser.newContext();
  let page = await context.newPage();
  await page.goto('https://www.flipkart.com/search?q=shoes&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off');
//   let page2 = await context.newPage();
//   await page2.goto('https://www.flipkart.com')
//await page.getByPlaceholder('Search for Products, Brands and More').first().click();
//await page.keyboard.type("shoes");
//await page.keyboard.press("Enter");
let [page2] = await Promise.all([page.waitForEvent('popup'), page.locator('//img[@class="MZeksS"]').first().click()]);

// console.log(page);
// console.log('-----------------------------------------------')
// console.log(page2)
});

test("browser_popup_window", async({browser}) =>{
    let context = await browser.newContext();
    let page = await context.newPage();
    await page.goto('https://demoapps.qspiders.com/ui/browser?sublist=0');
    let [page2] = await Promise.all([page.waitForEvent('popup'), page.locator('//button[text()="view more"][1]').first().click()]);
    let price = await page2.locator('//div/p[@class="text-gray-800 font-semibold text-lg mb-3"]').textContent();
    console.log(price);

})

test("browser_popup_tab", async({browser}) =>{
    let context = await browser.newContext();
    let page = await context.newPage();
    await page.goto('https://demoapps.qspiders.com/ui/browser/newTab?sublist=1');
    let [page2] = await Promise.all([page.waitForEvent('popup'), page.locator('//button[text()="view more"][1]').first().click()]);
    let price = await page2.locator('//div/p[@class="text-gray-800 font-semibold text-lg mb-3"]').textContent();
    console.log(price);

})

test.only("popup_download", async ({browser}) => {
    let context = await browser.newContext();
    let page = await context.newPage();
    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0");
    await page.getByPlaceholder('Enter text here').fill("ora ora ora ora ora");
    await page.getByPlaceholder('Filename').fill('temptext.txt');
    let [page2] = await Promise.all([page.waitForEvent('download'), page.locator('#downloadButton').click()]);
})

//waitfor()
//waitforevent()
//waitfornavigation()