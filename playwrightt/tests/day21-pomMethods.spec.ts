
import {test} from '@playwright/test';
import pomMethods from '../PageObjectModel/day21-pomMethods.page';
import fs from 'fs';
import path from 'path';

let dataJsonPath = path.join(__dirname, "../testdata/data2.json");
let dataFile = fs.readFileSync(dataJsonPath, "utf-8");
let data = JSON.parse(dataFile);

test("Methods", async({page}) =>{
    let methods = new pomMethods(page);
    for(let d of data){
        await page.goto('https://practicetestautomation.com/practice-test-login/')
        await methods.login(d.username, d.password);
    };
})