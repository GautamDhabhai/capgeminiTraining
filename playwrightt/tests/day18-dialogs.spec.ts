import {test} from '@playwright/test'

test("dialogs", async({page}) =>{
    
    await page.goto('https://testautomationpractice.blogspot.com/');
    page.once("dialog", async(dialog) => {
        await page.waitForTimeout(2000);
        await dialog.accept();
    })
    let alert1 = await page.locator('#alertBtn').click();

    page.once("dialog", async(dialog) => {
        await page.waitForTimeout(2000);
        await dialog.accept();
    })
    let confirmation = await page.locator('#confirmBtn').click();

    page.once("dialog", async(dialog) => {
        await page.waitForTimeout(2000);
        await dialog.accept('Gautam');
    })
    let prompt1 = await page.locator('#promptBtn').click();
    //page on("dialog", () => {})
    //page.once("event", () => {})
    

    
})

test("dialogs with once and cond", async({page}) =>{
    page.on("dialog", async(dialog) => {

        if(dialog.type()=='alert'){
            await page.waitForTimeout(2000);
            await dialog.accept();
        }
        else if(dialog.type()=="confirm"){
            await page.waitForTimeout(2000);
            await dialog.dismiss();
            console.log(dialog.message());
        }
        else if(dialog.type()=="prompt"){
            await page.waitForTimeout(2000);
            await dialog.accept("Gautam")
        }
        
    })
    await page.goto('https://testautomationpractice.blogspot.com/');
    
    let alert1 = await page.locator('#alertBtn').click();

    
    let confirmation = await page.locator('#confirmBtn').click();

   
    let prompt1 = await page.locator('#promptBtn').click();
    await page.waitForTimeout(3000);
    //page on("dialog", () => {})
    //page.once("event", () => {})
    

    
})


test.only("prompt conditions", async({page}) =>{
    page.on("dialog", async(dialog) => {

        if(dialog.defaultValue()=='Harry Potter'){
            await page.waitForTimeout(2000);
            console.log(await dialog.defaultValue());
            await dialog.accept();
        }
        
        else{
            await page.waitForTimeout(2000);
            await dialog.accept("Gautam")
        }
        
    })
    await page.goto('https://testautomationpractice.blogspot.com/');
    
   

   
    let prompt1 = await page.locator('#promptBtn').click();
    await page.waitForTimeout(3000);
    //page on("dialog", () => {})
    //page.once("event", () => {})
    

    
})