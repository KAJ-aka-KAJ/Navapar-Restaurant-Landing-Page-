// ==================== Navapar Restaurant Site JS ====================

console.log("Navapar Restaurant site loaded.");

// -------------------- 1. Mobile Navbar Toggle --------------------
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("open");
});

// -------------------- 2. Hero Slider --------------------
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

// Auto-slide every 5 seconds
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 5000);

// -------------------- 3. Menu Carousel Scroll --------------------
const menuCarousel = document.querySelector('.menu-grid'); // container
const btnPrev = document.querySelector('#menu-prev');
const btnNext = document.querySelector('#menu-next');

if (menuCarousel && btnPrev && btnNext) {
  btnPrev.addEventListener('click', () => {
    menuCarousel.scrollBy({
      left: -300,   // scroll left 300px (relative)
      behavior: 'smooth'
    });
  });

  btnNext.addEventListener('click', () => {
    menuCarousel.scrollBy({
      left: 300,    // scroll right 300px
      behavior: 'smooth'
    });
  });
}

// -------------------- 4. External Link Buttons --------------------
// Example: reservation button links
const reservationBtn = document.querySelectorAll('.btn.reservation');

reservationBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    window.open('https://www.opentable.com/', '_blank'); // replace with actual link
  });
});

// -------------------- 5. Newsletter Signup Placeholder --------------------
const newsletterInput = document.querySelector('#newsletter-input');
const newsletterBtn = document.querySelector('#newsletter-btn');

if (newsletterBtn) {
  newsletterBtn.addEventListener('click', () => {
    alert('Newsletter signup coming soon!');
  });
}