import {test} from '../../playwrightt/node_modules/@playwright/test'

// test.beforeAll(async() => {
//     console.log("before all");
// })

test.beforeEach(async() => {
    console.log("before each");
})

// test.afterEach(async() => {
//     console.log("after each");
// })

// test.afterAll(async() => {
//     console.log("after all");
// })

test("test1", async({page}) => {
    console.log("test1");
})

test("test2", async({page}) => {
    console.log("test2");
})
