// Reveal cards on scroll
const revealItems = document.querySelectorAll(".reveal-on-scroll");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

revealItems.forEach(el => observer.observe(el));

// Optional parallax: gently shift background as you scroll
const hero = document.getElementById("hero");

function updateParallax(){
  if (!hero) return;
  const y = window.scrollY;
  hero.style.backgroundPosition = `center ${y * 0.25}px`;
}

window.addEventListener("scroll", updateParallax, { passive: true });
updateParallax();
