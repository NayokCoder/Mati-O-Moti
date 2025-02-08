// === SLIDER FUNCTIONALITY ===
let currentIndex = 0;
const slides = document.getElementById("slides");
const buttons = document.querySelectorAll(".slide-button");
const totalSlides = document.querySelectorAll(".slide").length; // 6 স্লাইড ধরছি
let autoSlideInterval;

// Function to change slides
function changeSlide(index) {
  currentIndex = index;
  slides.style.transform = `translateX(-${index * 100}%)`;

  buttons.forEach((btn) => btn.classList.remove("bg-blue-500", "ring-2", "ring-blue-300"));
  if (buttons[index]) {
    buttons[index].classList.add("bg-blue-500", "ring-2", "ring-blue-300");
  }
}

// Auto-slide function
function autoSlide() {
  autoSlideInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides; // শেষ হলে আবার প্রথমে যাবে
    changeSlide(currentIndex);
  }, 30000); // Slide changes every 5 seconds
}

// Start auto-slide after text animation completes
setTimeout(autoSlide, 4000); // 4 সেকেন্ড পর শুরু হবে

// Pause auto-slide on user interaction, then resume
buttons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    changeSlide(index);
    clearInterval(autoSlideInterval); // Stop auto-slide
    setTimeout(autoSlide, 30000); // 5 সেকেন্ড পর আবার শুরু হবে
  });
});
