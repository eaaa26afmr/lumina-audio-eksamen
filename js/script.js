"use strict";


const slides = document.querySelector(".slides");
const dots = document.querySelectorAll(".dot");
const colorName = document.querySelector("#color-name");
//Tilføjer farverne til de forskellige slides//
const showcase = document.querySelector(".product-showcase");


const colors = [
  "linear-gradient(to bottom, #f4d7d7 0%, #ffffff 100%)",
  "linear-gradient(to bottom, #f5f1e8 0%, #ffffff 100%)",
  "linear-gradient(to bottom, #e6d9ea 0%, #ffffff 100%)",
  "linear-gradient(to bottom, #dfe8d7 0%, #ffffff 100%)"
];
 //Holder styr på det aktuelle slide//
let index = 0;

function updateSlide() {

    slides.style.transform = `translateX(${-index * 100}%)`;

    showcase.style.background = colors[index];

    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");

    //Skifter farvenavnet til det aktuelle dot//
    colorName.textContent = dots[index].dataset.color;
}

dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        index = i;
        updateSlide();
    });
});







