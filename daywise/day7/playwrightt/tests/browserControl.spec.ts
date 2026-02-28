import { test } from "@playwright/test";

// test("borwser control", async ({page}) => {
//     let size = await page.viewportSize();
//     console.log(size);
//     //await page.setViewportSize({width: 50000, height: 50000});
//     await page.goto("https://cafeum.netlify.app/");
//     console.log(await page.title());
//     page.close();
    
    
// })

// test("borwser close", async ({browser}) => {
//     let context = await browser.newContext();
//     let page = await context.newPage();
//     let size = await page.viewportSize();
//     console.log(size);
//     //await page.setViewportSize({width: 50000, height: 50000});
//     await page.goto("https://cafeum.netlify.app/");
//     console.log(await page.title());
//     browser.close(); 
// })

test("page screenshot", async ({page}) => {
    await page.goto("https://www.google.com");
    let time = new Date().getTime();
    await page.screenshot({path: `screenshots/google-home-${time}.png`}); //this will save the screenshot in the screenshots folder with the name google-home and the current time in milliseconds. This will ensure that the screenshot is unique and does not overwrite any existing screenshots.

    //console.log("await page.url()"); //this will print the url of the page
});


//logging cookies
// test("logging cookies", async ({browser}) => {
//     let context = await browser.newContext();
//     let page = await context.newPage();
//     await page.goto("https://www.google.com");
//     console.log(await context.cookies());
// })

 