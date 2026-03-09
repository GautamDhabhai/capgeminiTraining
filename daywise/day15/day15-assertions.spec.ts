import {test, expect} from '../../playwrightt/node_modules/@playwright/test'

test("assertions, toHaveScreenshot", async({page})=> {
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    const uname = await page.locator('#username');
    await expect(uname).toBeAttached();
    await uname.fill('student');
    const pwd = await page.locator('#password');
    await expect(pwd).toBeEditable();
    await pwd.fill('password123')
    await expect(pwd).toHaveValue('password123')
    await expect(pwd).toHaveScreenshot();

})

test.only("assertions - non retrying, toContain", async({page})=> {
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    const uname = await page.locator('#username');
    await expect(uname).toBeAttached();
    await uname.fill('student');
    const pwd = await page.locator('#password');
    await expect(pwd).toBeEditable();
    await pwd.fill('password123')
    await expect(await uname.inputValue()).toContain('stud');
    //console.log(typeof(uname.inputValue));
    await expect([1,2,3,4]).toContain(3);
    const ulabel = await page.locator('//label[@for="username"]');
    let res = await expect(ulabel).toHaveText('Username');
    console.log(res);
    
    

})