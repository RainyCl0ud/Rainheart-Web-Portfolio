// Typing effect
const typingText = document.querySelector(".typing");
if (typingText) {
  const word = "A Full-stack Web Developer.";
  let charIndex = 0;

  function typeEffect() {
    if (charIndex <= word.length) {
      typingText.textContent = word.substring(0, charIndex);
      charIndex++;
      setTimeout(typeEffect, 150);
    }
  }
  document.addEventListener("DOMContentLoaded", typeEffect);
}

// Removed GSAP animations
// Removed scroll animations
