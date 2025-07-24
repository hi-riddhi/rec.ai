// js/chat.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const input = form.querySelector("input[type='text'], input[type='email'], input[type='url']");
  const chatBox = document.createElement("div");
  chatBox.id = "chat-box";
  document.body.appendChild(chatBox);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const userInput = input.value.trim();
    if (!userInput) return;

    const userMessage = document.createElement("p");
    userMessage.className = "user";
    userMessage.textContent = `🧑‍💼 You: ${userInput}`;
    chatBox.appendChild(userMessage);

    // Simulated GPT response (replace with API call if needed)
    const botMessage = document.createElement("p");
    botMessage.className = "bot";
    botMessage.textContent = `🤖 Melo: Thank you! We'll review your submission shortly.`;
    chatBox.appendChild(botMessage);

    input.value = "";
  });
});
