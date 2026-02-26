// import {add} from "./prac";
// import { Animal } from "./prac";

// let monkey = new Animal("monkey","yo", 2);
// console.log(monkey.breed);

// console.log(add(2,3));
// console.log(add(22,23));

//asynchronous programming
//we can achieve this using timer functions, promises, async-await

// function task1(){
//     console.log("task 1 started");
// }

// function task2(){
//     console.log("task 2 started");
// }
// console.log("started");

// let timefxn: any = setTimeout(() =>{
//     console.log("task 1 started");
// }, 3000)

// timefxn;

// setInterval(() =>{
//     console.log("task 2 started");
// }, 5000)

// console.log("ended");

//settimeout exexutes the function after the specified time
//setinterval executes the function after the specified time repeatedly until we clear the interval


//promises

// let p1 = new Promise<string>((resolve, reject) => {
//     let success = NaN;
//     if(success){
//         resolve("success");
//     }
//     else{
//         reject("failed");
//     }
// })

// p1.then((message) => {
//     console.log(message);
// }).catch((err) => {
//     console.log(err);
// }).finally(() => {
//     console.log("this will execute regardless of the outcome of the promise");
// })

//returning a promise

let p2 = new Promise<number>((res, rej) => {
    res(10);
});

p2.then(num => num*2   
).then(num => num-5).then((res) => {
    console.log(res);
    return res*3;
}).then((res) => {
    console.log(res);
});

// p2.then((num) =>{
//     console.log(num);
//     return num-1;
// }).then((num) =>{
//     console.log(num);
//     return num-1;
// }).catch((err)=>{
//     console.log(err);
// }).finally(() => {
//     console.log("done");
// });




// function getUser(): Promise<string>{
//     return new Promise((res, rej) => {
//         //res("hello user!");
//         rej("no user");
        
//     })
// }

// getUser().catch((message) => {
//     console.log(message);
//     return "failed";
// }).then((err) => {
//     console.log(err);
// }).finally(() => {
//     console.log("Goodbye!!");
// })

function fxn2(){
    console.log("hello");
}

function fxn1(fxn2: () => any){
    return fxn2;
}

fxn1(fxn2);


// PROMISE STATIC METHODS


