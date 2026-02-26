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
var disp = document.querySelector(".displayh1");
var buttons = document.querySelectorAll(".btn");
// let buttonArr = Array.from(buttons);
// console.log(buttonArr);
buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
        disp.innerText += btn.textContent;
        //update0();
    });
});
var btnAC = document.querySelector(".btnAC");
btnAC.addEventListener("click", function () {
    disp.innerText = "";
    //update0();
});
var btnEqual = document.querySelector(".btnEQ");
btnEqual.addEventListener("click", function () {
    var cleaned = disp.innerText.replace(/\b0+(\d)/g, "$1");
    disp.innerText = eval(cleaned);
    //update0();
});
//update0();
