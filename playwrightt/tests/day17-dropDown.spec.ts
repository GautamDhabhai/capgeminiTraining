import { test, expect } from "@playwright/test";

test("standard_dropdown", async ({ page }) => {
  await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0");
  //   let opn = await page.locator('//option[@id="opetion4"]');
  let opn = await page.locator("#select3").selectOption({ value: "Canada" });
  await expect(opn).toContain("Canada");
});


test("multi_dropdown", async ({ page }) => {
  await page.goto(
    "https://demoapps.qspiders.com/ui/dropdown/multiSelect?sublist=1",
  );
  //   let opn = await page.locator('//option[@id="opetion4"]');
  let opn = await page
    .locator("#select-multiple-native")
    .selectOption([
      { value: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops" },
      { value: "Mens Cotton Jacket" },
      { index: 5 },
    ]);

  let add = await page.getByRole("button", { name: "Add" }).click();
});


test("custom_dropdown", async ({ page }) => {
  await page.goto(
    "https://www.myntra.com/shoes?rawQuery=shoes",
  );
  let sortby = await page.locator('//div[@class="sort-sortBy"]').hover();
  let opns=await page.locator('//ul[@class="sort-list"]/li').all()
  for(let opt of opns){
        let txt = await opt.textContent()
        if(txt?.includes("Customer")){
            await opt.click();
            break;
        }
  }
});

test.only("amazon", async ({ page }) => {
  await page.goto(
    "https://www.amazon.in",
  );
 
  let srch = await page.getByRole('searchbox', {name: 'Search Amazon.in'});
  await srch.fill('Shoes');
  let searchRes = await page.locator('//div[@class="s-suggestion s-suggestion-ellipsis-direction"]').all();
  for(let it of searchRes){
    console.log(await it.textContent());
  }
});