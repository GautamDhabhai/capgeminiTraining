import {test} from '@playwright/test'

test.skip("login", async({request}) => {
    let r1 = await request.get("https://petstore.swagger.io/v2/user/login", {
        params:{
            username:"gautam@gmail.com",
            password:"@A24gautam"
        }
    });
    let res1 = await r1.json();
    console.log(res1);

});

test.skip("createUser", async({request}) => {
    let r1 = await request.post("https://petstore.swagger.io/v2/user", {
        data: {
        id: 0,
        username: "gauravvA24",
        firstName: "gaurav",
        lastName: "verma",
        email: "gauravv@gmail.com",
        password: "@A24gaurav",
        phone: "9876543210",
        userStatus: 0
    },
    headers: {
         username:"gautam@gmail.com",
        password:"@A24gautam"
    }

    })
    let res1 = await r1.json();
    console.log(res1);
})
