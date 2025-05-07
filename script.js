const questions = document.querySelectorAll(".block-question");
const emailInput = document.querySelector("input[type='email']");
const emailSpan = document.querySelector("input[type='email']+span");
const submitButton = document.querySelector("[type='submit']");

questions.forEach((question) => {
    question.addEventListener("click", () => {
        question.classList.toggle("open");
    });
});

emailInput.addEventListener("input", () => {
    if (emailInput.validity.typeMismatch) {
        emailSpan.textContent = "Incorrect email type";
        emailSpan.style.display = "block";
    } else if (emailInput.validity.valueMissing) {
        emailSpan.textContent = "This field is required";
        emailSpan.style.display = "block";
    } else {
        emailInput.setCustomValidity("");
        emailSpan.style.display = "none";
    }
});

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
});
