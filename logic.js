const num = document.querySelector("#num");
const btn1 = document.querySelector("#btn1");
const  btn2= document.querySelector("#btn2");

btn1.addEventListener("click", () => {
    let x = Number(num.innerHTML);
    num.innerHTML = x + 1;
});

btn2.addEventListener("click", () => {
  let x = Number(num.innerHTML);
  num.innerHTML = x - 1;
});
