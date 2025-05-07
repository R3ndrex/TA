const questions = document.querySelectorAll(".block-question");

questions.forEach((question) => {
    question.addEventListener("click", () => {
        question.classList.toggle("open");
    });
});
const emailInput = document.querySelector("input[type='email']");
emailInput.addEventListener("input", () => {
    if (emailInput.validity.typeMismatch) {
        document.querySelector("input[type='email']+span").textContent =
            "Incorrect email type";
        document.querySelector("input[type='email']+span").style.display =
            "block";
    } else if (emailInput.validity.valueMissing) {
        document.querySelector("input[type='email']+span").textContent =
            "This field is required";
        document.querySelector("input[type='email']+span").style.display =
            "block";
    } else {
        emailInput.setCustomValidity("");
        document.querySelector("input[type='email']+span").style.display =
            "none";
    }
});
const submitButton = document.querySelector("[type='submit']");
submitButton.addEventListener("click", (e) => {
    e.preventDefault();
});
