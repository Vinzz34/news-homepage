let menu = document.getElementById("menu");
let close = document.getElementById("close");
let nav = document.getElementById("nav");
let bg = document.getElementById("bg-overlay");

menu.addEventListener("click",() => {
    menu.classList.toggle("display-none");
    close.classList.toggle("display-block");
    nav.classList.toggle("nav-animation");
    bg.classList.toggle("bg-overlay");
    document.body.classList.toggle("overflow-hidden");
});

close.addEventListener("click",() => {
    menu.classList.toggle("display-none");
    close.classList.toggle("display-block");
    nav.classList.toggle("nav-animation");
    bg.classList.toggle("bg-overlay");
    document.body.classList.toggle("overflow-hidden");
});