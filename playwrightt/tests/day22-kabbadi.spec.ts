import {test} from '@playwright/test'

test("kabbadi", async({page}) => {
    await page.goto('https://www.prokabaddi.com/schedule-fixtures-results?tab=recent')

    let elems = await page.locator('//div[@class="fixtures-listing"][1]/div[1]/h2 | //div[@class="fixtures-listing"][1]/div[2]/div[@class="fixtures-group"]/div[@class="fixtures-element"][1]/div[@class="element element1"]/p[@class="match-count"] | //div[@class="fixtures-listing"][1]/div[2]/div[@class="fixtures-group"]/div[@class="fixtures-element"]/div[@class="element element2"]/div[@class="element-wrap"]/a//div[@class="team-info"]//p[@class="team-name"] | //div[@class="fixtures-listing"][1]/div[1]/h2 | //div[@class="fixtures-listing"][1]/div[2]/div[@class="fixtures-group"]/div[@class="fixtures-element"][1]/div[@class="element element1"]/p[@class="match-count"] | //div[@class="fixtures-listing"][1]/div[2]/div[@class="fixtures-group"]/div[@class="fixtures-element"]/div[@class="element element2"]/div[@class="element-wrap"]/a//p[@class="score"] | //div[@class="fixtures-listing"][1]/div[1]/h2 | //div[@class="fixtures-listing"][1]/div[2]/div[@class="fixtures-group"]/div[@class="fixtures-element"][1]/div[@class="element element1"]/p[@class="match-count"] | //div[@class="fixtures-listing"][1]/div[2]/div[@class="fixtures-group"]/div[@class="fixtures-element"]/div[@class="element element3"]/p').allTextContents();

    for(let text of elems){
        console.log(text);
    }
})



//div[@class="fixtures-listing"][1]/div[1]/h2 | //div[@class="fixtures-listing"][1]/div[2]/div[@class="fixtures-group"]/div[@class="fixtures-element"][1]/div[@class="element element1"]/p[@class="match-count"] | //div[@class="fixtures-listing"][1]/div[2]/div[@class="fixtures-group"]/div[@class="fixtures-element"]/div[@class="element element2"]/div[@class="element-wrap"]/a//div[@class="team-info"]//p[@class="team-name"] | //div[@class="fixtures-listing"][1]/div[1]/h2 | //div[@class="fixtures-listing"][1]/div[2]/div[@class="fixtures-group"]/div[@class="fixtures-element"][1]/div[@class="element element1"]/p[@class="match-count"] | //div[@class="fixtures-listing"][1]/div[2]/div[@class="fixtures-group"]/div[@class="fixtures-element"]/div[@class="element element2"]/div[@class="element-wrap"]/a//p[@class="score"] | //div[@class="fixtures-listing"][1]/div[1]/h2 | //div[@class="fixtures-listing"][1]/div[2]/div[@class="fixtures-group"]/div[@class="fixtures-element"][1]/div[@class="element element1"]/p[@class="match-count"] | //div[@class="fixtures-listing"][1]/div[2]/div[@class="fixtures-group"]/div[@class="fixtures-element"]/div[@class="element element3"]/p