// Mobile Menu Toggle + Hamburger Crossfade
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const hamburgerIcon = document.getElementById("hamburger-icon");
const closeIcon = document.getElementById("close-icon");

let isOpen = false;

mobileMenuBtn.addEventListener("click", () => {
  isOpen = !isOpen;

  // Toggle menu visibility (slide down effect)
  mobileMenu.classList.toggle("hidden");

  // Crossfade icons
  if (isOpen) {
    // Show X, hide Hamburger
    closeIcon.classList.remove("opacity-0");
    hamburgerIcon.classList.add("opacity-0");
  } else {
    // Show Hamburger, hide X
    closeIcon.classList.add("opacity-0");
    hamburgerIcon.classList.remove("opacity-0");
  }
});

// Smooth scroll for anchor links + Close menu after click
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });

      // If mobile menu is open, close it and reset icon
      if (isOpen) {
        isOpen = false;
        mobileMenu.classList.add("hidden");
        closeIcon.classList.add("opacity-0");
        hamburgerIcon.classList.remove("opacity-0");
      }
    }
  });
});

// Scroll Reveal Animations (Intersection Observer)
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
    threshold: 0.15, // Trigger when 15% of the element is visible
    rootMargin: "0px 0px -50px 0px", // Small bottom offset for better feel
  },
);

revealElements.forEach((el) => observer.observe(el));
