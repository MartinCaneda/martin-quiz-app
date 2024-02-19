document.addEventListener("DOMContentLoaded", () => {
  const toggleBookmark = document.querySelector(
    '[data-js="question-card__icon"]'
  );
  toggleBookmark.addEventListener("click", () => {
    if (toggleBookmark.src.endsWith("bookmark.png")) {
      toggleBookmark.src = "./assets/bookmark_filled.png";
    } else {
      toggleBookmark.src = "./assets/bookmark.png";
    }
  });
});
function toggleAnswer(button) {
  var answerElement = button.nextElementSibling;

  answerElement.classList.toggle("hidden");

  if (answerElement.classList.contains("hidden")) {
    button.textContent = "Show Answer";
  } else {
    button.textContent = "Hide Answer";
  }
}
