// Script principal do portfólio

// ===== Scroll suave para links de navegação =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60, // ajusta para navbar fixa
        behavior: "smooth",
      });
    }
  });
});

// ===== Animação simples nos cards =====
const cards = document.querySelectorAll(".card");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

cards.forEach((card) => {
  observer.observe(card);
});

// ===== Menu responsivo (hamburger) =====
const navLinks = document.querySelector(".nav-links");

menuToggle.innerHTML = "☰";
menuToggle.classList.add("menu-toggle");
menuToggle.setAttribute("aria-label", "Toggle navigation");

document.querySelector(".navbar").prepend(menuToggle);

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Fechar menu ao clicar em um link (mobile)
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});
