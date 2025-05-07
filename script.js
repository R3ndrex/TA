const questions = document.querySelectorAll(".block-question");

questions.forEach((question) => {
    question.addEventListener("click", () => {
        question.classList.toggle("open");
    });
});
