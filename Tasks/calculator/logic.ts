console.log("Logic file loaded");


// let btn0: any = document.querySelector(".btn0");
// function update0(){
//     if(disp.innerText === ""){
//         btn0.setAttribute("disabled", "true");
//     }
//     else{
//         btn0.removeAttribute("disabled");
//     }
// }

let disp: any = document.querySelector(".displayh1");
let buttons = document.querySelectorAll(".btn");

// let buttonArr = Array.from(buttons);
// console.log(buttonArr);

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        disp.innerText += btn.textContent;
        //update0();
})})


let btnAC: any = document.querySelector(".btnAC");
btnAC.addEventListener("click", () => {
    disp.innerText = "";
    //update0();
})

let btnEqual: any = document.querySelector(".btnEQ");
btnEqual.addEventListener("click", () => {
        let cleaned = disp.innerText.replace(/\b0+(\d)/g, "$1");
        disp.innerText = eval(cleaned);
    //update0();
})

//update0();







