import {test} from '@playwright/test';
import fs from 'fs';
import path from 'path';


let dataJsonPath = path.join(__dirname, "../../testdata/data2.json");
let dataFile = fs.readFileSync(dataJsonPath, "utf-8");
let data = JSON.parse(dataFile);

// test("datajson", async({page}) =>{
//     data.forEach((d: {greet:String}) => {
//         console.log(d.greet);
        
//     })
    
// })

test("test0", async({page}) =>{
  await page.goto(data.url);
  await page.locator("#username").fill(data.username);
  await page.locator("#password").fill(data.password);
  await page.locator("#submit").click();  
})

test.only("test", async({page}) =>{
  for(let d of data){
    let url = d.url;
    let username = d.username;
    let password = d.password;
    await page.goto(url);
    console.log(await page.title()); 
  }
})