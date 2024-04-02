decrementBtn = document.querySelector("#decrement");
incrementBtn = document.querySelector("#increment");
countBox = document.querySelector(".count-box");
reset = document.querySelector("#Reset");

decrementBtn.addEventListener("click",()=>{
    let currentValue = +countBox.textContent;
    countBox.textContent = ++currentValue;
})

incrementBtn.addEventListener("click", ()=>{
    let currentValue = +countBox.textContent;
    countBox.textContent = --currentValue;
})

reset.addEventListener("click", ()=>{
    countBox.textContent = 0;
})