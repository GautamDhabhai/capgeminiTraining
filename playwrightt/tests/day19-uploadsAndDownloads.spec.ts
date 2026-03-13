import {test, expect} from '@playwright/test';
import path from 'node:path';


test("uploads and downloads", async({page}) =>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    let input = await page.locator("#singleFileInput").setInputFiles("C:/Users/Gautam Dhabhai/Desktop/t7a/capgeminiTasksAssignments/playwrightt/tests/tempFiles/demo.txt");
    let btn = await page.getByRole('button', {name: "Upload Single File"}).click();
    await page.waitForTimeout(2000);
    
    
})

test("uploads and downloads multiple files", async({page}) =>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    let input = await page.locator("#multipleFilesInput").setInputFiles(["C:/Users/Gautam Dhabhai/Desktop/t7a/capgeminiTasksAssignments/playwrightt/tests/tempFiles/demo.txt", "C:/Users/Gautam Dhabhai/Desktop/t7a/capgeminiTasksAssignments/playwrightt/tests/tempFiles/demo.xls", "D:/capgem training/docker-prac/Dockerfile"]);
    let btn = await page.getByRole('button', {name: "Upload Multiple File"}).click();
    console.log(__dirname)
    await page.waitForTimeout(2000);
    
    
})

test("uploads and downloads relative path", async({page}) =>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    let input = await page.locator("#singleFileInput").setInputFiles(path.join(__dirname, "./tempFiles/demo.txt"));
    let btn = await page.getByRole('button', {name: "Upload Single File"}).click();
    console.log(__dirname)
    await page.waitForTimeout(2000);
    
    
})

test("uploads and downloads relative path multiple files", async({page}) =>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    let input = await page.locator("#multipleFilesInput").setInputFiles([path.join(__dirname, "./tempFiles/demo.txt"), path.join(__dirname, "./tempFiles/demo.xls")]);
    let btn = await page.getByRole('button', {name: "Upload Multiple File"}).click();
    console.log(__dirname)
    await page.waitForTimeout(2000);
    
})

test.only("popup_download", async ({browser}) => {
    let downloadFolder = "C:/Users/Gautam Dhabhai/Desktop/t7a/capgeminiTasksAssignments/playwrightt/tests/tempFiles"
    let context = await browser.newContext();
    let page = await context.newPage();
    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0");
    await page.getByPlaceholder('Enter text here').fill("ora ora ora ora ora");
    await page.getByPlaceholder('Filename').fill('temptext.txt');
    let [downloadFile] = await Promise.all([page.waitForEvent('download'), page.locator('#downloadButton').click()]);
    let filename = downloadFile.suggestedFilename(); //<- this is the name of the file that is downloaded
    console.log(filename);
    await downloadFile.saveAs(path.join(downloadFolder, filename));
})
    
    
