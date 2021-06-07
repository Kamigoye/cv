const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-right");
const closeBtn = document.querySelector(".closebtn");

const clickLink = () => {
    navMenu.classList.toggle("show");
    closeBtn.classList.toggle("show");
};

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
    closeBtn.classList.toggle("show");
});

closeBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");
    closeBtn.classList.toggle("show");
});

