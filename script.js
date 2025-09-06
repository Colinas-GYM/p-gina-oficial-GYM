// Animación simple para que el navbar cambie al hacer scroll
window.addEventListener("scroll", function() {
  const nav = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    nav.style.background = "rgba(0, 0, 0, 0.95)";
  } else {
    nav.style.background = "rgba(0, 0, 0, 0.85)";
  }
});
