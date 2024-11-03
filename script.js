function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.logo');
    logo.addEventListener('click', function() {
      document.body.classList.toggle('dark-theme');
    });
  });