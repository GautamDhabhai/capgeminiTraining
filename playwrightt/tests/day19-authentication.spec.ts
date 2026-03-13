import {test, expect} from '@playwright/test';

test("authentication", async({browser}) =>{
    let context = await browser.newContext({httpCredentials:{username:"admin", password: "admin"}}); //this is a window handler
    let page = await context.newPage();
    await page.goto('https://basic-auth-git-main-shashis-projects-4fa03ca5.vercel.app/');
    //this site has sign in popup like a prompt so for this we have to use browser context httpCredentials

    
    
})

test.only("authentication and assertions", async({browser}) =>{
    let context = await browser.newContext({httpCredentials:{username:"admin", password: "admin"}});
    let page = await context.newPage();
    await page.goto('https://the-internet.herokuapp.com/basic_auth');
    let h2 = await page.locator('//h3');
    await expect(h2).toContainText('Basic Auth');
    let para = await page.locator('//p');
    await expect(para).toContainText('Congratulations! You must have the proper credentials.');
})