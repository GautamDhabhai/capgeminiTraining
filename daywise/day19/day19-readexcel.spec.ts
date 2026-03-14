import {test} from '../../playwrightt/node_modules/@playwright/test'
import excel from '../../playwrightt/node_modules/exceljs';
import path from 'path';

test("readexcel", async({page}) =>{
    await page.goto("https://www.google.com");
    let book = new excel.Workbook();
    await book.xlsx.readFile(path.join(__dirname, "../../testdata/readexcel.xlsx"));
    let sheet = book.getWorksheet("Sheet1");
    let data = await sheet?.getRow(1).getCell(1).toString();
    console.log(data);

})

test("readexcel2", async({page}) =>{
    await page.goto("https://www.google.com");
    let book = new excel.Workbook();
    await book.xlsx.readFile(path.join(__dirname, "../../testdata/readexcel.xlsx"));
    let sheet = book.getWorksheet("Sheet2");
    
    for(let i = 1; i <= sheet?.actualRowCount; i++){
        for(let j = 1; j <= sheet?.actualColumnCount; j++){
            let data = await sheet?.getRow(i).getCell(j).toString();
            console.log(data);
        }
    }

})

test.only("readexcel task login", async({page}) =>{
    let book = new excel.Workbook();
    await book.xlsx.readFile(path.join(__dirname, "../../testdata/readexcel.xlsx"));
    let sheet = book.getWorksheet("Sheet3");
    
    let pageLink = await sheet?.getRow(1).getCell(1).toString();
    
    
    for(let i = 2; i <= sheet?.actualRowCount; i++){
        await page.goto(pageLink);
        for(let j = 1; j <= sheet?.actualColumnCount; j++){
            let data = await sheet?.getRow(i).getCell(j).toString();
            if(j == 1){
                await page.getByPlaceholder("Enter your name").fill(data);
            }
            if(j == 2){
               await page.getByPlaceholder("Enter your email").fill(data);
            }
            if(j == 3){
                await page.getByPlaceholder("Enter your password").fill(data);
            }
        }
        await page.getByRole("button", {name: "Register"}).click();
    }

})


