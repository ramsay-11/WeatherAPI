const cityBtn = document.querySelector("aside button");
const td = document.querySelectorAll("tbody td");
// console.log(td[0]);
cityBtn.addEventListener("click", () => {
    
    return new Promise((res, rej) => {
        setTimeout(() => {
            td[0].focus();
            res();
        },1000)
    })
})