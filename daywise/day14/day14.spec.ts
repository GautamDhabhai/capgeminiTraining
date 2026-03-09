import {test} from '../../playwrightt/node_modules/@playwright/test'

test("fetching price", async({page}) => {
    await page.goto("https://www.amazon.in/s?k=phones&crid=29H3XL7KGZQH3&sprefix=phone%2Caps%2C515");
    let srch = page.locator("input#twotabsearchtextbox");
    await srch.fill("phones");
    let srchBtn =  page.locator("//input[@type='submit']");
    await srchBtn.click();
    let price = page.locator('//div[@data-cy="title-recipe" and @class="a-section a-spacing-none puis-padding-right-small s-title-instructions-style puis-desktop-list-title-instructions-style"]/a/h2[@aria-label="POCO C71, Power Black (4GB, 64GB)"]/span | //a[@aria-describedby="price-link" and @href="/POCO-C71-Power-Black-64GB/dp/B0F3XP9GRT/ref=sr_1_3?crid=29H3XL7KGZQH3&dib=eyJ2IjoiMSJ9.g4DfZlfOrS3dNw4eMAOFQV84yeoYYTsB_nAAQkwr_hjZZwOc2ZIzGxdUAF4AKAI9eR9Kj4PWd1NKJGELt0eRgDmmFzjqetU671mhWNQjAMjOErpsTLq5P72D2_JhHIWawPYiLQrjgqBjzFsGNzmxLoh_DUxMq6mMr1w_739pR6ivyLaQDeQDBCLTjZMiLDr5Bagn9CnmUSu-Fo7EpJ_4PtgD9hZjme4YUpUUZhb7sBM.tWkxFvNTKAkyDXcovzt0HoHbMq-PA9TiKp6CQV6bZHo&dib_tag=se&keywords=phones&qid=1772859536&sprefix=phone%2Caps%2C515&sr=8-3"]/span/span[@class="a-offscreen"]')
    await price.waitFor();
    console.log(await price.allInnerTexts());
    

})

