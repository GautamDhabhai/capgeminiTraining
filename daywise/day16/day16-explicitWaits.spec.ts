import {test} from '../../playwrightt/node_modules/@playwright/test'

test("explicit waits", async({page}) => {
    await page.goto('https://cafeum.netlify.app/');
    //await page.waitForTimeout(2000);
    let btn = await page.locator('//*[@id="root"]/header/button').waitFor({state:'detached'});
    //await mxlink.click();
    // await (await page.waitForSelector('//*[@id="nav-xshop"]/ul/li[2]/div/a', {timeout:3000})).click();

})

test.only("flipkart new page", async({browser}) => {
    let context = await browser.newContext();
    let page = await context.newPage();
    await page.goto('https://www.flipkart.com/search?q=shoes&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off');
    //await page.waitForTimeout(2000);
    let pg2 = await Promise.all([page.waitForNavigation(), page.locator('//div[@class="nZIRY7"]/div').first().click()])
    console.log(await page.url());
    //console.log(await pg2.url());
    
    //let price = await page.locator('//a/div[@class="_1psv1zeb9 _1psv1ze0"]/descendant::div[@class="css-175oi2r"]').last().textContent();
    //console.log(price)
    //await mxlink.click();
    // await (await page.waitForSelector('//*[@id="nav-xshop"]/ul/li[2]/div/a', {timeout:3000})).click();

})