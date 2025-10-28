const container = document.createElement("div");
container.classList.add("container");
const title = document.createElement("h1");
title.textContent = "Магічна куля";
const questionInput = document.createElement("input");
questionInput.type = "text";
questionInput.id = "question";
questionInput.placeholder = "Введіть своє запитання...";
const magicBall = document.createElement("div");
magicBall.classList.add("magic-ball");
magicBall.id = "magicBall";
const answerText = document.createElement("div");
answerText.classList.add("inner-text");
answerText.id = "answerText";
answerText.textContent = "?";
magicBall.appendChild(answerText);
container.appendChild(title);
container.appendChild(questionInput);
container.appendChild(magicBall);
document.body.appendChild(container);
const answers = [
  "Так!",
  "Ні",
  "Мабуть...",
  "Без сумнівів!",
  "Схоже на те.",
  "Не зараз",
  "Малоймовірно",
  "Так, але не сьогодні",
];
magicBall.addEventListener("click", () => {
  const question = questionInput.value.trim();
  if (question === "") {
    answerText.textContent = "Введіть запитання!";
    answerText.style.color = "#ff5555";
    return;
  }
  magicBall.style.animation = "shake 0.8s";
  setTimeout(() => {
    magicBall.style.animation = "breathing 5s infinite ease-in-out";
  }, 800);
  setTimeout(() => {
    const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    answerText.textContent = randomAnswer;
    answerText.style.color = "#00ffff";
    answerText.style.animation = "fadeIn 0.6s ease";
  }, 900);
  questionInput.value = "";
});