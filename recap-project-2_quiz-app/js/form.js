function toggleAnswer(button) {
  var answerElement = button.nextElementSibling;

  answerElement.classList.toggle("hidden");

  if (answerElement.classList.contains("hidden")) {
    button.textContent = "Show Answer";
  } else {
    button.textContent = "Hide Answer";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myForm");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const question = document.getElementById("newQuestion").value;
    const answer = document.getElementById("newAnswer").value;
    const tag = document.getElementById("newTags").value;

    const tagsArray = tag.split(" ");
    const tagsHTML = tagsArray
      .map((tag) => `<div class="question-card__tag">#${tag}</div>`)
      .join("");

    const newCard = `
    <section class="question-card">
    <img
      class="question-card__icon"
      src="./assets/bookmark.png"
      alt="bookmark"
      data-js="question-card__icon"
    />
    <h2 class="question-card__title">${question}</h2>
    <button class="question-card__button" onclick="toggleAnswer(this)">
      show answer
    </button>
    <p class="question-card__answer hidden">${answer}</p>
    <div class="question-card__tags">
    ${tagsHTML}
    </div>
  </section>
`;
    const cardContainer = document.getElementById("cardContainer");
    cardContainer.insertAdjacentHTML("beforeend", newCard);

    const toggleBookmark = document.querySelectorAll(
      '[data-js="question-card__icon"]'
    );

    toggleBookmark.forEach((toggleBookmark) => {
      toggleBookmark.addEventListener("click", () => {
        if (toggleBookmark.src.endsWith("bookmark.png")) {
          toggleBookmark.src = "./assets/bookmark_filled.png";
        } else {
          toggleBookmark.src = "./assets/bookmark.png";
        }
      });
    });
  });
  const questionInput = document.getElementById("newQuestion");
  const answerInput = document.getElementById("newAnswer");

  questionInput.addEventListener("input", () => {
    const length = questionInput.value.length;
    const charCount = 150 - length;
    qLeft.textContent = `${charCount} characters left`;
  });

  answerInput.addEventListener("input", () => {
    const length = answerInput.value.length;
    const charCount = 150 - length;
    aLeft.textContent = `${charCount} characters left`;
  });
});
