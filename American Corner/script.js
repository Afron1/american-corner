"use strict";

const nav = document.querySelector("#nav");
const scroll = 200;

console.log(nav);

window.addEventListener("scroll", () => {
  if (window.scrollY > scroll) {
    nav.style.backgroundColor = "rgba(255, 255, 255, 0.7)"; // Change opacity after scrolling
  } else {
    navbar.style.backgroundColor = "rgba(255, 255, 255, 0.3)"; // Reset opacity when scrolling back up
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
