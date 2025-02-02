const navScroll = document.getElementById("navScroll");
const leftScroll = document.getElementById("leftScroll");
const rightScroll = document.getElementById("rightScroll");

// Show buttons only when scrolling is possible
function toggleScrollButtons() {
  leftScroll.classList.toggle("hidden", navScroll.scrollLeft === 0);
  rightScroll.classList.toggle("hidden", navScroll.scrollLeft + navScroll.clientWidth >= navScroll.scrollWidth);
}

// Scroll left and right
leftScroll.addEventListener("click", () => {
  navScroll.scrollBy({ left: -200, behavior: "smooth" });
});
rightScroll.addEventListener("click", () => {
  navScroll.scrollBy({ left: 200, behavior: "smooth" });
});

// Detect scroll to toggle buttons
navScroll.addEventListener("scroll", toggleScrollButtons);
window.addEventListener("resize", toggleScrollButtons);

// Initial check
toggleScrollButtons();
