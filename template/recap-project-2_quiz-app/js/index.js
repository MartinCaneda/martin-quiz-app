document.addEventListener("DOMContentLoaded", function () {
  var iconElement = document.querySelector(".question-card__icon");

  iconElement.addEventListener("click", function () {
    if (iconElement.src.endsWith("bookmark.png")) {
      iconElement.src = "./assets/bookmark_filled.png";
    } else {
      iconElement.src = "./assets/bookmark.png";
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
