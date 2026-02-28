import { test } from '@playwright/test';

// test("login-test", async({page}) =>{
//     await page.goto("https://practicetestautomation.com/practice-test-login/");
//     let loginInput = await page.locator("input#username");
//     //let loginInpu = await page.locator("[name='username']"); <-- within square braces you can add attributes and or html tags too
//     let password = await page.locator("input#password");
//     let submitBtn = await page.locator("button#submit");

//     await loginInput.fill("student");
//     await password.fill("Password123");
//     await submitBtn.click();
//     let logoutbtn = await page.locator("#loop-container > div > article > div.post-content > div > div > div > a");
//     await logoutbtn.click();

// });

test("login-test-2", async({page}) => {
    await page.goto("https://techbeamers.com/practice-test-login/");
    let loginInput =  await page.locator("input#username");
    let pass = await page.locator("input#password");
    let submitBtn = await page.locator("form button");
    await loginInput.fill("testuser");
    await pass.fill("password123");
    await submitBtn.click();

})
