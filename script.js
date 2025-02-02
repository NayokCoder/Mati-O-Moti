function changeSlide(index) {
  // Update slider position
  document.getElementById("slides").style.transform = `translateX(-${index * 100}%)`;

  const buttons = document.querySelectorAll(".slide-button"); // Use a common class for buttons
  buttons.forEach((btn) => btn.classList.remove("bg-blue-500", "ring-2", "ring-blue-300"));
  buttons[index].classList.add("bg-blue-500", "ring-2", "ring-blue-300");
}
