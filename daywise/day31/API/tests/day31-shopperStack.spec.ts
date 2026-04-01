import {test} from '@playwright/test'

let loginData = {
  email: "astra@gmail.com",
  password : "1Aabcde!",
  role : "SHOPPER"
}
let baseURL = "https://www.shoppersstack.com/shopping"
let shopperId = 0;
let token: string;
let productId = 0;
let itemId = 0;
let addressId = 0;
let reviewId = 0;
let orderId = 0;

//LOGIN METHOD
test.describe("Login", () => {

    test("login", async({request}) => {
        let r1 = await request.post(`${baseURL}/users/login`, {
            data: loginData,
            ignoreHTTPSErrors: true
        });
        let res1 = await r1.json();
        console.log(res1);
        token = res1.data.jwtToken;
        shopperId = res1.data.userId;
        console.log(token);
        console.log(shopperId)
    });

});


//PRODUCTS METHOD
test.describe("Products", () => {

    test("getproducts", async({request}) => {
        let r1 = await request.get(`${baseURL}/products/alpha`, {
            ignoreHTTPSErrors: true
        });
        let res1 = await r1.json();
        productId = res1.data[0].productId;
        //console.log(productId)
    });

});


//WISHLIST METHODS
test.describe("Wishlist", () => {

    test.skip("addToWishlist", async({request}) => {
        let r1 = await request.post(`${baseURL}/shoppers/${shopperId}/wishlist`, {
            data: {
                "productId": productId,
                "quantity": 2
            },
            ignoreHTTPSErrors: true,
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        let res1 = await r1.json();
        console.log(res1);
    });

    test.skip("getWishlist", async({request}) => {
        let r1 = await request.get(`${baseURL}/shoppers/${shopperId}/wishlist`, {
            ignoreHTTPSErrors: true,
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        let res1 = await r1.json();
        console.log(res1)
    });

});


//CART METHODS
test.describe("Cart", () => {

    test.skip("addToCart", async({request}) => {
        let r1 = await request.post(`${baseURL}/shoppers/${shopperId}/carts`, {
            data: {
                "productId": productId,
                "quantity": 2
            },
            ignoreHTTPSErrors: true,
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        let res1 = await r1.json();
        console.log(res1);
    });

    test.skip("getCart", async({request}) => {
        let r1 = await request.get(`${baseURL}/shoppers/${shopperId}/carts`, {
            ignoreHTTPSErrors: true,
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        let res1 = await r1.json();
        itemId = res1.data[0].itemId;
        console.log(itemId)
        console.log(res1)
    });

    test.skip("updateCart", async({request}) => {
        let r1 = await request.put(`${baseURL}/shoppers/${shopperId}/carts/${itemId}`, {
            data: {
                "productId": productId,
                "quantity": 1
            },
            ignoreHTTPSErrors: true,
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        let res1 = await r1.json();
        console.log(res1);
    });

});

//ORDER METHODS
test.describe("Orders", () => {

    test("getOrder", async({request}) => {
        let r1 = await request.get(`${baseURL}/shoppers/${shopperId}/orders`, {
            headers: {
                Authorization: `Bearer ${token}`
            }, ignoreHTTPSErrors: true
        })

        let res1 = await r1.json();
        console.log(res1);
        orderId = res1.data[0].orderId;
        console.log(orderId)
        console.log(orderId)
        console.log(orderId)
    })

    test.skip("postOrder", async({request}) => {
        let r1 = await request.post(`${baseURL}/shoppers/${shopperId}/orders`, {
            data:{
                address: {
                    addressId: 151643,
                    name: "Gaurav Bhatt",
                    type: "Home",
                    buildingInfo: "Hno 2351",
                    streetInfo: "Gaytri Colony",
                    landmark: "Sanganer Stadium",
                    city: "Pune",
                    state: "Maharashtra",
                    country: "India",
                    pincode: "432102",
                    phone: "7890123456"
                },
                paymentMode: "COD"
            },
            headers: {
                Authorization: `Bearer ${token}`
            }, ignoreHTTPSErrors: true
        })

        let res1 = await r1.json();
        console.log(res1);
    })

    //PDF IS NOT VALID JSON WILL SOLVE THIS LATER
    // test("getOrderInvoice", async({request}) => {
    //     let r1 = await request.get(`${baseURL}/shoppers/${shopperId}/orders/${orderId}/invoice`, {
    //         headers: {
    //             Authorization: `Bearer ${token}`
    //         }, ignoreHTTPSErrors: true
    //     })

    //     let res1 = await r1.json();
    //     console.log(res1);
    // })

    test("updateOrder", async({request}) => {
        let r1 = await request.patch(`${baseURL}/shoppers/${shopperId}/orders/${orderId}`, {
            params: {
                status: "DELIVERED"
            },
            data:{
                orderId: orderId,
                shopperId: shopperId,
                landmark: "rc school"
            },
            headers: {
                Authorization: `Bearer ${token}`
            }, ignoreHTTPSErrors: true
        })

        let res1 = await r1.json();
        console.log(res1);
    })




})

//ADDRESS METHODS
test.describe.skip("Address", () => {
    test("get address", async ({ request }) => {
    let r1 = await request.get(`${baseURL}/shoppers/${shopperId}/address`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      ignoreHTTPSErrors: true,
    });

    let res1 = await r1.json();
    console.log(res1);
    addressId = res1.data[1].addressId;
  });

  test("get specific address", async ({ request }) => {
    let r1 = await request.get(`${baseURL}/shoppers/${shopperId}/address/${addressId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      ignoreHTTPSErrors: true,
    });

    let res1 = await r1.json();
    console.log(res1);
  });

  test.skip("postOrder", async({request}) => {
        let r1 = await request.post(`${baseURL}/shoppers/${shopperId}/address`, {
            data:{
                    addressId: 151643,
                    name: "Gaurav Bhatt",
                    type: "Home",
                    buildingInfo: "Hno 251",
                    streetInfo: "Gaytri Colony",
                    landmark: "Sanganer Bypass",
                    city: "Pune",
                    state: "Maharashtra",
                    country: "India",
                    pincode: "432102",
                    phone: "9876543211"
            },
            headers: {
                Authorization: `Bearer ${token}`
            }, ignoreHTTPSErrors: true
        })

        let res1 = await r1.json();
        console.log(res1);
    })

    test("updateAddress", async({request}) => {
        let r1 = await request.put(`${baseURL}/shoppers/${shopperId}/address/${addressId}`, {
            data:{
                    addressId: addressId,
                    name: "Gaurav Bhatt",
                    type: "Home",
                    buildingInfo: "Hno C-34",
                    streetInfo: "Gaytri Nagar",
                    landmark: "Sanganer Bypass",
                    city: "Pune",
                    state: "Maharashtra",
                    country: "India",
                    pincode: "432102",
                    phone: "9876543211"
            },
            headers: {
                Authorization: `Bearer ${token}`
            }, ignoreHTTPSErrors: true
        })

        let res1 = await r1.json();
        console.log(res1);
    })


})


//REVIEW METHODS
test.describe.skip("Review", async () => {
  test.skip("get reviews", async ({ request }) => {
    let r1 = await request.get(`${baseURL}/reviews/${productId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      ignoreHTTPSErrors: true,
    });

    let res1 = await r1.json();
    console.log(res1);
  });

  //create a new review of prod
  test("make a  reviews", async ({ request }) => {
    let r1 = await request.post(`${baseURL}/reviews`, {
      params: {
        productId: productId,
      },
      data: {
        description: "Mid af product",
        heading: "My review",
        rating: 2.5,
        shopperId: shopperId,
        shopperName: "Gaurav Bhatt",
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
      ignoreHTTPSErrors: true,
    });

    let res1 = await r1.json();
    reviewId = res1.data.reviewId;
    console.log(res1);
  });

  test("update your review", async ({ request }) => {
    let r1 = await request.put(`${baseURL}/reviews/${reviewId}`, {
      params: {
        productId: productId,
      },
      data: {
        description: "ok",
        heading: "My review",
        rating: 3,
        shopperId: shopperId,
        shopperName: "Gaurav Bhatt",
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
      ignoreHTTPSErrors: true,
    });

    let res1 = await r1.json();
    console.log(res1);
  });
});