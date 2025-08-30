// JavaScript functionality will be added section by section
console.log("Navapar Restaurant site loaded.");
// Mobile navbar toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("open");
});
// Hero Background Slider
const hero = document.querySelector(".hero");

// Replace with your food-related images
const heroImages = [
  "https://picsum.photos/1920/1080?food1",
  "https://picsum.photos/1920/1080?food2",
  "https://picsum.photos/1920/1080?food3"
];

let currentImageIndex = 0;

function changeHeroBackground() {
  hero.style.setProperty(
    "--hero-bg",
    `url(${heroImages[currentImageIndex]})`
  );
  hero.style.setProperty("background-image", `url(${heroImages[currentImageIndex]})`);
  currentImageIndex = (currentImageIndex + 1) % heroImages.length;
}

// Initialize
changeHeroBackground();
setInterval(changeHeroBackground, 5000); // Change every 5s