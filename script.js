const magicBall = document.getElementById("magicBall");
const answerText = document.getElementById("answerText");
const questionInput = document.getElementById("question");
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