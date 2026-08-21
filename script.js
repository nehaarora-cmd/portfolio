// Navbar scroll effect
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("shadow-lg", "bg-slate-900/90");
  } else {
    navbar.classList.remove("shadow-lg", "bg-slate-900/90");
  }
});

// Mobile Menu Toggle with Grid Animation
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const hamburgerIcon = document.getElementById("hamburger-icon");
const closeIcon = document.getElementById("close-icon");
let isOpen = false;

menuBtn.addEventListener("click", () => {
  isOpen = !isOpen;

  // Smooth slide down/up using grid rows
  if (isOpen) {
    mobileMenu.classList.add("open");
    closeIcon.classList.remove("opacity-0");
    hamburgerIcon.classList.add("opacity-0");
  } else {
    mobileMenu.classList.remove("open");
    closeIcon.classList.add("opacity-0");
    hamburgerIcon.classList.remove("opacity-0");
  }
});

// Close mobile menu on link click
document.querySelectorAll("#mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    isOpen = false;
    mobileMenu.classList.remove("open");
    closeIcon.classList.add("opacity-0");
    hamburgerIcon.classList.remove("opacity-0");
  });
});

// Scroll Reveal Animations
const revealElements = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  },
);
revealElements.forEach((el) => observer.observe(el));
