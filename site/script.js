const typingText = document.getElementById('name');
const text = typingText.textContent;
typingText.textContent = '';

let i = 0;
const typingInterval = 100; // Adjust typing speed in milliseconds

const type = () => {
  if (i < text.length) {
    typingText.textContent += text.charAt(i);
    i++;
    setTimeout(type, typingInterval);
  }
};

type();