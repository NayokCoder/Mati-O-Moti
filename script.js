var textWrapper = document.querySelector(".ml3");
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime
  .timeline()
  .add({
    targets: ".ml3 .letter",
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i + 1),
  })
  .add({
    targets: ".ml3",
    opacity: 1, // Keep text visible after animation
    duration: 1000,
    easing: "easeOutExpo",
  });

// === SLIDER FUNCTIONALITY ===
let currentIndex = 0;
const slides = document.getElementById("slides");
const buttons = document.querySelectorAll(".slide-button");
const totalSlides = buttons.length;
let autoSlideInterval;

// Function to change slides
function changeSlide(index) {
  currentIndex = index;
  slides.style.transform = `translateX(-${index * 100}%)`;

  buttons.forEach((btn) => btn.classList.remove("bg-blue-500", "ring-2", "ring-blue-300"));
  buttons[index].classList.add("bg-blue-500", "ring-2", "ring-blue-300");
}

// Auto-slide function
function autoSlide() {
  autoSlideInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides; // Loop after last slide
    changeSlide(currentIndex);
  }, 20000); // Slide changes every 20 seconds
}

// Start auto-slide after text animation completes
setTimeout(autoSlide, 4000); // Adjust timing to start smoothly after text animation

// Pause auto-slide on user interaction, then resume
buttons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    changeSlide(index);
    clearInterval(autoSlideInterval); // Stop auto-slide
    setTimeout(autoSlide, 5000); // Resume after 5 seconds
  });
});
