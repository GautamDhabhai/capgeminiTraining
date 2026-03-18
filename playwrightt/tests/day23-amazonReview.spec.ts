import {test} from '@playwright/test';
import amazonE2E from '../PageObjectModel/day21-amazonE2E.page';

test("amazon review", async({page}) => {
    const amazon = new amazonE2E(page);
    await page.goto("https://www.amazon.in/");
    await amazon.searchProduct("mocha pot");
    const page2 = await amazon.selectProduct();
    await amazon.giveReview(page2);
})