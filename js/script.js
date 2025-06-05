// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
const chatbotIcon = document.getElementById('chatbot-icon');
const chatbotWindow = document.getElementById('chatbot-window');
const chatbotClose = document.getElementById('chatbot-close');
const chatbotMessages = document.getElementById('chatbot-messages');
const chatbotForm = document.getElementById('chatbot-form');
const chatbotInput = document.getElementById('chatbot-input');

chatbotIcon.addEventListener('click', () => {
  chatbotWindow.classList.toggle('hidden');
  chatbotInput.focus();
});

chatbotClose.addEventListener('click', () => {
  chatbotWindow.classList.add('hidden');
});

chatbotForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const userMessage = chatbotInput.value.trim();
  if (!userMessage) return;

  appendMessage('user', userMessage);
  chatbotInput.value = '';
  chatbotInput.disabled = true;

  // Simulate bot response with a delay
  setTimeout(() => {
    const botResponse = getBotResponse(userMessage);
    appendMessage('bot', botResponse);
    chatbotInput.disabled = false;
    chatbotInput.focus();
  }, 1000);
});

function appendMessage(sender, text) {
  const msgDiv = document.createElement('div');
  msgDiv.classList.add('message', sender);
  msgDiv.textContent = text;
  chatbotMessages.appendChild(msgDiv);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function getBotResponse(message) {
  const msg = message.toLowerCase();

  if (msg.includes('hello') || msg.includes('hi')) {
    return "Hello! How can I assist you with Versuance's services today?";
  }
  if (msg.includes('service')) {
    return "We offer IT consulting, staffing, cloud solutions, cybersecurity, and custom software development.";
  }
  if (msg.includes('contact')) {
    return "You can contact us via email at contact@versuance.com or call +91 98765 43210.";
  }
  if (msg.includes('pricing') || msg.includes('cost')) {
    return "Our pricing depends on your specific needs. Please get in touch for a customized quote.";
  }
  return "Thanks for reaching out! Please provide more details or ask another question.";
}
document.getElementById('newsletter-form').addEventListener('submit', function(e) {
  e.preventDefault();
  // Here you can add integration with email services like Mailchimp or send to your backend.
  this.reset();
  document.getElementById('newsletter-message').style.display = 'block';
  setTimeout(() => {
    document.getElementById('newsletter-message').style.display = 'none';
  }, 5000);
});
