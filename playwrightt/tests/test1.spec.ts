import {test} from '@playwright/test';

// test("title", () => {
//     console.log("Hello World");
// })

// test("title2", () => {
//     console.log("Hello World");
// })


// test("title3", () => {
//     console.log("Hello World");
// })

//some people getting 6 worker for 9 test some are getting 4 worker some are getting 9 this is because of the way playwright is designed to run tests in parallel. The number of workers is determined by the number of CPU cores available on the machine running the tests. Playwright will automatically use all available cores to run tests in parallel, which can lead to different numbers of workers being used on different machines.

//fixtures -: its a setup block of code which is reusebale
//5 types of fixtures in playwright
//1. page
// test("title",async ({page}) => {
//     //goto

//     await page.goto("https://www.amazon.in");
//     await page.locator("input#twotabsearchtextbox").fill("shoes");
// })


//2. browser
// test("title",async ({browser}) => {
//     //goto
//     let context = await browser.newContext();
//     let page = await context.newPage();
//     await page.goto("https://www.amazon.in");
//     await page.locator("input#twotabsearchtextbox").fill("shoes");
// })


//3. context
test("title",async ({context}) => {
    //goto
    let page = await context.newPage();
    await page.goto("https://www.amazon.in");
 
    await page.locator("input#twotabsearchtextbox").fill("shoes");

    let page2 = await context.newPage();
    await page2.goto("https://www.amazon.in");
    await page2.pause();

    await page2.locator("input#twotabsearchtextbox").fill("shirts");


})


//4. browserName
// test("title",async ({browser, browserName}) => {
//     //goto
//     console.log(`This is the browser name: ${browserName}`);
//     let context = await browser.newContext();
//     let page = await context.newPage();
//     await page.goto("https://cafeum.netlify.app/");

//     await page.locator("#root > main > div.coffee-grid > button:nth-child(6)").click();

//     await page.locator("#coffee-list").selectOption("Chai");

//     await page.locator("#root > main > input").fill("25");

//     await page.locator("#hours-select").selectOption("2");

//     await page.locator("#root > main > button").click();

    
// })
//5. request
