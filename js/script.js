"use strict";

// Finder HTML-elementet med klassen .slides (en container med billeder)//
const slides = document.querySelector(".slides");

// Finder alle HTML-elementerne med klassen .dot (farve cirklerne under slideren)//
const dots = document.querySelectorAll(".dot");

// Finder HTML-elementet med id'et #color-name (elementet der viser farvenavnet)//
const colorName = document.querySelector("#color-name");

// Finder HTML-elementet med klassen .product-showcase (containeren for produktbillederne)//
const showcase = document.querySelector(".product-showcase");

// Opretter et array med CSS-gradienter, som bruges til at ændre baggrundsfarven på produkt-showcasen, når slideren opdateres//
const colors = [
  "linear-gradient(to bottom, #f4d7d7 0%, #ffffff %)",
  "linear-gradient(to bottom, #f5f1e8 0%, #ffffff 100%)",
  "linear-gradient(to bottom, #e6d9ea 0%, #ffffff 100%)",
  "linear-gradient(to bottom, #dfe8d7 0%, #ffffff 100%)"
];

// Opretter variabelen index, som holder styr på det aktuelle billede i slideren. 
// Starter ved 0, hvilket betyder det første billede.//
let index = 0;

//En funktion der opdaterer slideren// 
function updateSlide() {

    //Flytter slideren horizontalt ved at bruge transform: translateX() CSS-egenskaben//
    slides.style.transform = `translateX(${-index * 100}%)`;
    //Opdaterer baggrundsfarven på produkt-showcasen baseret på det aktuelle index//
    showcase.style.background = colors[index];

    //Fjerner klassen 'active' fra alle dots, og tilføjer den til den aktuelle dot baseret på index//
    dots.forEach(dot => dot.classList.remove("active"));

    //Tilføjer klassen 'active' til den dot, der svarer til det aktuelle billede i slideren//
    dots[index].classList.add("active");

    // Skifter farvenavn//
    colorName.textContent = dots[index].dataset.color;
}
//Tilføjer et klik-event listener til hver dot, som opdaterer index og slideren, når en dot klikkes//
dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        index = i;
        updateSlide();
    });
});


