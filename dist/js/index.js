"use strict";
let love = document.querySelector(".love");
let cacto = document.querySelector(".cacto");
let cacto2 = document.querySelector(".cacto2");
let jump = () => {
    love?.classList.add("jump");
    setTimeout(() => {
        love?.classList.remove("jump");
    }, 500);
};
let loop = setInterval(() => {
    let cactoPosition = cacto?.offsetLeft;
    let cacto2Position = cacto2?.offsetLeft;
    let lovePosition = Number(window.getComputedStyle(love).bottom.replace("px", ""));
    if (cactoPosition <= 80 && cactoPosition > 0 && lovePosition < 100) {
        cacto.style.animation = "none";
        cacto.style.left = `${cactoPosition}px`;
    }
    if (cacto2Position <= 50 && cacto2Position > 0 && lovePosition < 105) {
        cacto2.style.animation = "none";
        cacto2.style.left = `${cacto2Position}px`;
        love.style.animation = "none";
        love.style.bottom = `${lovePosition}px`;
        love.src = "dist/img/girl_pixel_art_death.gif";
        love.style.width = "160px";
        clearInterval(loop);
    }
});
document.addEventListener("keydown", jump);
