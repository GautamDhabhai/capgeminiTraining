import {test} from '@playwright/test'

test("frames", async({page}) =>{
    await page.goto('https://ui.vision/demo/webtest/frames//');
    let frames = await page.frames();
    console.log(frames.length);

    for(let it of frames){
        console.log(await it.title());
    }
    await page.title();

    //--------------frame3--------------

    
})

test("frame2", async({page}) =>{
    await page.goto('https://ui.vision/demo/webtest/frames//');
    // let frames = await page.frames();
    // console.log(frames.length);

    // for(let it of frames){
    //     console.log(await it.title());
    // }
    // await page.title();

    //--------------frame3--------------

    let frame2 = page.frame({url: 'https://ui.vision/demo/webtest/frames//frame_2.html'});

    await frame2?.locator('//input').fill("Gautam");
    
    // let frame1 = await page.locator('//html/frameset/frame[1]').contentFrame();
    // await frame1.locator('//input').fill("hello");
})

//frame is used to return a frame object
//contentFrame() turns a iframe element into frame object
//frameLocator() is used to directly access elements inside a iframe

test.only("frame3", async({page}) =>{
    await page.goto('https://ui.vision/demo/webtest/frames//');
    let frame3 = await page.frameLocator('//frame[@src="frame_3.html"]');
    await frame3.frameLocator('iframe').locator('//div[@id="i21"]').click();
   

    
})
