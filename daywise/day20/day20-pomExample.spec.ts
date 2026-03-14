import {test} from '@playwright/test';
import example from '../PageObjectModel/day20-example.page';
import fs from 'fs';
import path from 'path';

let dataJsonPath = path.join(__dirname, "../testdata/data2.json");
let dataFile = fs.readFileSync(dataJsonPath, "utf-8");
let data = JSON.parse(dataFile);

test("pomExample", async({page}) =>{
    let ex = new example(page);
    for(let d of data){
        await page.goto(d.url);
        await ex.usernameTF.fill(d.username);
        await ex.passwordTF.fill(d.password);
        await ex.submitBtn.click();
    };
})