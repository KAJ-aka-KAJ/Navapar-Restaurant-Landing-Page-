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
  "https://www.santaanasweets.com/wp-content/uploads/scallops-7404270_1280-768x512.jpg.webp",
  "https://www.allrecipes.com/thmb/wrNZyC416h41hqFoVno3xdR-zCI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/49404-Juiciest-Hamburgers-Ever-mfs-050-0ac3bef367714d89a1c219d9cfdb9186.jpg",
  "background-image: url('https://www.allrecipes.com/thmb/ZkkFR4ljzYNYj7UulkhFVUe0wE4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/LorrainesClubSandwich_AR30Min_038_Photo-by-Allrecipes-1-df96417adce0448c80ba3a7b7631cac7.jpg"
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