import {test} from '@playwright/test';

test("notifications", async({browser}) =>{
    let context = await browser.newContext({permissions: ["notifications"]});
    let page = await context.newPage();
    await page.goto('https://demoapps.qspiders.com/ui/browserNot?sublist=0');
    let noti = await page.locator("#browNotButton");
    await noti.click();
    let result = await page.evaluate(() => {
        return Notification.requestPermission();
    })
    //console.log(result);
    
})