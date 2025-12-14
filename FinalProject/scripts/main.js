// -----------------
// Scroll animation
// -----------------

// Reveal cards on scroll
const revealItems = document.querySelectorAll(".reveal-on-scroll");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // True when element is on screen
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      // Once on screen stop observing
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 }); // Trigger when 20% visible

// Watch every reveal item
revealItems.forEach(el => observer.observe(el));


// ------------------
// Parallax effect
// ------------------

const hero = document.getElementById("hero");

function updateParallax(){
  if (!hero) return;
  const y = window.scrollY;
  hero.style.backgroundPosition = `center ${y * 0.25}px`;
}

// Update parallax every time user scrolls
window.addEventListener("scroll", updateParallax, { passive: true });
updateParallax();
