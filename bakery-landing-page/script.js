// Side Bar/Section
const navMenu = document.querySelector(".navbar");
const menuBtn = document.querySelector(".bx-menu-alt-left");
const closeBtn = document.getElementById("close-btn");
const heading = document.getElementById("heading");
const mainDiv = document.querySelector(".main");
const navLinks = document.querySelectorAll(".nav-links");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show-menu");
});

closeBtn.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
});

navLinks.forEach(function (navLink) {
    navLink.addEventListener("click", () =>{
        navMenu.classList.remove("show-menu");
    })
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 1) {
        heading.classList.add("active");
    }else {
        heading.classList.remove("active");
    }
})

