import { test } from "@playwright/test";
//annotations
//we are adding some extra labels to our code, which can be used by the compiler to check for errors and provide better tooling support.

//types of annotations
/*
skip -: it is used to skip a test case, which means that the test case will not be executed when the test suite is run.

only -: it is used to run only a specific test case, which means that only that test case will be executed when the test suite is run.

fixme -: it is used to mark a test case as broken, which means that the test case will be executed but will be marked as failed.

describe -: it is used to group related test cases together, which can help to organize the test suite and make it easier to read.

fail -: it is used to mark a test case as expected to fail, which means that the test case will be executed but will be marked as failed if it does not fail as expected.

slow -: it is used to mark a test case as slow, which means that the test case will be executed but will be marked as slow if it takes longer than a specified time to execute.

setTimeout -: it is used to set a timeout for a test case, which means that the test case will be marked as failed if it takes longer than the specified time to execute.
*/

test("test1", async () => {
    console.log("TEST1");
});

test.describe("test2", async () => {
    //console.log("TEST2");
    //we can also add test cases inside the describe block, which will be executed as part of the describe block. This can help to group related test cases together and make it easier to read the test suite.
    //we cannot pass any fixture inside the describe block, we can only pass it inside the test case. This is because the describe block is used to group related test cases together, and it does not have access to the fixtures that are defined in the test case.
    test("test2.1", async () => {
        console.log("TEST2.1");
        //in this you can use fixtures like page, browser, context, etc. which are defined in the test case.
    });
    test("test2.2", async () => {
        console.log("TEST2.2");
    });
});

test("test3", async () => {
    test.slow();
    console.log("TEST3");
});

test("test4", async () => {
    console.log("TEST4");
});

test.only("test5", async () => {
    console.log("TEST5");
    test.setTimeout(45000);
});

