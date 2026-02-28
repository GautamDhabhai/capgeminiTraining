import { test } from '@playwright/test';

test("css selector", async({page}) => {
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    // syntax -> await page.locator("selector").action();
    
});