const cityBtn = document.querySelector("aside button");
const td = document.querySelectorAll("tbody td");
// console.log(td[0]);
cityBtn.addEventListener("click", () => {
    
    console.log("clicked")
    return new Promise((res, rej) => {
        setTimeout(() => {
            td[0].focus();
            red(1);
        },1000)
    })
}).then((num) => {
    td[num].focus();
    return 2;
}).then(() => {
    td[2].focus();
}).then(() => {
    td[3].focus();
})