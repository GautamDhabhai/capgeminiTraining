import {test} from '../../playwrightt/node_modules/@playwright/test'


test("getby", async({page}) => {

    //getbylabel and text
    // await page.goto("https://practicetestautomation.com/practice-test-login/");
    // await page.getByLabel('Username', {exact:true}).fill('student');
    // await page.getByLabel('Password', {exact:true}).fill('Password123');
    // await page.getByText('Submit').first().click();

    //getbyrole
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    await page.getByRole('textbox', {name:"username"}).fill('student');
    await page.getByRole('textbox', {name:"password"}).fill('Password123');
    await page.getByRole('button').click();


   
    

})

