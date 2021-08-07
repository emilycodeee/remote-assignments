"use strict";

const welcomeTitle = document.querySelector(".welcome-title");
const header = document.querySelector(".main-slide");
const actionBtn = document.querySelector(".action-btn");
const secondContent = document.querySelector(".second-content");
const menu = document.querySelector(".menu");
const menuBtn = document.querySelector("#menu-btn");

menuBtn.addEventListener("click", (e) => {
  menu.classList.toggle("active");
});

let welcomeMessage = 0;
header.addEventListener("click", (e) => {
  if (e.target.tagName === "H1" && welcomeMessage === 0) {
    welcomeTitle.textContent = "Have a Good Time!";
    welcomeMessage = 1;
    console.log();
  } else {
    welcomeTitle.textContent = "Takao：Kaohsiung";
    welcomeMessage = 0;
  }
});

actionBtn.addEventListener("click", (e) => {
  if (actionBtn.textContent === "Close") {
    secondContent.style.display = "none";
    actionBtn.textContent = "Read more >> ";
    return;
  }
  secondContent.style.display = "block";
  actionBtn.textContent = "Close";
  // readMore = 1;
});
