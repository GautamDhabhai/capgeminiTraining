import {test} from '@playwright/test';
import jsonData from '../testdata/day21amazon.json';
import amazonE2E from '../PageObjectModel/day21-amazonE2E.page';

test("amazonE2E", async({page}) => {
    let amazon = new amazonE2E(page);
    await page.goto(jsonData.url);
    await amazon.searchProduct(jsonData.productName);
    let page2 = await amazon.selectProductRamFilter();
    await amazon.selectQuantity("3", page2);
    await amazon.addToCartFxn(page2);

})
