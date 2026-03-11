import {test} from '../../playwrightt/node_modules/@playwright/test'

test("keyborad actions", async({page}) => {
    await page.goto('https://demoapps.qspiders.com/ui?scenario=1');
    let inp = await page.getByRole('textbox', {name:"name"});
    await inp.press('G+a+u+t+a+m');
    await page.keyboard.press('Tab');
    await page.keyboard.press("g+a+u+t+a+m+@+g+m+a+i+l+.+c+o+m");
    await page.keyboard.press("Control+a");
    await page.keyboard.press("Control+c");
    await page.keyboard.press("Control+v");
    await page.keyboard.press('Tab');
    await page.keyboard.press('Control+v');
    await page.keyboard.press('Enter');

    

})