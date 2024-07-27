"use strict";

function toggleMenu() {
  const nav = document.querySelector('.nav');
  const menuIcon = document.querySelector('.menu-icon');
  nav.classList.toggle('nav--active');
  if (nav.classList.contains('nav--active')) {
    menuIcon.innerHTML = '&#10006;'; 
  } else {
    menuIcon.innerHTML = '&#9776;';
  }
}

