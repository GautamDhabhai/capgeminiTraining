// console.log(window);

// var x = 10;
// let y = 20;
// const z = 30;
// console.log(document.body.childNodes);
// console.log(document.body.children);

// console.log(document.body.children[2]);
// let div1 = document.body.children[2];

// console.log(div1.firstElementChild);
// console.log(div1.lastElementChild);
// console.log(div1.nextElementChild);

// let h4 = div1.lastChild;






//direct dom access methods

let h1 = document.getElementsByClassName("h");
// console.log(h1);

let arr = Array.from(h1);

// console.log(arr);

arr.map((ele)=> {
    ele.style.color="blue";
    ele.style.backgroundColor="skyblue";
    ele.style.fontSize="60px"
})


// let obj = {
//     1: "xyz"
// }

// console.log(obj.1);

 //if two elem have same id bymistake getelembyid will give 1st elem in console but provide styling for both



 //query selector

 let x = document.querySelector(".h");
 
 x.style.color="gray";

 //create element
let img1 = document.createElement("img");
img1.setAttribute("src", "https://crakthesky.wordpress.com/wp-content/uploads/2018/12/saiki-k-header.jpg");

document.body.append(img1)
console.log(document.body);

// var xyz = 10;

// function nameChange(){
//     var xyz = 20;
//     console.log(xyz);
// }

// nameChange();
// console.log(xyz);

let head = document.createElement("h1");
head.textContent="heyy there!!!"

document.body.append(head);

let p = document.createElement("p");
p.textContent="playwright";
p.setAttribute("id", "p1");
document.body.append(p);
console.log(p);
p.removeAttribute("id");
console.log(p);
document.body.removeChild(p);
console.log(p);
//diff between innerhtml and innertext

let btn = document.getElementById("btn");
console.log(btn)
// btn.onclick= function demo(){
//     alert("hejfhjdfh")
// }

btn.addEventListener("click", ()=>{
    alert("heygy");
    let img2 = document.createElement("img");
    img2.setAttribute("src", "https://static0.srcdn.com/wordpress/wp-content/uploads/2024/10/momo-okarun-dandadan.jpg?w=1200&h=900&fit=crop");
    document.body.append(img2);
    //document.body.style.backgroundColor="pink";
})





 
