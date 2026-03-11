import {test} from '../../playwrightt/node_modules/@playwright/test'

test("mouse actions - hover", async({page}) => {
    await page.goto('https://demoapps.qspiders.com/ui/mouseHover?sublist=0');
    let info = await page.locator('//img[@class="w-5 h-5 mt-5 ml-3 cursor-pointer "]').hover();

})

test("mouse actions - hold", async({page}) => {
    await page.goto('https://demoapps.qspiders.com/ui/clickHold?sublist=0');
    let circle = await page.locator('//div[@id="circle"]').hover();
    await page.mouse.down();
    await page.waitForTimeout(3000);
    await page.mouse.up();
    await page.waitForTimeout(2000);
})

test("mouse actions - disabled", async({page}) => {
    await page.goto('https://demoapps.qspiders.com/ui/button/buttonDisabled?sublist=4');
    //await page.locator('//input[@id="submit"]').click({force:true}); --> this wont work
    let btnDisabled = await page.locator('//input[@id="submit"]');
    await btnDisabled.dispatchEvent('click');
    
})

test("mouse actions - drag using hover", async({page}) => {
    await page.goto('https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2');
    let mobileCharger = await page.getByText('Mobile Charger');
    await mobileCharger.hover();
    await page.mouse.down();
    let mobilediv = await page.locator('//div[text()="Mobile Accessories"]');
    await mobilediv.hover();
    let mobileCover = await page.getByText('Mobile Cover');
    await mobileCover.dragTo(mobilediv);
    let lapDiv = await page.locator('//div[text()="Laptop Accessories"]');

    
    
})

test.only("mouse actions - scrolling", async({page}) => {
    await page.goto('https://demoapps.qspiders.com/ui/scroll/newTabVertical');
    let chck = await page.locator('//input[@type="checkbox"]');
    await chck.scrollIntoViewIfNeeded(); //if you just use locator it wont scroll on click or other action it will scroll but if you want to scroll to locator without action use scrollIntoViewIfNeeded 
    await chck.click();
    

    
    
})