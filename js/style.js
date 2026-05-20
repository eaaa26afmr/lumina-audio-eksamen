"use strict";

const slides = document.querySelector(".slides");
const dots = document.querySelectorAll(".dot");
let index = 0;

function updateSlide() {
    slides.style.transform = `translateX(${-index * 100}%)`;
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
}

dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        index = i;
        updateSlide();
    });
});