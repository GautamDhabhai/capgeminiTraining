import { test } from "@playwright/test"

test("Custom Waits", async ({ page }) => {
  await page.goto("https://www.amazon.in");
  let input = await page.waitForFunction( ()=> {
    return document.querySelector('input[type=text]:nth-child(5)');
  })
  //await input.fill("Hello");
  
});