"use strict";

const nav = document.querySelector("#nav");
const scroll = 200;
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const img1 = document.querySelector(".attr-img");
const img2 = document.querySelector(".attr-bg-img");
const img3 = document.querySelector(".attr-bg-img2");
console.log(img1, img2, img3);

btn1.addEventListener("click", function (e) {
  e.preventDefault();
  img1.style.width = "100%";
});

window.addEventListener("scroll", () => {
  if (window.scrollY > scroll) {
    nav.style.backgroundColor = "rgba(255, 255, 255, 0.3)"; // Reset opacity when scrolling back up
  } else {
    nav.style.backgroundColor = "rgba(255, 255, 255, 0.7)"; // Change opacity after scrolling
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const navbarLinks = document.querySelectorAll("#nav a");
  console.log(navbarLinks);

  navbarLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        // Calculate the position of the target element
        const offset = targetElement.offsetTop;

        // Scroll to the target element with smooth behavior
        window.scrollTo({
          top: offset,
          behavior: "smooth",
        });
      }
    });
  });
});
