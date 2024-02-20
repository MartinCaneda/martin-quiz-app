/* if I use document.querySelector('[data-js="dark-mode-button"]' it doesn't
work, why? solved, the data-js had to be in the parent, fuck me*/
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const darkModeButton = document.querySelector('[data-js="dark-mode-button"]');

  darkModeButton.addEventListener("change", () => {
    body.classList.toggle("dark-mode");
  });
});
