import {test} from '@playwright/test';
import excel from 'exceljs';
import path from 'node:path';

test("writeexcel", async({page}) =>{
    await page.goto("https://www.google.com")
    let book = new excel.Workbook();
   await book.xlsx.readFile(path.join(__dirname, "../../testdata/readexcel.xlsx"));
   let sheet = book.getWorksheet("Sheet4");
   if(!sheet){
    sheet = await book.addWorksheet("Sheet4");
   }
   sheet.getRow(1).getCell(1).value = "Added value 1";
   await book.xlsx.writeFile(path.join(__dirname, "../../testdata/readexcel.xlsx"));
   
})

test.only("amazon task", async({page}) =>{
    await page.goto("https://www.amazon.in")
    await page.locator("input#twotabsearchtextbox").fill("phones");
    let book = new excel.Workbook();
    await book.xlsx.readFile(path.join(__dirname, "../../testdata/readexcel.xlsx"));
    let sheet =  book.getWorksheet("Sheet5");
    if(!sheet){
    sheet = book.addWorksheet("Sheet5");
   }
    let data = await page.locator('//div[@class="s-suggestion s-suggestion-ellipsis-direction"]').all();
    let row = 1;
    for(let it of data){
        sheet.getRow(row).getCell(1).value = await it.textContent();
        row++;
        
    };
    await book.xlsx.writeFile(path.join(__dirname, "../../testdata/readexcel.xlsx"));    
})


